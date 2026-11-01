import React from 'react';

export const About: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: '개인 맞춤 설계',
      lead: '획일화된 틀을 벗어난 접근',
      desc: '모든 사람의 생체 리듬과 일과, 식습관은 다릅니다. 정형화된 처방이 아닌 나만의 라이프스타일에 맞춘 실천 가능한 기준을 세웁니다.',
    },
    {
      num: '02',
      title: '지속 가능한 루틴',
      lead: '작지만 흔들리지 않는 실천',
      desc: '무리한 단기 목표 대신, 일상 속에서 무리 없이 유지되고 자연스럽게 삶의 일부로 스며드는 건강한 습관의 고리를 만듭니다.',
    },
    {
      num: '03',
      title: '전인적 균형',
      lead: '몸과 마음의 통합적 관리',
      desc: '영양과 식단뿐 아니라 수면, 장 건강, 스트레스와 감각 이완까지 유기적으로 연결된 삶의 전체적인 활력을 조망합니다.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E3DED4]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-6">
          <span className="font-serif-brand text-xs sm:text-sm tracking-[0.2em] uppercase text-[#627A65] font-semibold">
            Brand Philosophy
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#1B1E1C] leading-[1.3] text-balance">
            건강한 일상에는 나만의 설계가 필요합니다.
          </h2>
          <div className="w-12 h-[1.5px] bg-[#627A65] mx-auto my-6" />
          <div className="space-y-4 text-[#59605A] text-sm sm:text-base leading-relaxed font-light text-balance">
            <p>
              웰바이영은 개인의 신체 상태와 영양 균형, 생활습관을 종합적으로 살펴 건강한 일상을 만들어갈 수 있도록 돕는 퍼스널 헬스 디자인 브랜드입니다.
            </p>
            <p>
              획일적인 건강관리 방식에서 벗어나 개인에게 필요한 부분을 이해하고 실천 가능한 건강관리 방향을 제안합니다.
            </p>
            <p className="font-normal text-[#2C302D]">
              단순한 정보 제공을 넘어, 일상에서 지속할 수 있는 건강관리 방법을 함께 고민합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-[#E3DED4]/80">
          {pillars.map((item) => (
            <div key={item.num} className="flex flex-col space-y-3">
              <div className="flex items-baseline justify-between border-b border-[#E3DED4] pb-2">
                <span className="font-serif-brand text-2xl lg:text-3xl text-[#8FA68F] font-light">
                  {item.num}
                </span>
                <span className="text-xs text-[#767E77] tracking-wider uppercase font-medium">
                  WELL BY YOUNG
                </span>
              </div>
              <h3 className="text-lg font-medium text-[#1B1E1C] pt-1">{item.title}</h3>
              <p className="text-xs text-[#627A65] font-medium tracking-wide">{item.lead}</p>
              <p className="text-xs sm:text-sm text-[#59605A] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
