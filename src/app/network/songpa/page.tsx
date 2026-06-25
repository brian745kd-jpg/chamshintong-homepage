import Link from 'next/link'
import { getBranchBySlug } from '@/data/branches'
import ReservationCTA from '@/components/ui/ReservationCTA'

export default function SongpaPage() {
  const branch = getBranchBySlug('songpa')!

  const hours = [
    { day: '월요일', time: branch.hours.weekday, isSpecial: false },
    { day: '화요일', time: branch.hours.weekday, isSpecial: false },
    { day: '수요일', time: branch.hours.weekday, isSpecial: false },
    { day: '목요일', time: branch.hours.weekday, isSpecial: false },
    { day: '금요일', time: branch.hours.weekday, isSpecial: false },
    { day: '토요일', time: branch.hours.saturday, isSpecial: true },
    { day: '일요일·공휴일', time: '휴진', isSpecial: true },
  ]

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative bg-navy-dark pt-40 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-24">
          {/* 브레드크럼 */}
          <div className="flex items-center gap-2 text-[0.75rem] text-gray-500 mb-10">
            <Link href="/" className="hover:text-gray-300 transition-colors">홈</Link>
            <span>/</span>
            <Link href="/network" className="hover:text-gray-300 transition-colors">네트워크</Link>
            <span>/</span>
            <span className="text-gray-300">송파점</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-[0.7rem] font-medium tracking-[0.3em] uppercase">
                  Seoul · Songpa
                </span>
              </div>
              <h1 className="text-white text-5xl lg:text-6xl font-light leading-tight mb-5">
                참신통한의원<br />
                <span className="text-gold">송파점</span>
              </h1>
              <p className="text-gray-400 font-light text-[0.9375rem] leading-relaxed mb-8">
                {branch.addressDetail}
              </p>
              <div className="flex gap-4">
                <a
                  href={`tel:${branch.phone}`}
                  className="inline-flex items-center gap-2 bg-gold text-white font-medium px-7 py-3.5 text-[0.875rem] tracking-wide hover:bg-gold-light hover:text-navy transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  전화 예약
                </a>
                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-light px-7 py-3.5 text-[0.875rem] tracking-wide hover:border-white/60 hover:bg-white/5 transition-all"
                >
                  온라인 예약
                </Link>
              </div>
            </div>

            {/* 요약 정보 카드 */}
            <div className="bg-navy/60 border border-white/10 p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '전화번호', value: branch.phone },
                  { label: '지하철', value: branch.subway },
                  { label: '평일 진료', value: branch.hours.weekday },
                  { label: '점심시간', value: branch.hours.lunch },
                  { label: '토요일', value: branch.hours.saturday },
                  { label: '휴진', value: branch.hours.closed },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-gold text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-1.5">
                      {item.label}
                    </div>
                    <div className="text-white font-light text-[0.875rem] leading-snug">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구분 곡선 */}
        <div className="h-12 bg-cream relative">
          <div className="absolute -top-12 left-0 right-0 h-12 bg-cream" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          진료시간
      ══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
                Business Hours
              </div>
              <h2 className="text-navy text-3xl lg:text-4xl font-light mb-4">진료시간</h2>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-gray-500 font-light text-[0.9rem] leading-relaxed">
                점심시간에도 원무 접수는 가능합니다.<br />
                진료는 점심시간 이후 재개됩니다.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white overflow-hidden">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between px-7 py-5 ${
                      i < hours.length - 1 ? 'border-b border-gray-100' : ''
                    } ${h.time === '휴진' ? 'opacity-40' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      {h.isSpecial && h.time !== '휴진' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      )}
                      {!h.isSpecial && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy/20" />
                      )}
                      {h.time === '휴진' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                      )}
                      <span className="text-navy font-medium text-[0.9375rem]">{h.day}</span>
                    </div>
                    <span
                      className={`font-light text-[0.9375rem] ${
                        h.time === '휴진' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
                {/* 점심시간 안내 */}
                <div className="bg-cream px-7 py-4 flex items-center justify-between">
                  <span className="text-gray-500 text-[0.8125rem] font-light">점심시간 (공통)</span>
                  <span className="text-gray-600 text-[0.8125rem] font-light">{branch.hours.lunch}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          의료진
      ══════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
              Medical Staff
            </div>
            <h2 className="text-navy text-3xl lg:text-4xl font-light">송파점 의료진</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branch.doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-cream p-8 flex flex-col gap-5"
              >
                {/* 의사 사진 자리 */}
                <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gold text-[0.7rem] font-semibold tracking-[0.15em] uppercase mb-2">
                    {doctor.title}
                  </div>
                  <h3 className="text-navy text-2xl font-light mb-1">
                    {doctor.name} 원장
                  </h3>
                  <p className="text-gray-500 text-[0.875rem] font-light">
                    {doctor.specialty}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="w-6 h-px bg-gold/50" />
                </div>
              </div>
            ))}

            {/* 진료 예약 카드 */}
            <div className="bg-navy p-8 flex flex-col gap-5">
              <div className="text-gold text-[0.7rem] font-semibold tracking-[0.15em] uppercase">
                Reservation
              </div>
              <div>
                <h3 className="text-white text-xl font-light mb-3">
                  지금 바로<br />예약하세요
                </h3>
                <p className="text-gray-400 text-[0.8125rem] font-light leading-relaxed">
                  온라인 예약 또는 전화로<br />
                  간편하게 예약하실 수 있습니다.
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/reservation"
                  className="block text-center bg-gold text-white font-medium py-3 text-[0.875rem] hover:bg-gold-light hover:text-navy transition-all"
                >
                  온라인 예약
                </Link>
                <a
                  href={`tel:${branch.phone}`}
                  className="block text-center border border-white/30 text-white font-light py-3 text-[0.875rem] hover:border-white/60 transition-all"
                >
                  {branch.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          오시는 길
      ══════════════════════════════════════ */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-5">
              Directions
            </div>
            <h2 className="text-navy text-3xl lg:text-4xl font-light">오시는 길</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* 지도 플레이스홀더 */}
            <div className="lg:col-span-3 bg-navy/8 border border-gray-200 flex items-center justify-center min-h-[360px] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(27,49,96,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(27,49,96,0.8) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative text-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-navy font-medium text-[0.9375rem] mb-1">참신통한의원 송파점</p>
                <p className="text-gray-500 text-[0.8125rem] font-light">{branch.addressDetail}</p>
                <div className="mt-4 text-gray-400 text-[0.75rem] font-light">
                  [지도 삽입 예정 — 카카오맵/네이버맵]
                </div>
              </div>
            </div>

            {/* 교통 안내 */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  ),
                  title: '지하철',
                  desc: branch.subway,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  ),
                  title: '버스',
                  desc: branch.bus,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: '주차',
                  desc: branch.parking,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-navy font-semibold text-[0.9375rem] mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-gray-500 font-light text-[0.875rem] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* 주소 복사 */}
              <div className="bg-white border border-gray-200 p-5 mt-2">
                <div className="text-gray-400 text-[0.75rem] font-light mb-2 uppercase tracking-wide">주소</div>
                <p className="text-navy font-medium text-[0.9rem] leading-relaxed">
                  {branch.addressDetail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          다른 지점 안내
      ══════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-navy text-xl font-light">다른 참신통 지점</h3>
            <Link
              href="/network"
              className="text-gray-400 text-[0.8125rem] font-light hover:text-navy transition-colors flex items-center gap-1.5"
            >
              전체 보기
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { slug: 'gangdong', name: '강동점', region: '서울' },
              { slug: 'wirye', name: '위례점', region: '경기' },
              { slug: 'bundang', name: '분당점', region: '경기' },
              { slug: 'suwon', name: '수원점', region: '경기' },
              { slug: 'gumi', name: '구미점', region: '경북' },
            ].map((b) => (
              <Link
                key={b.slug}
                href={`/network/${b.slug}`}
                className="border border-gray-100 px-5 py-4 hover:border-navy hover:bg-cream transition-all group"
              >
                <div className="text-gold text-[0.65rem] font-semibold tracking-[0.15em] mb-1">
                  {b.region}
                </div>
                <div className="text-navy font-medium text-[0.9rem] group-hover:text-navy-dark">
                  {b.name}
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
