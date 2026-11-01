import React from 'react';
import { ArrowRight, Check, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectForConsultation: (programId: string) => void;
  smartStoreUrl: string;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onSelectForConsultation,
  smartStoreUrl,
}) => {
  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1B1E1C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-lg border border-[#E3DED4] shadow-2xl p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#767E77] hover:text-[#1B1E1C] transition-colors rounded-full hover:bg-[#EFECE5]"
          aria-label="모달 닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#E3DED4] pb-5 pr-8">
          <div className="flex items-center gap-3">
            <span className="font-serif-brand text-xs tracking-widest text-[#627A65] font-semibold uppercase">
              ON YOU · {program.code}
            </span>
            <span className="text-[11px] text-[#59605A] bg-[#E8ECE8] px-2 py-0.5 rounded-xs font-medium">
              {program.badge}
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-medium text-[#1B1E1C]">
            {program.title}
            <span className="ml-3 text-base font-light text-[#59605A]">{program.subtitle}</span>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
            {program.description}
          </p>
        </div>

        <div className="py-5 space-y-6 max-h-[60vh] overflow-y-auto pr-1">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#767E77] mb-2 font-serif-brand">
              Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#3F4440] leading-relaxed">{program.details}</p>
          </div>

          <div className="p-4 bg-[#F7F5F0] rounded-sm border border-[#E3DED4]">
            <h4 className="text-xs font-semibold text-[#1B1E1C] mb-3 flex items-center gap-1.5">
              <span>주요 구성 프로그램</span>
            </h4>
            <ul className="space-y-2">
              {program.keyComponents.map((comp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2C302D]">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#767E77] mb-2.5 font-serif-brand">
              Recommended For
            </h4>
            <ul className="space-y-1.5 text-xs text-[#59605A]">
              {program.targetAudience.map((audience, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#8FA68F]" />
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#767E77] mb-2.5 font-serif-brand">
              Program Steps
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-sm border border-[#E3DED4]/80 text-xs text-[#2C302D] flex items-center gap-2.5"
                >
                  <span className="font-serif-brand text-[#627A65] font-semibold">0{idx + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded border border-[#E3DED4] flex items-start gap-2.5 text-[11px] text-[#767E77] leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-[#8FA68F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#59605A] font-medium block">안내사항</strong>
              본 프로그램은 질병의 진단, 치료, 예방 등 의료행위가 아닌 일상 생활습관과 영양 균형을 돕는 웰니스 케어 서비스입니다.
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E3DED4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={smartStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#2C302D] bg-[#EFECE5] hover:bg-[#E3DED4] transition-colors rounded-sm tracking-wider"
          >
            <span>네이버 스마트스토어 신청</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#59605A]" />
          </a>
          <button
            onClick={() => {
              onClose();
              onSelectForConsultation(program.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] transition-colors rounded-sm tracking-wider"
          >
            <span>상담 신청하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
