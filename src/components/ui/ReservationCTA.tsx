import Link from 'next/link'

export default function ReservationCTA() {
  return (
    <section className="bg-navy-dark py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-gold text-[0.7rem] font-semibold tracking-[0.3em] uppercase mb-6">
          RESERVATION
        </div>
        <h2 className="text-white text-4xl lg:text-5xl font-light leading-tight mb-6">
          지금 바로 예약하세요
        </h2>
        <p className="text-gray-400 font-light text-lg mb-12 leading-relaxed">
          가까운 참신통 지점을 선택해 예약하실 수 있습니다.<br className="hidden md:block" />
          처음 방문이라면 초진안내를 먼저 확인해보세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reservation"
            className="bg-gold text-white font-medium px-10 py-4 tracking-wide hover:bg-gold-light hover:text-navy transition-all duration-200 text-[0.9375rem] min-w-[180px] text-center"
          >
            온라인 예약
          </Link>
          <a
            href="tel:000-0000-0000"
            className="border border-white/30 text-white font-light px-10 py-4 tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200 text-[0.9375rem] min-w-[180px] text-center"
          >
            전화 예약
          </a>
          <a
            href="#kakao"
            className="border border-white/30 text-white font-light px-10 py-4 tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200 text-[0.9375rem] min-w-[180px] text-center"
          >
            카카오 예약
          </a>
        </div>
        <p className="text-gray-600 text-[0.8125rem] font-light mt-8">
          초진안내 및 진료 준비사항 →{' '}
          <Link href="/treatment" className="text-gray-400 underline hover:text-white transition-colors">
            초진안내 보기
          </Link>
        </p>
      </div>
    </section>
  )
}
