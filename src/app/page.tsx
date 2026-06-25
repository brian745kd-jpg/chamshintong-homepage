import Link from 'next/link'
import ReservationCTA from '@/components/ui/ReservationCTA'

const clinics = [
  {
    number: '01',
    href: '/clinic/spine',
    name: '척추체형클리닉',
    sub: '허리디스크·목디스크·체형교정',
    desc: '[ 클리닉 소개 문구 입력 예정 ]',
  },
  {
    number: '02',
    href: '/clinic/autonomic',
    name: '자율신경클리닉',
    sub: '만성피로·수면장애·두통',
    desc: '[ 클리닉 소개 문구 입력 예정 ]',
  },
  {
    number: '03',
    href: '/clinic/ent',
    name: '눈·코·귀 클리닉',
    sub: '비문증·비염·이명·난청·안구건조',
    desc: '[ 클리닉 소개 문구 입력 예정 ]',
  },
  {
    number: '04',
    href: '/clinic/women',
    name: '여성건강·호르몬클리닉',
    sub: '월경불순·갱년기·여성면역',
    desc: '[ 클리닉 소개 문구 입력 예정 ]',
  },
]

const symptoms = [
  '허리디스크', '목디스크', '척추측만증', '체형불균형', '만성피로',
  '수면장애', '두통·편두통', '자율신경실조', '비문증', '이명',
  '비염', '안구건조증', '갱년기증후군', '월경불순', '난청',
]

const steps = [
  { step: '01', title: '예약·접수', desc: '온라인·전화·카카오로 간편하게 예약' },
  { step: '02', title: '상세 문진', desc: '40분 이상, 증상 뒤의 원인을 충분히 청취' },
  { step: '03', title: '정밀 진단', desc: '한의학 진단 + 현대 기기로 원인 확정' },
  { step: '04', title: '맞춤 치료', desc: '진단 결과에 따른 개인 맞춤 치료 계획 수립' },
]

const networkRegions = [
  {
    region: '서울',
    branches: [
      { label: '송파점', slug: 'songpa' },
      { label: '강동점', slug: 'gangdong' },
    ],
  },
  {
    region: '경기',
    branches: [
      { label: '위례점', slug: 'wirye' },
      { label: '분당점', slug: 'bundang' },
      { label: '수원점', slug: 'suwon' },
    ],
  },
  {
    region: '경북',
    branches: [{ label: '구미점', slug: 'gumi' }],
  },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen bg-navy-dark flex flex-col justify-center overflow-hidden">
        {/* 배경 격자 패턴 */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* 좌측 금색 세로선 */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 lg:pt-44 lg:pb-36">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* 브랜드 레이블 */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-[0.7rem] font-medium tracking-[0.35em] uppercase">
                Chamshintong · 참신통한의원
              </span>
            </div>

            {/* 메인 카피 */}
            <h1 className="text-white text-5xl lg:text-[4.5rem] font-light leading-[1.18] mb-8 tracking-tight">
              병을 고치기 위해서<br />
              병이 들어있는<br />
              <em className="not-italic text-gold">사람</em>을 고칩니다.
            </h1>

            {/* 서브 카피 */}
            <p className="text-gray-400 text-lg font-light leading-[1.85] mb-14 max-w-md">
              증상만 치료하기보다<br />
              환자의 생활, 체질, 회복력을 함께 살피는<br />
              진료를 지향합니다.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/reservation"
                className="inline-flex items-center justify-center bg-gold text-white font-medium px-10 py-4 text-[0.9375rem] tracking-wide hover:bg-gold-light hover:text-navy transition-all duration-200"
              >
                진료 예약하기
              </Link>
              <Link
                href="/clinic/spine"
                className="inline-flex items-center justify-center border border-white/25 text-white font-light px-10 py-4 text-[0.9375rem] tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                전문클리닉 알아보기
              </Link>
            </div>
          </div>

          {/* 우측 클리닉 인덱스 */}
          <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-5">
            <div className="text-[0.6rem] font-semibold tracking-[0.25em] text-gray-600 uppercase mb-1">
              전문클리닉
            </div>
            <div className="w-16 h-px bg-white/15 mb-1" />
            {clinics.map((c) => (
              <Link
                key={c.number}
                href={c.href}
                className="flex items-center gap-4 group"
              >
                <span className="text-gold text-[0.65rem] font-medium w-5 text-right">
                  {c.number}
                </span>
                <div className="w-px h-7 bg-white/10 group-hover:bg-gold/50 transition-colors" />
                <span className="text-gray-500 text-[0.8rem] font-light group-hover:text-gold transition-colors duration-200">
                  {c.name}
                </span>
              </Link>
            ))}
            <div className="w-16 h-px bg-white/15 mt-1" />
            <Link
              href="/clinic/spine"
              className="flex items-center gap-2 text-gray-600 text-[0.7rem] font-light tracking-wide hover:text-gold transition-colors duration-200"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              전문클리닉 전체보기
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-gray-600 text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          참신통은 이렇게 진료합니다
      ══════════════════════════════════════ */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* 좌: 섹션 타이틀 */}
            <div className="lg:sticky lg:top-32">
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-6">
                How We Treat
              </div>
              <h2 className="text-navy text-4xl lg:text-5xl font-light leading-[1.2] mb-0">
                참신통은<br />이렇게 진료합니다.
              </h2>
              <div className="w-10 h-px bg-gold mt-8" />
            </div>

            {/* 우: 4개 항목 */}
            <div className="divide-y divide-gray-100">
              {/* 01 */}
              <div className="py-10 flex gap-8 items-start">
                <div className="text-gold text-[0.75rem] font-medium tracking-[0.1em] mt-1 shrink-0 w-6">01</div>
                <div>
                  <h3 className="text-navy text-xl font-semibold mb-4">아프지 않은 침 치료</h3>
                  <p className="text-gray-500 font-light leading-[1.85] text-[0.9375rem]">
                    침이 무서워 치료를 망설이는 분들을 위해,<br />
                    참신통은 바늘이 없는 압통침 치료를 우선적으로 시행합니다.<br />
                    필요한 경우에만 일반 침을 사용하며,<br />
                    환자의 통증과 불안을 줄이는 진료를 지향합니다.
                  </p>
                </div>
              </div>

              {/* 02 — 진단 방식 + Line Illustration */}
              <div className="py-10 flex gap-8 items-start">
                <div className="text-gold text-[0.75rem] font-medium tracking-[0.1em] mt-1 shrink-0 w-6">02</div>
                <div className="flex-1 flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-navy text-xl font-semibold mb-4">몸이 보내는 신호를 읽습니다.</h3>
                    <p className="text-gray-500 font-light leading-[1.85] text-[0.9375rem]">
                      참신통은 환자의 말만으로 진단하지 않습니다.<br />
                      몸의 좌우 균형과 신체 반응을 함께 비교하여<br />
                      몸이 보내는 신호를<br />
                      진단의 중요한 단서로 생각합니다.
                    </p>
                  </div>
                  {/* Minimal Line Illustration — 좌우 균형 비교 진단 */}
                  <div className="shrink-0 hidden md:block opacity-70 pt-1">
                    <svg
                      width="88"
                      height="148"
                      viewBox="0 0 88 148"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      {/* 중심축 (점선) */}
                      <line x1="44" y1="2" x2="44" y2="146" stroke="#4E8C7C" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.25" />

                      {/* 머리 */}
                      <circle cx="44" cy="12" r="9" stroke="#4E8C7C" strokeWidth="0.9" opacity="0.55" />

                      {/* 목 */}
                      <line x1="40" y1="21" x2="40" y2="29" stroke="#4E8C7C" strokeWidth="0.9" opacity="0.5" />
                      <line x1="48" y1="21" x2="48" y2="29" stroke="#4E8C7C" strokeWidth="0.9" opacity="0.5" />

                      {/* 몸통 왼쪽 */}
                      <path d="M40 29 C32 32 16 40 14 52 C12 64 15 78 22 88" stroke="#4E8C7C" strokeWidth="0.9" fill="none" opacity="0.5" />
                      {/* 몸통 오른쪽 */}
                      <path d="M48 29 C56 32 72 40 74 52 C76 64 73 78 66 88" stroke="#4E8C7C" strokeWidth="0.9" fill="none" opacity="0.5" />

                      {/* 골반 */}
                      <path d="M22 88 C32 95 56 95 66 88" stroke="#4E8C7C" strokeWidth="0.9" fill="none" opacity="0.5" />

                      {/* 왼쪽 다리 */}
                      <line x1="35" y1="95" x2="27" y2="144" stroke="#4E8C7C" strokeWidth="0.9" opacity="0.5" />
                      {/* 오른쪽 다리 */}
                      <line x1="53" y1="95" x2="61" y2="144" stroke="#4E8C7C" strokeWidth="0.9" opacity="0.5" />

                      {/* ── 비교 포인트 ── */}

                      {/* 어깨 — 좌우 대칭 */}
                      <circle cx="13" cy="45" r="2.5" fill="#C9A96E" opacity="0.8" />
                      <circle cx="75" cy="45" r="2.5" fill="#C9A96E" opacity="0.8" />
                      <line x1="13" y1="45" x2="75" y2="45" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="1.5 2.5" opacity="0.45" />

                      {/* 허리 — 미세 비대칭 */}
                      <circle cx="11" cy="68" r="2.5" fill="#C9A96E" opacity="0.8" />
                      <circle cx="77" cy="65" r="2.5" fill="#C9A96E" opacity="0.8" />
                      <line x1="11" y1="68" x2="77" y2="65" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="1.5 2.5" opacity="0.45" />

                      {/* 골반 — 비대칭 */}
                      <circle cx="14" cy="86" r="2.5" fill="#C9A96E" opacity="0.8" />
                      <circle cx="74" cy="83" r="2.5" fill="#C9A96E" opacity="0.8" />
                      <line x1="14" y1="86" x2="74" y2="83" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="1.5 2.5" opacity="0.45" />

                      {/* 라벨: L / R */}
                      <text x="4" y="148" fill="#4E8C7C" fontSize="6.5" opacity="0.35" fontFamily="sans-serif" letterSpacing="0.5">L</text>
                      <text x="78" y="148" fill="#4E8C7C" fontSize="6.5" opacity="0.35" fontFamily="sans-serif" letterSpacing="0.5">R</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 03 */}
              <div className="py-10 flex gap-8 items-start">
                <div className="text-gold text-[0.75rem] font-medium tracking-[0.1em] mt-1 shrink-0 w-6">03</div>
                <div>
                  <h3 className="text-navy text-xl font-semibold mb-4">사람을 먼저 보는 진료</h3>
                  <p className="text-gray-500 font-light leading-[1.85] text-[0.9375rem]">
                    [ 내용 입력 예정 ]
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="py-10 flex gap-8 items-start">
                <div className="text-gold text-[0.75rem] font-medium tracking-[0.1em] mt-1 shrink-0 w-6">04</div>
                <div>
                  <h3 className="text-navy text-xl font-semibold mb-4">같은 철학, 같은 기준</h3>
                  <p className="text-gray-500 font-light leading-[1.85] text-[0.9375rem]">
                    [ 내용 입력 예정 ]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          [ 브랜드 콘텐츠 영역 — 추후 입력 예정 ]
      ══════════════════════════════════════ */}

      {/* ══════════════════════════════════════
          대표 질환 / 증상 태그
      ══════════════════════════════════════ */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-6">
                Symptoms
              </div>
              <h2 className="text-navy text-4xl lg:text-5xl font-light leading-tight mb-6">
                이런 증상이<br />있으신가요?
              </h2>
              <p className="text-gray-500 font-light text-[0.9375rem] leading-[1.85] mb-10">
                아래 증상 중 하나라도 해당되신다면<br />
                참신통 전문클리닉과 상담해보세요.<br />
                원인을 찾아드리겠습니다.
              </p>
              <Link
                href="/reservation"
                className="inline-flex items-center gap-2 bg-navy text-white text-[0.875rem] font-medium px-8 py-3.5 hover:bg-navy-dark transition-colors"
              >
                지금 상담 예약하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {symptoms.map((s) => (
                <span
                  key={s}
                  className="inline-block border border-gray-200 text-gray-600 text-[0.875rem] font-light px-5 py-2.5 hover:border-navy hover:text-navy hover:bg-cream transition-all duration-200 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          진료 과정
      ══════════════════════════════════════ */}
      <section className="bg-navy py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
              Process
            </div>
            <h2 className="text-white text-4xl lg:text-5xl font-light">
              참신통의 진료 과정
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {steps.map((s, i) => (
              <div key={s.step} className="relative px-6 py-8 flex flex-col items-center text-center">
                {/* 스텝 구분선 (데스크탑) */}
                {i > 0 && (
                  <div className="absolute left-0 top-12 w-px h-8 bg-white/10 hidden lg:block -translate-y-1/2" />
                )}
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-navy-dark">
                  <span className="text-gold text-[0.875rem] font-medium">{s.step}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-400 font-light text-[0.875rem] leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/treatment"
              className="inline-flex items-center gap-2 text-gray-400 text-[0.875rem] font-light hover:text-white transition-colors border-b border-gray-700 pb-0.5 hover:border-gray-400"
            >
              초진안내 자세히 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          참신통 네트워크 (홈 프리뷰)
      ══════════════════════════════════════ */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-6">
                Network
              </div>
              <h2 className="text-navy text-4xl lg:text-5xl font-light leading-tight mb-6">
                전국<br />참신통 네트워크
              </h2>
              <p className="text-gray-500 font-light text-[0.9375rem] leading-[1.85] mb-10">
                서울·경기·경북, 전국 6개 지점에서<br />
                동일한 참신통의 진료 철학을 경험하세요.<br />
                앞으로 더 많은 지점이 함께합니다.
              </p>
              <Link
                href="/network"
                className="inline-flex items-center gap-2 border border-navy text-navy text-[0.875rem] font-medium px-8 py-3.5 hover:bg-navy hover:text-white transition-all duration-200"
              >
                전체 지점 보기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {networkRegions.map(({ region, branches }) => (
                <div key={region} className="py-7 flex gap-8 items-center">
                  <div className="text-gold text-[0.7rem] font-semibold tracking-[0.2em] w-10 shrink-0">
                    {region}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {branches.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/network/${b.slug}`}
                        className="text-navy font-medium text-[0.9375rem] hover:text-gold transition-colors"
                      >
                        {b.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          예약 CTA
      ══════════════════════════════════════ */}
      <ReservationCTA />
    </>
  )
}
