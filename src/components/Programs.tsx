import React, { useState } from 'react';
import { ArrowUpRight, Check, Shield } from 'lucide-react';
import { IMAGES, PROGRAMS } from '../data/constants';
import { Program } from '../types';
import { ProgramDetailModal } from './ProgramDetailModal';

interface ProgramsProps {
  onSelectProgramForConsultation: (programId: string) => void;
  smartStoreUrl: string;
}

export const Programs: React.FC<ProgramsProps> = ({
  onSelectProgramForConsultation,
  smartStoreUrl,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleSelectProgram = (programId: string) => {
    onSelectProgramForConsultation(programId);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-brand text-xs sm:text-sm tracking-[0.25em] uppercase text-[#627A65] font-semibold block mb-2">
            ON YOU PROGRAM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            당신에게 맞는 건강한 일상을 설계합니다.
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light text-balance">
            온유(ON YOU)는 웰바이영의 독자적인 헬스 디자인 솔루션 브랜드입니다. 현재 내 삶의 속도와 상태에 맞추어 가장 자연스러운 회복 방향을 선택하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#FAF8F5] rounded-lg border border-[#E3DED4] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#B7C7B7] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E3DED4]">
                  <span className="font-serif-brand text-2xl text-[#8FA68F] font-light">
                    {prog.number}
                  </span>
                  <span className="text-xs font-serif-brand tracking-widest uppercase text-[#767E77]">
                    {prog.code}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="inline-block text-[11px] font-medium text-[#4E6351] bg-[#E8ECE8] px-2 py-0.5 rounded-xs mb-2">
                    {prog.badge}
                  </div>
                  <h3 className="text-2xl font-medium text-[#1B1E1C]">{prog.title}</h3>
                  <div className="text-sm font-medium text-[#627A65] mt-1">{prog.subtitle}</div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
                  {prog.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[#E3DED4]/70">
                  <div className="text-xs font-medium uppercase tracking-wider text-[#767E77] mb-3 font-serif-brand">
                    주요 구성
                  </div>
                  <ul className="space-y-2">
                    {prog.keyComponents.map((component, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#2C302D]"
                      >
                        <span className="mt-1 w-3.5 h-3.5 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E3DED4] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#2C302D] bg-[#EFECE5] hover:bg-[#E3DED4] active:bg-[#D8D4C8] transition-colors rounded-sm tracking-wider"
                >
                  <span>{prog.title} 자세히 보기</span>
                  <ArrowUpRight className="w-4 h-4 text-[#59605A]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-[#E3DED4] bg-[#FAF8F5] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-56 sm:h-64 md:h-full bg-[#EFECE5] relative overflow-hidden">
            <img
              src={IMAGES.programImage}
              alt="아로마테라피 및 자연 웰니스"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + IMAGES.programFallback) {
                  target.src = IMAGES.programFallback;
                }
              }}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAF8F5]/30 hidden md:block" />
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#627A65] font-serif-brand tracking-wider uppercase font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#8FA68F]" />
              <span>Wellness Ethics &amp; Care Principles</span>
            </div>
            <h4 className="text-lg font-medium text-[#1B1E1C]">
              웰바이영이 약속하는 비의료적 건강 생활 가이드
            </h4>
            <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
              웰바이영의 온유(ON YOU) 프로그램은 질병의 진단, 치료, 처방, 완치 등 의료 행위를 대신하지 않습니다. 영양학적 과학 기준과 자연 이완 요법을 통해 개인이 자신의 몸을 바르게 돌보는 자생적 습관을 가꾸도록 돕습니다.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#767E77]">
              <span>· 투명한 상담 안내</span>
              <span>· 네이버 스마트스토어 결제 연동</span>
              <span>· 1:1 맞춤형 피드백</span>
            </div>
          </div>
        </div>
      </div>

      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onSelectForConsultation={handleSelectProgram}
        smartStoreUrl={smartStoreUrl}
      />
    </section>
  );
};
