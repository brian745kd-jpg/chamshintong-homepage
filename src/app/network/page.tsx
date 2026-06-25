import Link from 'next/link'
import { branches } from '@/data/branches'
import ReservationCTA from '@/components/ui/ReservationCTA'

const regions = ['서울', '경기', '경북'] as const

export default function NetworkPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-navy-dark pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[0.7rem] font-medium tracking-[0.3em] uppercase">
              Network
            </span>
          </div>
          <h1 className="text-white text-5xl lg:text-6xl font-light leading-tight mb-6">
            전국 참신통<br />네트워크
          </h1>
          <p className="text-gray-400 font-light text-lg max-w-md leading-[1.8]">
            서울·경기·경북 전국 6개 지점에서<br />
            동일한 참신통의 진료 철학을 경험하세요.
          </p>

          {/* 지점 수 요약 */}
          <div className="mt-14 flex gap-10 flex-wrap">
            {regions.map((r) => (
              <div key={r} className="flex flex-col gap-1">
                <span className="text-gold text-[0.65rem] font-semibold tracking-[0.2em]">{r}</span>
                <span className="text-white font-light text-[0.9375rem]">
                  {branches.filter((b) => b.region === r).length}개 지점
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          지점 목록 (지역별)
      ══════════════════════════════════════ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {regions.map((region, ri) => {
            const regionBranches = branches.filter((b) => b.region === region)
            return (
              <div
                key={region}
                className={ri < regions.length - 1 ? 'mb-20 lg:mb-28' : ''}
              >
                {/* 지역 헤더 */}
                <div className="flex items-center gap-5 mb-10">
                  <span className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase">
                    {region}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 text-[0.8rem] font-light">
                    {regionBranches.length}개 지점
                  </span>
                </div>

                {/* 지점 카드 그리드 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {regionBranches.map((branch) => (
                    <BranchCard key={branch.slug} branch={branch} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          향후 지점 오픈 예정 배너
      ══════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="border border-gray-100 p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-4">
                Coming Soon
              </div>
              <h3 className="text-navy text-2xl lg:text-3xl font-light mb-3">
                참신통 네트워크가 계속 확장됩니다
              </h3>
              <p className="text-gray-500 font-light text-[0.9375rem] leading-relaxed">
                앞으로 더 많은 지점이 참신통 네트워크에 함께합니다.<br />
                새로운 지점 소식을 가장 먼저 받아보세요.
              </p>
            </div>
            <Link
              href="/reservation"
              className="shrink-0 bg-navy text-white font-medium px-8 py-4 text-[0.875rem] tracking-wide hover:bg-navy-dark transition-colors whitespace-nowrap"
            >
              예약 문의하기
            </Link>
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  )
}

// ── 지점 카드 컴포넌트 ─────────────────────────────────
function BranchCard({ branch }: { branch: (typeof branches)[number] }) {
  return (
    <Link
      href={`/network/${branch.slug}`}
      className="group bg-white flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* 카드 상단 이미지 영역 (placeholder) */}
      <div className="h-44 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* 지점명 대형 표시 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/10 text-6xl lg:text-7xl font-light tracking-tight">
            {branch.name.replace('점', '')}
          </span>
        </div>
        {/* 지역 뱃지 */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold/90 text-white text-[0.65rem] font-semibold tracking-[0.15em] px-3 py-1">
            {branch.region}
          </span>
        </div>
        {/* 호버 오버레이 */}
        <div className="absolute inset-0 bg-navy-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      {/* 카드 본문 */}
      <div className="p-7 flex flex-col gap-4 flex-1">
        {/* 지점명 */}
        <div>
          <h3 className="text-navy text-2xl font-light mb-1 group-hover:text-navy-dark transition-colors">
            {branch.name}
          </h3>
          <p className="text-gray-400 text-[0.8125rem] font-light leading-relaxed">
            {branch.address}
          </p>
        </div>

        {/* 구분선 */}
        <div className="w-8 h-px bg-gold/50" />

        {/* 진료시간 */}
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-3 text-[0.8125rem]">
            <span className="text-gray-400 font-light w-14 shrink-0">평일</span>
            <span className="text-gray-600 font-light">{branch.hours.weekday}</span>
          </div>
          <div className="flex gap-3 text-[0.8125rem]">
            <span className="text-gray-400 font-light w-14 shrink-0">토요일</span>
            <span className="text-gray-600 font-light">{branch.hours.saturday}</span>
          </div>
          <div className="flex gap-3 text-[0.8125rem]">
            <span className="text-gray-400 font-light w-14 shrink-0">점심</span>
            <span className="text-gray-600 font-light">{branch.hours.lunch}</span>
          </div>
        </div>

        {/* 의료진 */}
        <div className="text-[0.8125rem] text-gray-400 font-light">
          의료진 {branch.doctors.length}인
        </div>

        {/* 더 보기 */}
        <div className="mt-auto pt-4 flex items-center gap-2 text-navy text-[0.8125rem] font-medium group-hover:text-gold transition-colors">
          지점 상세 보기
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
