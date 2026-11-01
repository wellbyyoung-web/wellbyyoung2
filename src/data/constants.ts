import { ExternalLinks, ProcessStep, Program, VitalogyPillar } from '../types';

export const DEFAULT_LINKS: ExternalLinks = {
  smartStore: 'https://smartstore.naver.com/wellbyyoung',
  naverBlog: 'https://blog.naver.com/wellby0',
  kakaoTalk: 'https://pf.kakao.com/_wellbyyoung',
};

export const IMAGES = {
  heroImage: '/images/hero_wellness_morning.jpg',
  vitalogyImage: '/images/vitalogy_lifestyle.jpg',
  programImage: '/images/program_aromatherapy.jpg',
  founderImage: '/images/founder_park_hyeyoung.png',
  heroFallback: '/images/hero_wellness_morning.jpg',
  vitalogyFallback: '/images/vitalogy_lifestyle.jpg',
  programFallback: '/images/program_aromatherapy.jpg',
  founderFallback: '/images/founder_park_hyeyoung.png',
};

export const VITALOGY_PILLARS: VitalogyPillar[] = [
  {
    id: 'nutrition',
    titleEn: 'Nutrition',
    titleKo: '영양과 식단',
    subtitle: '몸의 상태를 고려한 온전한 영양 섭취',
    description:
      '극단적인 제한이나 무분별한 유행 식단 대신, 개인의 소화 상태와 일상 에너지 소모 패턴에 맞춘 지속 가능한 식사 균형을 설계합니다.',
    keyPractices: [
      '개인별 영양 불균형 요소 점검',
      '자연 식재료 중심의 균형 잡힌 식단 안내',
      '실생활에서 지속 가능한 식사 리듬 수립',
    ],
  },
  {
    id: 'movement',
    titleEn: 'Movement',
    titleKo: '신체활동과 운동',
    subtitle: '일상을 깨우는 기분 좋은 신체 활력',
    description:
      '과도한 피로를 남기지 않고 순환을 돕는 가벼운 스트레칭과 생활 속 움직임을 통해 신체 에너지를 건강하게 순환시킵니다.',
    keyPractices: [
      '일상 속 무리 없는 자연스러운 활동량 증진',
      '경직된 신체를 풀어주는 이완 스트레칭',
      '자세 습관 인지와 바른 호흡',
    ],
  },
  {
    id: 'sleep',
    titleEn: 'Sleep',
    titleKo: '수면과 회복',
    subtitle: '다음 날을 채우는 깊은 밤의 쉼',
    description:
      '단순히 잠자리에 머무는 시간이 아닌, 생체 리듬을 회복하고 신체가 스스로 치유될 수 있는 질 높은 수면 환경과 루틴을 만듭니다.',
    keyPractices: [
      '취침 전 신경계 이완을 돕는 나이트 루틴',
      '수면의 질을 저해하는 생활 패턴 점검',
      '햇빛과 리듬을 활용한 수면 주기 안정화',
    ],
  },
  {
    id: 'gut-health',
    titleEn: 'Gut Health',
    titleKo: '장 건강',
    subtitle: '체내 순환과 생명력의 핵심',
    description:
      '장은 영양의 흡수뿐 아니라 면역과 활력의 근간입니다. 개인의 식습관 및 장내 환경을 다각도로 이해하여 편안한 소화와 흡수를 돕습니다.',
    keyPractices: [
      '소화 부담을 줄이는 식생활 습관 제안',
      '장내 미생물 균형을 고려한 식재료 조합',
      '규칙적인 배변 활동을 돕는 수분 및 섬유질 관리',
    ],
  },
  {
    id: 'stress-balance',
    titleEn: 'Stress Balance',
    titleKo: '스트레스와 생활 균형',
    subtitle: '마음과 몸이 만나는 평온한 일상',
    description:
      '심신의 긴장은 신체 전반의 균형에 큰 영향을 미칩니다. 아로마테라피, 호흡, 나만의 이완 시간을 통해 긴장을 완화하고 일상의 평정심을 찾습니다.',
    keyPractices: [
      '긴장 완화를 위한 자연 향기(아로마) 활용',
      '호흡과 감각 집중을 통한 심신 이완',
      '과열된 일상에 쉼표를 주는 라이프 밸런스 설계',
    ],
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'ON_SOLUTION',
    number: '01',
    code: 'ON SOLUTION',
    title: '온솔루션',
    subtitle: '온전히 채우는 휴식설계',
    badge: '온라인 전용 프로그램',
    description:
      '개인의 생활습관과 영양상태, 신체적 불편 사항 등을 사전에 살펴보고, 건강한 휴식과 일상 회복을 돕는 맞춤형 생활관리 방향을 제안합니다.',
    targetAudience: [
      '일상에서 지속적인 피로감을 느끼며 충분한 휴식을 취하기 어려운 분',
      '불규칙한 식사 패턴과 수면 리듬을 건강하게 바로잡고 싶은 분',
      '거주 지역에 구애받지 않고 온라인을 통해 체계적인 생활 가이드를 원하시는 분',
    ],
    keyComponents: [
      '개인 영양 및 생활습관 분석',
      '신체 상태와 불편 사항 점검',
      '개인별 휴식 및 생활 루틴 설계',
      '식생활, 운동 및 이완 방법 제안',
    ],
    process: [
      '사전 생활습관 설문 작성',
      '비대면 데이터 검토 및 분석',
      '맞춤형 온솔루션 리포트 전달',
      '온라인 1:1 피드백 및 루틴 가이드',
    ],
    details:
      '온솔루션은 어디서나 편안하게 본인의 일상을 돌아보고 회복의 기틀을 마련할 수 있는 온라인 프로그램입니다. 번잡한 과정 없이 본인의 식습관과 수면, 휴식 패턴을 객관적으로 파악하고 일상에서 실천 가능한 가이드를 명확하게 안내해 드립니다.',
  },
  {
    id: 'YOU_SOLUTION',
    number: '02',
    code: 'YOU SOLUTION',
    title: '유솔루션',
    subtitle: '1:1 집중 맞춤 건강관리',
    badge: '심층 1:1 케어 솔루션',
    description:
      '신체 상태와 영양 균형, 생활습관을 종합적으로 살펴 개인별 건강관리 방향을 설계하는 집중형 프로그램입니다.',
    targetAudience: [
      '스스로 해결하기 힘든 오랜 신체 불균형과 식습관 고민을 가지신 분',
      '대표 전문가의 깊이 있는 1:1 맞춤 영양설계와 밀착 관리가 필요하신 분',
      '아로마테라피, 셀프 발마사지 등 자연적인 이완 요법을 병행하고 싶으신 분',
    ],
    keyComponents: [
      '개인 건강상태 및 생활습관 분석',
      '영양설계',
      '신체상태 분석',
      '생활습관 개선 방향 제안',
      '아로마테라피 및 셀프 발마사지 등 보완적 관리방법 안내',
    ],
    process: [
      '정밀 사전 문진 및 라이프 데이터 수집',
      '1:1 심층 상담 및 신체 상태 종합 분석',
      '개인 맞춤형 유솔루션 설계서 작성',
      '식단·이완요법·보완적 관리법 단계별 가이드 및 지속 피드백',
    ],
    details:
      '유솔루션은 웰바이영의 핵심 역량이 집중된 프리미엄 1:1 맞춤형 건강 디자인 프로그램입니다. 영양학적 전문 지식과 아로마테라피 및 자연 이완 기법을 결합하여, 각 개인에게 최적화된 생활 관리법을 섬세하게 안내합니다.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: '상담 신청',
    description: '홈페이지 상담 신청 폼 또는 카카오톡 채널을 통해 편안하게 신청을 접수합니다.',
  },
  {
    step: '02',
    title: '사전 정보 확인',
    description: '현재의 식생활, 수면 패턴, 일상 활동량 및 주요 관심사를 사전에 점검합니다.',
  },
  {
    step: '03',
    title: '개인별 상태 분석 및 설계',
    description: '수집된 라이프스타일 정보를 기반으로 개인별 신체 균형과 필요 요소를 종합 분석합니다.',
  },
  {
    step: '04',
    title: '맞춤형 관리 방향 안내',
    description: '온유(ON YOU) 솔루션을 바탕으로 일상에서 즉시 실천할 수 있는 구체적 생활 가이드를 제안합니다.',
  },
];
