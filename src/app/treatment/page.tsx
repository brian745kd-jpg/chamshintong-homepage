import ReservationCTA from '@/components/ui/ReservationCTA'
export default function TreatmentPage() {
  return (
    <>
      <section className="bg-navy-dark pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[0.7rem] tracking-[0.3em] uppercase">Treatment</span>
          </div>
          <h1 className="text-white text-5xl lg:text-6xl font-light mb-5">치료과정</h1>
          <p className="text-gray-500 border border-white/10 inline-block px-4 py-2 text-sm">
            [ 초진안내, 진료 프로세스 콘텐츠 입력 예정 ]
          </p>
        </div>
      </section>
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-gray-400 text-[0.9375rem] font-light">
          [ 초진안내 및 진료 프로세스 상세 콘텐츠 입력 예정 ]
        </div>
      </section>
      <ReservationCTA />
    </>
  )
}
