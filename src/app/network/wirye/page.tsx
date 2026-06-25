import Link from 'next/link'
import { getBranchBySlug } from '@/data/branches'
import ReservationCTA from '@/components/ui/ReservationCTA'

export default function BranchPage() {
  const branch = getBranchBySlug('wirye')!
  return (
    <>
      <section className="relative bg-navy-dark pt-40 pb-24">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[0.75rem] text-gray-500 mb-10">
            <Link href="/" className="hover:text-gray-300">홈</Link><span>/</span>
            <Link href="/network" className="hover:text-gray-300">네트워크</Link><span>/</span>
            <span className="text-gray-300">{branch.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-[0.7rem] font-medium tracking-[0.3em] uppercase">{branch.region}</span>
          </div>
          <h1 className="text-white text-5xl lg:text-6xl font-light mb-4">
            참신통한의원<br /><span className="text-gold">{branch.name}</span>
          </h1>
          <p className="text-gray-400 font-light text-[0.9375rem] mb-8">{branch.addressDetail}</p>
          <p className="text-gray-600 text-sm border border-white/10 inline-block px-4 py-2">
            [ 지점 상세 페이지 — 콘텐츠 입력 예정 ]
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-gray-400 text-[0.9rem] font-light mb-8">[ 진료시간, 의료진, 오시는 길 등 콘텐츠 입력 예정 ]</p>
          <Link href="/network" className="text-navy text-[0.875rem] font-medium hover:text-gold transition-colors flex items-center gap-2">
            ← 전체 지점 보기
          </Link>
        </div>
      </section>
      <ReservationCTA />
    </>
  )
}
