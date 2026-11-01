import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/constants';

export const Hero: React.FC = () => {
  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 text-xs text-[#59605A] tracking-[0.25em] uppercase font-serif-brand font-medium">
            <span>WELL BY YOUNG</span>
            <span aria-hidden="true" className="text-[#8FA68F]">·</span>
            <span>Personal Health Designer</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-[#1B1E1C] leading-[1.25] text-balance">
            일상의 활력을 설계하다
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#59605A] font-light max-w-2xl leading-relaxed text-balance">
            몸의 균형을 이해하고, 나에게 맞는 건강한 일상을 디자인합니다.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('#about')}
              className="px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] active:bg-[#111312] transition-colors rounded-sm tracking-wider whitespace-nowrap shrink-0"
            >
              웰바이영 알아보기
            </button>
            <button
              onClick={() => scrollTo('#programs')}
              className="px-5 py-2.5 text-xs sm:text-sm font-medium text-[#2C302D] bg-transparent hover:bg-[#EFECE5] border border-[#C9C2B4] transition-colors rounded-sm tracking-wider whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>프로그램 살펴보기</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#59605A]" />
            </button>
          </div>
        </div>

        <div className="relative mt-4 sm:mt-6 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E3DED4]/80">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[460px] w-full overflow-hidden bg-[#EFECE5]">
            <img
              src={IMAGES.heroImage}
              alt="웰바이영 - 일상의 활력을 설계하는 평온하고 자연스러운 공간"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== window.location.origin + IMAGES.heroFallback) {
                  target.src = IMAGES.heroFallback;
                }
              }}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1E1C]/25 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#FAF8F5] pointer-events-none drop-shadow-sm">
              <span className="text-[11px] sm:text-xs tracking-widest uppercase font-serif-brand font-light opacity-90 block">
                Mindful Living &amp; Vitality Balance
              </span>
              <span className="text-xs sm:text-sm font-medium opacity-95">
                건강한 변화는 나를 온전히 이해하는 것에서 시작됩니다.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => scrollTo('#about')}
            className="group inline-flex items-center gap-2 text-xs text-[#767E77] hover:text-[#2C302D] transition-colors"
            aria-label="아래로 스크롤"
          >
            <span className="font-serif-brand tracking-widest text-[11px] uppercase">
              Scroll to Discover
            </span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
