import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  Check,
  CircleAlert,
  CircleCheck,
  Copy,
  LoaderCircle,
  Mail,
  MessageSquare,
  Settings,
  ShoppingBag,
} from 'lucide-react';
import { ExternalLinks, Inquiry } from '../types';

interface ContactProps {
  onAddInquiry: (inquiry: Inquiry) => void;
  selectedProgramId: string | null;
  onOpenPrivacyModal: () => void;
  onOpenLinkSettings: () => void;
  externalLinks: ExternalLinks;
}

export const Contact: React.FC<ContactProps> = ({
  onAddInquiry,
  selectedProgramId,
  onOpenPrivacyModal,
  onOpenLinkSettings,
  externalLinks,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(selectedProgramId || 'ON_SOLUTION');
  const [message, setMessage] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState<Inquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedProgramId) {
      setProgram(selectedProgramId);
    }
  }, [selectedProgramId]);

  const formatPhone = (val: string) => {
    const numbers = val.replace(/[^0-9]/g, '');
    let formatted = numbers;
    if (numbers.length > 3 && numbers.length <= 7) {
      formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else if (numbers.length > 7) {
      formatted = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('성함을 입력해 주세요.');
      return;
    }

    if (phone.replace(/[^0-9]/g, '').length < 10) {
      setErrorMessage('올바른 연락처(휴대전화 번호)를 입력해 주세요.');
      return;
    }

    if (!agreedToPrivacy) {
      setErrorMessage('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);

    const programLabel =
      program === 'ON_SOLUTION'
        ? '온솔루션 (ON SOLUTION)'
        : program === 'YOU_SOLUTION'
        ? '유솔루션 (YOU SOLUTION)'
        : '일반 문의';

    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newInquiry: Inquiry = {
      id: `WBY-${Date.now().toString().slice(-6)}-${randNum}`,
      name: name.trim(),
      phone: phone.trim(),
      program,
      message: message.trim(),
      agreedToPrivacy: true,
      createdAt: new Date().toISOString(),
      status: 'PENDING',
    };

    onAddInquiry(newInquiry);
    setSubmittedInquiry(newInquiry);

    // 1. Netlify Form submission (if hosted on Netlify)
    const params = new URLSearchParams();
    params.append('form-name', 'wellbyyoung-consultation');
    params.append('name', name.trim());
    params.append('phone', phone.trim());
    params.append('program', programLabel);
    params.append('message', message.trim() || '(내용 없음)');
    params.append('inquiryId', newInquiry.id);
    params.append('submittedAt', new Date().toLocaleString('ko-KR'));

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      }).catch(() => {});
    } catch {
      // ignore
    }

    // 2. FormSubmit endpoint for direct email delivery
    try {
      await fetch('https://formsubmit.co/ajax/wellbyyoung@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[웰바이영 상담 신청] ${name.trim()}님 (${programLabel})`,
          성함: name.trim(),
          연락처: phone.trim(),
          신청프로그램: programLabel,
          문의내용: message.trim() || '(내용 없음)',
          접수번호: newInquiry.id,
          접수일시: new Date().toLocaleString('ko-KR'),
          _template: 'table',
          _captcha: 'false',
        }),
      }).catch(() => {});
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false);
    }

    setName('');
    setPhone('');
    setMessage('');
    setAgreedToPrivacy(false);
  };

  const copyInquiryDetails = () => {
    if (!submittedInquiry) return;
    const progLabel =
      submittedInquiry.program === 'ON_SOLUTION'
        ? '온솔루션 (ON SOLUTION)'
        : submittedInquiry.program === 'YOU_SOLUTION'
        ? '유솔루션 (YOU SOLUTION)'
        : '일반 문의';

    const textToCopy = `[웰바이영 상담 신청 내역]\n· 접수번호: ${submittedInquiry.id}\n· 성함: ${
      submittedInquiry.name
    }\n· 연락처: ${submittedInquiry.phone}\n· 신청 프로그램: ${progLabel}\n· 문의 내용: ${
      submittedInquiry.message || '(내용 없음)'
    }\n· 공식 수신처: wellbyyoung@gmail.com`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-brand text-xs sm:text-sm tracking-[0.25em] uppercase text-[#627A65] font-semibold block mb-2">
            Consultation &amp; Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            건강한 변화의 시작, 웰바이영과 함께하세요.
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light text-balance">
            작은 습관의 변화가 만드는 일상의 큰 활력, 전문가와 함께 나누어 보세요. 온라인 상담 폼 또는 메신저를 통해 편리하게 문의하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-7 bg-[#F7F5F0] rounded-lg border border-[#E3DED4] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {submittedInquiry ? (
              <div className="py-8 px-4 text-center space-y-4">
                <div className="w-12 h-12 bg-[#E8ECE8] text-[#4E6351] rounded-full flex items-center justify-center mx-auto">
                  <CircleCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#1B1E1C]">
                  상담 신청이 정상 접수되었습니다
                </h3>
                <p className="text-xs sm:text-sm text-[#59605A] font-light leading-relaxed max-w-md mx-auto">
                  작성해 주신 상담 신청 내용이 웰바이영 공식 수신처(
                  <span className="font-medium text-[#4E6351]">wellbyyoung@gmail.com</span>
                  )로 전송되었습니다. 박혜영 대표가 내용을 확인한 후{' '}
                  <strong className="text-[#2C302D] font-medium">7일 이내</strong>에 남겨주신 연락처로 개별 안내를 드립니다.
                </p>

                <div className="my-6 p-4 bg-[#FAF8F5] rounded border border-[#E3DED4] text-xs text-left space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-[#767E77]">수신처 (이메일):</span>
                    <span className="font-mono font-medium text-[#4E6351]">
                      wellbyyoung@gmail.com
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767E77]">접수 번호:</span>
                    <span className="font-mono font-medium text-[#2C302D]">
                      {submittedInquiry.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767E77]">성함:</span>
                    <span className="text-[#2C302D]">{submittedInquiry.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767E77]">연락처:</span>
                    <span className="text-[#2C302D] font-mono">{submittedInquiry.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#767E77]">신청 프로그램:</span>
                    <span className="font-medium text-[#4E6351]">
                      {submittedInquiry.program === 'ON_SOLUTION'
                        ? '온솔루션 (ON SOLUTION)'
                        : submittedInquiry.program === 'YOU_SOLUTION'
                        ? '유솔루션 (YOU SOLUTION)'
                        : '일반 문의'}
                    </span>
                  </div>
                  {submittedInquiry.message && (
                    <div className="pt-2 border-t border-[#E3DED4]/60">
                      <span className="text-[#767E77] block mb-1">문의 내용:</span>
                      <p className="text-[#2C302D] bg-white/70 p-2.5 rounded text-[11px] font-light leading-relaxed whitespace-pre-wrap">
                        {submittedInquiry.message}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-3.5 bg-[#FAF8F5] rounded border border-[#E3DED4] text-[11px] text-[#59605A] text-left leading-relaxed max-w-md mx-auto space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-[#2C302D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#627A65]" />
                    <span>상담 안내 및 확인 사항</span>
                  </div>
                  <p>
                    · 문의 내역이 <strong>wellbyyoung@gmail.com</strong> 및 사이트 관리 시스템에 접수되었습니다.
                  </p>
                  <p>
                    · 박혜영 대표가 접수 내용을 확인한 후 <strong>최대 7일 이내</strong>에 연락드립니다.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 pt-2">
                  <a
                    href={`mailto:wellbyyoung@gmail.com?subject=${encodeURIComponent(
                      `[웰바이영 상담 신청] ${submittedInquiry.name}님 (${submittedInquiry.id})`
                    )}&body=${encodeURIComponent(
                      `[웰바이영 상담 신청]\n\n· 성함: ${submittedInquiry.name}\n· 연락처: ${
                        submittedInquiry.phone
                      }\n· 접수 번호: ${submittedInquiry.id}\n· 신청 프로그램: ${
                        submittedInquiry.program === 'ON_SOLUTION'
                          ? '온솔루션'
                          : submittedInquiry.program === 'YOU_SOLUTION'
                          ? '유솔루션'
                          : '일반 문의'
                      }\n\n· 문의 내용:\n${
                        submittedInquiry.message || '(내용 없음)'
                      }\n\n웰바이영 공식 수신처: wellbyyoung@gmail.com`
                    )}`}
                    className="w-full sm:w-auto px-3.5 py-2 text-xs font-medium text-[#4E6351] bg-[#E8ECE8] hover:bg-[#D3DDD3] transition-colors rounded-sm tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>이메일(wellbyyoung@gmail.com)로 보내기</span>
                  </a>

                  <button
                    onClick={copyInquiryDetails}
                    className="w-full sm:w-auto px-3.5 py-2 text-xs font-medium text-[#2C302D] bg-[#EFECE5] hover:bg-[#E3DED4] transition-colors rounded-sm tracking-wider flex items-center justify-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#4E6351]" />
                        <span className="text-[#4E6351]">복사되었습니다!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>내용 복사</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setSubmittedInquiry(null)}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] transition-colors rounded-sm tracking-wider"
                  >
                    새 문의 작성
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#E3DED4] pb-4">
                  <h3 className="text-lg font-medium text-[#1B1E1C]">온라인 상담 신청</h3>
                  <p className="text-xs text-[#767E77] font-light mt-0.5">
                    궁금하신 프로그램과 일상 고민을 남겨주시면 맞춤형 안내를 도와드립니다.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50/80 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
                    <CircleAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name-input" className="block text-xs font-medium text-[#2C302D] mb-1.5">
                    이름 (성함) <span className="text-[#627A65]">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone-input" className="block text-xs font-medium text-[#2C302D] mb-1.5">
                    연락처 (휴대전화 번호) <span className="text-[#627A65]">*</span>
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    value={phone}
                    onChange={(e) => formatPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    maxLength={13}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none transition-colors font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C302D] mb-1.5">
                    관심 프로그램 선택 <span className="text-[#627A65]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setProgram('ON_SOLUTION')}
                      className={`py-2.5 px-3 text-xs text-left rounded-sm border transition-all ${
                        program === 'ON_SOLUTION'
                          ? 'bg-[#FAF8F5] border-[#4E6351] text-[#1B1E1C] font-medium shadow-2xs'
                          : 'bg-white border-[#E3DED4] text-[#59605A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="font-serif-brand font-semibold text-[11px] text-[#627A65]">
                        01
                      </div>
                      <div className="text-xs font-medium">온솔루션</div>
                      <div className="text-[10px] text-[#767E77] truncate">온라인 휴식설계</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setProgram('YOU_SOLUTION')}
                      className={`py-2.5 px-3 text-xs text-left rounded-sm border transition-all ${
                        program === 'YOU_SOLUTION'
                          ? 'bg-[#FAF8F5] border-[#4E6351] text-[#1B1E1C] font-medium shadow-2xs'
                          : 'bg-white border-[#E3DED4] text-[#59605A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="font-serif-brand font-semibold text-[11px] text-[#627A65]">
                        02
                      </div>
                      <div className="text-xs font-medium">유솔루션</div>
                      <div className="text-[10px] text-[#767E77] truncate">1:1 집중 맞춤관리</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setProgram('GENERAL')}
                      className={`py-2.5 px-3 text-xs text-left rounded-sm border transition-all ${
                        program === 'GENERAL'
                          ? 'bg-[#FAF8F5] border-[#4E6351] text-[#1B1E1C] font-medium shadow-2xs'
                          : 'bg-white border-[#E3DED4] text-[#59605A] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="font-serif-brand font-semibold text-[11px] text-[#627A65]">
                        03
                      </div>
                      <div className="text-xs font-medium">기타 상담</div>
                      <div className="text-[10px] text-[#767E77] truncate">일반 프로그램 문의</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-medium text-[#2C302D] mb-1.5">
                    문의 내용
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="현재 식습관, 피로도, 일상에서 느끼는 불편 사항 등을 편안하게 남겨주세요."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <div className="flex items-start gap-2.5">
                    <input
                      id="privacy-consent"
                      type="checkbox"
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      className="mt-0.5 rounded border-[#C9C2B4] text-[#4E6351] focus:ring-[#4E6351]"
                    />
                    <label
                      htmlFor="privacy-consent"
                      className="text-xs text-[#59605A] leading-normal select-none"
                    >
                      [필수] 개인정보 수집 및 이용에 동의합니다.{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacyModal}
                        className="text-[#4E6351] underline hover:text-[#1B1E1C] ml-1"
                      >
                        전문 보기
                      </button>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E3DED4] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-[#767E77] font-light">
                    * 작성하신 문의 내용은 웰바이영 수신처(
                    <strong className="text-[#4E6351]">wellbyyoung@gmail.com</strong>
                    )로 안전하게 전송됩니다.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] active:bg-[#111312] transition-colors rounded-sm tracking-wider flex items-center justify-center gap-2 shadow-2xs whitespace-nowrap disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="w-3.5 h-3.5 animate-spin" />
                        <span>전송 처리 중...</span>
                      </>
                    ) : (
                      <span>상담 신청 완료하기</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#F7F5F0] rounded-lg border border-[#E3DED4] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E3DED4]">
                <div>
                  <span className="text-xs font-serif-brand tracking-widest uppercase text-[#627A65] font-semibold">
                    Direct Channels
                  </span>
                  <h4 className="text-base font-medium text-[#1B1E1C] mt-0.5">
                    외부 채널 및 실시간 문의
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={onOpenLinkSettings}
                  className="p-1.5 text-[#767E77] hover:text-[#2C302D] rounded hover:bg-[#EFECE5]"
                  title="외부 링크 주소 설정"
                  aria-label="외부 링크 주소 설정"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#59605A] leading-relaxed font-light">
                웰바이영의 공식 채널을 통해 다양한 웰니스 소식을 접하거나, 스마트스토어에서 프로그램을 안전하게 예약하실 수 있습니다.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={externalLinks.smartStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-[#FAF8F5] hover:bg-white border border-[#E3DED4] hover:border-[#B7C7B7] rounded-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#1B1E1C]">네이버 스마트스토어</div>
                      <div className="text-[11px] text-[#767E77]">
                        온유 프로그램 예약 및 공식 스토어
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#767E77] group-hover:text-[#2C302D] group-hover:translate-x-0.5 transition-all">
                    방문하기 →
                  </span>
                </a>

                <a
                  href={externalLinks.naverBlog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-[#FAF8F5] hover:bg-white border border-[#E3DED4] hover:border-[#B7C7B7] rounded-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#1B1E1C]">네이버 공식 블로그</div>
                      <div className="text-[11px] text-[#767E77]">
                        건강 칼럼 &amp; 바이탈로지 일상 스토리
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#767E77] group-hover:text-[#2C302D] group-hover:translate-x-0.5 transition-all">
                    방문하기 →
                  </span>
                </a>

                <a
                  href={externalLinks.kakaoTalk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-[#FAF8F5] hover:bg-white border border-[#E3DED4] hover:border-[#B7C7B7] rounded-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#1B1E1C]">카카오톡 1:1 상담</div>
                      <div className="text-[11px] text-[#767E77]">실시간 채팅으로 편안한 문의</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#767E77] group-hover:text-[#2C302D] group-hover:translate-x-0.5 transition-all">
                    연결하기 →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
