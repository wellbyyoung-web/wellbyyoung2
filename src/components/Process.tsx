import React from 'react';
import { PROCESS_STEPS } from '../data/constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-brand text-xs sm:text-sm tracking-[0.25em] uppercase text-[#627A65] font-semibold block mb-2">
            Consultation Flow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            당신의 일상에서 시작하는 건강관리
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light text-balance">
            체계적인 4단계 과정을 통해 개인의 현재 상태를 정확히 살피고, 일상에서 가장 편안하게 지속할 수 있는 건강한 방향을 제시합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-7 bg-[#F7F5F0] rounded-lg border border-[#E3DED4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E3DED4]">
                  <span className="font-serif-brand text-2xl text-[#8FA68F] font-semibold">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-serif-brand tracking-widest text-[#767E77] uppercase font-medium">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-medium text-[#1B1E1C]">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#59605A] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E3DED4]/70 flex items-center justify-between text-[11px] text-[#767E77]">
                <span>단계별 맞춤 진행</span>
                <span className="font-serif-brand">WBY</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#767E77] font-light">
            * 각 단계는 신청자의 일정과 희망 방식(온라인 비대면 / 1:1 상담)에 맞춰 순차적으로 진행됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};
