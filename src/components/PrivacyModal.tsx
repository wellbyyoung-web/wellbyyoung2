import React from 'react';
import { Shield, X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1B1E1C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-xl rounded-lg border border-[#E3DED4] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#767E77] hover:text-[#1B1E1C] transition-colors rounded-full hover:bg-[#EFECE5]"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-serif-brand tracking-widest uppercase text-[#627A65] font-semibold mb-1">
          <Shield className="w-4 h-4 text-[#8FA68F]" />
          <span>Privacy Policy</span>
        </div>
        <h3 className="text-xl font-medium text-[#1B1E1C]">개인정보 수집 및 이용 동의</h3>

        <div className="mt-4 py-3 space-y-4 text-xs sm:text-sm text-[#59605A] leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
          <div>
            <h4 className="font-medium text-[#2C302D] mb-1">1. 수집하는 개인정보 항목</h4>
            <p className="font-light">
              - 필수항목: 이름(성함), 연락처(휴대전화번호), 관심 프로그램, 문의 내용
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#2C302D] mb-1">2. 개인정보 수집 및 이용 목적</h4>
            <p className="font-light">
              - 웰바이영(WELL BY YOUNG) 프로그램 및 상담 관련 문의 응대, 사전 정보 안내, 맞춤형 서비스 일정 조율
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#2C302D] mb-1">3. 보유 및 이용 기간</h4>
            <p className="font-light">
              - 수집된 개인정보는 상담 완료 후 1년간 보관하며, 이용자의 삭제 요청 시 지체 없이 파기합니다.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#2C302D] mb-1">4. 동의 거부 권리 및 불이익</h4>
            <p className="font-light">
              - 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부 시 원활한 온라인 상담 신청 접수가 제한될 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E3DED4] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] transition-colors rounded-sm tracking-wider"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
