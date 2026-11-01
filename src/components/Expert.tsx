import React, { useRef, useState } from 'react';
import { Award, BookOpen, Clock, RotateCcw, Sparkles, Upload } from 'lucide-react';
import { IMAGES } from '../data/constants';

export const Expert: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(
    () => localStorage.getItem('wellbyyoung_founder_photo') || null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const displayPhoto = customPhoto || IMAGES.founderImage;

  const credentials = [
    {
      title: '건강상담 및 교육 경력 17년',
      desc: '수많은 이들의 신체 변화와 생활 패턴을 마주하며 다져진 실전형 건강 상담 노하우',
      icon: Clock,
    },
    {
      title: '영양사 면허 및 미용의학 석사',
      desc: '인체의 생화학적 영양 대사와 신체 밸런스에 대한 체계적이고 과학적인 학문적 기반',
      icon: Award,
    },
    {
      title: '우송정보대학 겸임교수 경력',
      desc: '전문 지식을 쉽게 전달하고 일상에 적용할 수 있도록 교육해 온 풍부한 강의 이력',
      icon: BookOpen,
    },
    {
      title: '아로마테라피 및 발반사요법 강사 경력',
      desc: '단순 식습관을 넘어 감각의 안정과 말초 순환을 돕는 자연적 이완 요법의 통합 적용',
      icon: Sparkles,
    },
  ];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setCustomPhoto(result);
        try {
          localStorage.setItem('wellbyyoung_founder_photo', result);
        } catch {
          // ignore localStorage errors
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('wellbyyoung_founder_photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="expert" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-brand text-xs sm:text-sm tracking-[0.25em] uppercase text-[#627A65] font-semibold block mb-2">
            Founder &amp; Designer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            전문성이 만드는 건강관리의 차이
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light text-balance">
            신체 상태와 영양학적 이해를 바탕으로 개인별 생활관리 방향을 제안하고, 다양한 건강관리 접근법을 종합적으로 활용합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-[#F7F5F0] rounded-lg border border-[#E3DED4] shadow-xs">
            <div className="relative w-36 sm:w-40 aspect-[3/4] rounded-md border border-[#E3DED4] overflow-hidden shadow-xs bg-[#FAF8F5] group">
              <img
                src={displayPhoto}
                alt="박혜영 대표 - 영양사 / Personal Health Designer"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + IMAGES.founderFallback) {
                    target.src = IMAGES.founderFallback;
                  }
                }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1B1E1C]/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-2 z-10">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1 bg-white text-[11px] text-[#1B1E1C] rounded font-medium shadow-xs flex items-center gap-1 hover:bg-[#FAF8F5] transition-colors"
                >
                  <Upload className="w-3 h-3 text-[#4E6351]" />
                  <span>사진 변경</span>
                </button>
                {customPhoto && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="px-2.5 py-1 bg-[#2C302D] text-[11px] text-white rounded font-medium shadow-xs flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>초기화</span>
                  </button>
                )}
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />

            <div className="mt-4 space-y-1">
              <div className="text-[11px] font-serif-brand tracking-widest uppercase text-[#627A65] font-semibold">
                Personal Health Designer
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#1B1E1C]">
                박혜영 <span className="text-xs text-[#59605A] font-normal">대표 / 영양사</span>
              </h3>
              <p className="text-[11px] text-[#767E77] font-light">건강상담 및 영양교육 17년 경력</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3 pb-6 border-b border-[#E3DED4]">
              <span className="text-xs tracking-widest uppercase font-serif-brand text-[#4E6351] font-semibold">
                Expertise &amp; Philosophy
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-[#1B1E1C] leading-snug">
                “신체의 구조와 영양을 정확히 이해할 때,
                <br className="hidden sm:inline" />
                비로소 내 몸에 맞는 진짜 건강 루틴이 완성됩니다.”
              </h3>
              <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
                17년간 현장에서 마주한 수많은 상담 경험을 통해, 단편적인 정보나 일방적인 지침은 오래 지속될 수 없음을 체득했습니다. 영양학적 전문성과 아로마테라피, 신체 이완 요법을 통합하여 삶의 활력을 자연스럽게 되찾을 수 있도록 돕습니다.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-xs font-medium uppercase tracking-wider text-[#767E77]">
                주요 전문 이력 및 자격
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-[#F7F5F0] rounded-sm border border-[#E3DED4]/70 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-[#4E6351]">
                        <Icon className="w-4 h-4 shrink-0" />
                        <h4 className="text-xs sm:text-sm font-medium text-[#1B1E1C]">
                          {cred.title}
                        </h4>
                      </div>
                      <p className="text-[12px] text-[#59605A] font-light leading-relaxed pl-6">
                        {cred.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-[#59605A]">
              <span className="font-serif-brand uppercase tracking-wider text-[#627A65] font-semibold">
                Core Focus
              </span>
              <span aria-hidden="true" className="text-[#B7C7B7]">·</span>
              <span>체질별 영양 분석</span>
              <span aria-hidden="true" className="text-[#B7C7B7]">·</span>
              <span>생활 리듬 코칭</span>
              <span aria-hidden="true" className="text-[#B7C7B7]">·</span>
              <span>심신 이완 케어</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
