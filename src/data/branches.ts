export type Branch = {
  slug: string
  name: string
  region: '서울' | '경기' | '경북'
  address: string
  addressDetail: string
  phone: string
  hours: {
    weekday: string
    saturday: string
    lunch: string
    closed: string
  }
  subway: string
  bus: string
  parking: string
  doctors: { name: string; title: string; specialty: string }[]
}

export const branches: Branch[] = [
  {
    slug: 'songpa',
    name: '송파점',
    region: '서울',
    address: '서울 송파구',
    addressDetail: '서울시 송파구 올림픽로 35가길 11, 3층',
    phone: '02-000-0000',
    hours: {
      weekday: '09:00 – 19:00',
      saturday: '09:00 – 15:00',
      lunch: '13:00 – 14:00',
      closed: '일요일·공휴일 휴진',
    },
    subway: '8호선 송파역 1번 출구 도보 5분',
    bus: '송파역 정류장 하차',
    parking: '건물 내 주차 가능 (30분 무료)',
    doctors: [
      { name: '홍길동', title: '대표원장', specialty: '척추·체형 전문' },
      { name: '김참신', title: '원장', specialty: '자율신경·자가면역 전문' },
    ],
  },
  {
    slug: 'gangdong',
    name: '강동점',
    region: '서울',
    address: '서울 강동구',
    addressDetail: '서울시 강동구 천호대로 1000, 2층',
    phone: '02-000-0000',
    hours: {
      weekday: '09:00 – 19:00',
      saturday: '09:00 – 15:00',
      lunch: '13:00 – 14:00',
      closed: '일요일·공휴일 휴진',
    },
    subway: '5·9호선 강동역 2번 출구 도보 3분',
    bus: '강동역 정류장 하차',
    parking: '인근 공영주차장 이용',
    doctors: [
      { name: '이통한', title: '대표원장', specialty: '여성건강·호르몬 전문' },
    ],
  },
  {
    slug: 'wirye',
    name: '위례점',
    region: '경기',
    address: '경기 성남시',
    addressDetail: '경기도 성남시 수정구 위례광장로 000',
    phone: '031-000-0000',
    hours: {
      weekday: '09:00 – 19:00',
      saturday: '09:00 – 15:00',
      lunch: '13:00 – 14:00',
      closed: '일요일·공휴일 휴진',
    },
    subway: '위례신사선 위례중앙역 (예정)',
    bus: '위례광장 정류장 하차',
    parking: '건물 내 주차 가능',
    doctors: [
      { name: '박위례', title: '대표원장', specialty: '척추·자율신경 전문' },
    ],
  },
  {
    slug: 'bundang',
    name: '분당점',
    region: '경기',
    address: '경기 성남시 분당구',
    addressDetail: '경기도 성남시 분당구 정자일로 000',
    phone: '031-000-0000',
    hours: {
      weekday: '09:00 – 19:00',
      saturday: '09:00 – 15:00',
      lunch: '13:00 – 14:00',
      closed: '일요일·공휴일 휴진',
    },
    subway: '신분당선 정자역 4번 출구 도보 7분',
    bus: '정자역 정류장 하차',
    parking: '건물 내 주차 가능 (1시간 무료)',
    doctors: [
      { name: '최분당', title: '대표원장', specialty: '자가면역·여성건강 전문' },
    ],
  },
  {
    slug: 'suwon',
    name: '수원점',
    region: '경기',
    address: '경기 수원시',
    addressDetail: '경기도 수원시 팔달구 중부대로 000',
    phone: '031-000-0000',
    hours: {
      weekday: '09:00 – 19:00',
      saturday: '09:00 – 15:00',
      lunch: '13:00 – 14:00',
      closed: '일요일·공휴일 휴진',
    },
    subway: '1호선 수원역 2번 출구 도보 10분',
    bus: '수원역 정류장 하차',
    parking: '건물 내 주차 가능',
    doctors: [
      { name: '정수원', title: '대표원장', specialty: '척추·체형 전문' },
    ],
  },
  {
    slug: 'gumi',
    name: '구미점',
    region: '경북',
    address: '경북 구미시',
    addressDetail: '경상북도 구미시 원평동 000번지',
    phone: '054-000-0000',
    hours: {
      weekday: '09:00 – 19:00',
      saturday: '09:00 – 15:00',
      lunch: '13:00 – 14:00',
      closed: '일요일·공휴일 휴진',
    },
    subway: '경부선 구미역 도보 15분',
    bus: '원평동 정류장 하차',
    parking: '전용 주차장 완비',
    doctors: [
      { name: '한구미', title: '대표원장', specialty: '자율신경·자가면역 전문' },
    ],
  },
]

export const getBranchBySlug = (slug: string): Branch | undefined =>
  branches.find((b) => b.slug === slug)

export const branchesByRegion = branches.reduce<Record<string, Branch[]>>(
  (acc, branch) => {
    if (!acc[branch.region]) acc[branch.region] = []
    acc[branch.region].push(branch)
    return acc
  },
  {}
)
