import Link from 'next/link'
import ReservationCTA from './ReservationCTA'

export type ClinicData = {
  number: string
  slug: string
  name: string
  shortName: string
  tagline: string
  heroSub: string
  accentColor: string
  checklist: string[]
  diseases: { name: string; desc: string }[]
  diagnosisTitle: string
  diagnosisDesc: string
  diagnosisPoints: string[]
  treatments: { name: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

export default function ClinicPageTemplate({ data }: { data: ClinicData }) {
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
          {/* 브레드크럼 */}
          <div className="flex items-center gap-2 text-[0.75rem] text-gray-500 mb-10">
            <Link href="/" className="hover:text-gray-300 transition-colors">홈</Link>
            <span>/</span>
            <Link href="/clinic/spine" className="hover:text-gray-300 transition-colors">전문클리닉</Link>
            <span>/</span>
            <span className="text-gray-300">{data.shortName}</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-[0.65rem] font-medium tracking-[0.3em] uppercase">
                Clinic {data.number}
              </span>
            </div>

            <h1 className="text-white text-5xl lg:text-6xl font-light leading-tight mb-5">
              {data.name}
            </h1>
            <p className="text-gold text-xl font-light mb-4">{data.tagline}</p>
            <p className="text-gray-400 font-light text-[0.9375rem] leading-[1.85] max-w-lg mb-10">
              {data.heroSub}
            </p>
            <div className="flex gap-4">
              <Link
                href="/reservation"
                className="inline-flex items-center gap-2 bg-gold text-white font-medium px-8 py-4 text-[0.875rem] tracking-wide hover:bg-gold-light hover:text-navy transition-all"
              >
                진료 예약하기
              </Link>
              <Link
                href="#checklist"
                className="inline-flex items-center gap-2 border border-white/25 text-white font-light px-8 py-4 text-[0.875rem] tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
              >
                증상 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          증상 체크리스트
      ══════════════════════════════════════ */}
      <section id="checklist" className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
                Checklist
              </div>
              <h2 className="text-navy text-3xl lg:text-4xl font-light leading-tight mb-6">
                이런 분들이<br />많이 찾습니다
              </h2>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-gray-500 font-light text-[0.9375rem] leading-[1.85]">
                아래 항목 중 하나라도 해당되신다면<br />
                참신통 {data.shortName}와 상담해보세요.
              </p>
            </div>

            <div className="flex flex-col gap-0 divide-y divide-gray-200">
              {data.checklist.map((item, i) => (
                <div key={i} className="py-5 flex items-start gap-4">
                  <div className="w-5 h-5 border border-gold/60 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-gold/60 rounded-full" />
                  </div>
                  <p className="text-gray-700 font-light text-[0.9375rem] leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          대표 질환
      ══════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
              Conditions
            </div>
            <h2 className="text-navy text-3xl lg:text-4xl font-light">대표 질환</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.diseases.map((d) => (
              <div
                key={d.name}
                className="bg-cream p-8 border-t-2 border-gold/30 hover:border-gold transition-colors"
              >
                <h3 className="text-navy text-xl font-semibold mb-3">{d.name}</h3>
                <p className="text-gray-500 font-light text-[0.875rem] leading-[1.85]">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          참신통의 진단 접근
      ══════════════════════════════════════ */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
                Diagnosis
              </div>
              <h2 className="text-white text-3xl lg:text-4xl font-light leading-tight mb-6">
                {data.diagnosisTitle}
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="text-gray-400 font-light text-[0.9375rem] leading-[1.85]">
                {data.diagnosisDesc}
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {data.diagnosisPoints.map((point, i) => (
                <div key={i} className="py-5 border-b border-white/10 flex gap-5 items-start">
                  <span className="text-gold text-[0.75rem] font-medium w-6 shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <p className="text-gray-300 font-light text-[0.9375rem] leading-[1.8]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          치료 방법
      ══════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
              Treatment
            </div>
            <h2 className="text-navy text-3xl lg:text-4xl font-light">치료 방법</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.treatments.map((t, i) => (
              <div key={t.name} className="flex flex-col gap-4 p-7 bg-cream">
                <div className="text-gold text-[0.65rem] font-medium tracking-[0.2em]">
                  0{i + 1}
                </div>
                <h3 className="text-navy text-lg font-semibold">{t.name}</h3>
                <p className="text-gray-500 font-light text-[0.875rem] leading-[1.85]">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
              FAQ
            </div>
            <h2 className="text-navy text-3xl lg:text-4xl font-light">자주 묻는 질문</h2>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-gray-200">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          다른 클리닉 링크
      ══════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-navy text-xl font-light">다른 전문클리닉</h3>
            <Link
              href="/"
              className="text-gray-400 text-[0.8125rem] font-light hover:text-navy transition-colors flex items-center gap-1.5"
            >
              홈으로
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/clinic/spine', no: '01', name: '척추·체형클리닉', slug: 'spine' },
              { href: '/clinic/autonomic', no: '02', name: '자율신경클리닉', slug: 'autonomic' },
              { href: '/clinic/autoimmune', no: '03', name: '자가면역질환클리닉', slug: 'autoimmune' },
              { href: '/clinic/women', no: '04', name: '여성건강·호르몬클리닉', slug: 'women' },
            ]
              .filter((c) => c.slug !== data.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={c.href}
                  className="border border-gray-100 p-6 hover:border-navy hover:bg-cream transition-all group"
                >
                  <div className="text-gold text-[0.65rem] font-medium tracking-[0.2em] mb-2">
                    {c.no}
                  </div>
                  <div className="text-navy font-medium text-[0.9rem] group-hover:text-navy-dark leading-snug">
                    {c.name}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  )
}

// ── FAQ 아코디언 아이템 (클라이언트 필요 없이 CSS로) ──
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group py-6">
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
        <span className="text-navy font-medium text-[0.9375rem] leading-relaxed">{q}</span>
        <svg
          className="w-5 h-5 text-gold shrink-0 mt-0.5 transition-transform group-open:rotate-45"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
      </summary>
      <p className="mt-4 text-gray-500 font-light text-[0.9rem] leading-[1.85] pl-0">
        {a}
      </p>
    </details>
  )
}
