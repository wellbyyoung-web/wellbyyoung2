import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { IMAGES, VITALOGY_PILLARS } from '../data/constants';

export const Vitalogy: React.FC = () => {
  const [selectedId, setSelectedId] = useState(VITALOGY_PILLARS[0].id);
  const activePillar =
    VITALOGY_PILLARS.find((pillar) => pillar.id === selectedId) || VITALOGY_PILLARS[0];

  return (
    <section id="vitalogy" className="py-20 lg:py-28 bg-[#F7F5F0] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif-brand text-sm sm:text-base tracking-[0.25em] uppercase text-[#627A65] font-semibold block mb-2">
            VITALOGY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            지금 이 순간을 건강하고 활력 있게
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <blockquote className="font-serif-brand italic text-base sm:text-lg text-[#2C302D] leading-relaxed mb-4">
            “웰바이영이 지향하는 바이탈로지(Vitalogy)는 단순히 질환이 없는 상태를 넘어, 지금 이 순간을 가장 건강하고 활력 있게 살아가는 방법을 찾아가는 여정입니다.”
          </blockquote>
          <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light text-balance">
            몸의 작은 변화에도 귀 기울이고, 개인의 신체 균형과 영양, 생활습관을 종합적으로 이해하여 각자의 일상에 맞는 건강 해답을 제안합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <div className="text-xs text-[#767E77] uppercase tracking-wider font-medium mb-2 pb-2 border-b border-[#E3DED4]">
              Five Pillars of Vitalogy
            </div>
            {VITALOGY_PILLARS.map((pillar, idx) => {
              const isSelected = pillar.id === selectedId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedId(pillar.id)}
                  className={`text-left p-4 rounded-sm transition-all duration-200 border text-balance ${
                    isSelected
                      ? 'bg-[#FAF8F5] border-[#B7C7B7] shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
                      : 'bg-transparent border-transparent hover:bg-[#EFECE5]/60 hover:border-[#E3DED4]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif-brand text-xs tracking-wider text-[#8FA68F] font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] text-[#767E77] uppercase tracking-wider font-serif-brand">
                      {pillar.titleEn}
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <h3
                      className={`text-base font-medium transition-colors ${
                        isSelected ? 'text-[#1B1E1C]' : 'text-[#59605A]'
                      }`}
                    >
                      {pillar.titleKo}
                    </h3>
                  </div>
                  <p className="mt-1 text-xs text-[#767E77] line-clamp-1 font-light">
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-lg border border-[#E3DED4] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3DED4]">
                <div>
                  <span className="font-serif-brand text-sm tracking-[0.2em] text-[#627A65] uppercase font-semibold">
                    {activePillar.titleEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1B1E1C] mt-1">
                    {activePillar.titleKo}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#767E77] block font-serif-brand">
                    Personal Guide
                  </span>
                  <span className="text-xs font-medium text-[#4E6351]">
                    {activePillar.subtitle}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base text-[#3F4440] leading-relaxed font-light">
                {activePillar.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#E3DED4]/70">
                <div className="text-xs font-medium uppercase tracking-wider text-[#767E77] mb-3">
                  일상 속 바이탈로지 실천 기준
                </div>
                <ul className="space-y-2.5">
                  {activePillar.keyPractices.map((practice, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C302D]"
                    >
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-[#E8ECE8] text-[#4E6351] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-md overflow-hidden aspect-[16/7] relative border border-[#E3DED4]/80 bg-[#EFECE5]">
              <img
                src={IMAGES.vitalogyImage}
                alt="바이탈로지 라이프스타일 웰니스 감성"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + IMAGES.vitalogyFallback) {
                    target.src = IMAGES.vitalogyFallback;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E1C]/35 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 text-white text-[11px] font-serif-brand tracking-widest uppercase opacity-90 drop-shadow-xs">
                Vitalogy Philosophy · Well By Young
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
