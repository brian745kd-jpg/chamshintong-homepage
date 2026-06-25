export default function ReservationPage() {
  return (
    <section className="bg-navy-dark min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-8"><div className="w-8 h-px bg-gold" /><span className="text-gold text-[0.7rem] tracking-[0.3em] uppercase">Reservation</span></div>
        <h1 className="text-white text-5xl lg:text-6xl font-light mb-5">예약하기</h1>
        <p className="text-gray-400 font-light text-[0.9375rem] mb-10">[ 온라인 예약 폼 / 지점 선택 / 날짜 선택 — 입력 예정 ]</p>
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
          {['온라인 예약', '전화 예약', '카카오 예약'].map(m => (
            <div key={m} className="border border-white/20 px-6 py-5 text-white font-light text-center">
              {m}<br /><span className="text-gray-500 text-xs">[ 연동 예정 ]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
