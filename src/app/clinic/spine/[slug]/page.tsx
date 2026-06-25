import Link from 'next/link'
import { clinicDiseaseData } from '@/data/diseases'

const clinic = clinicDiseaseData.find(c => c.clinicSlug === 'spine')!

export function generateStaticParams() {
  return clinic.diseases.map(d => ({ slug: d.slug }))
}

export default async function SpineDiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const disease = clinic.diseases.find(d => d.slug === slug)
  const name = disease?.name ?? slug

  return (
    <main className="min-h-screen pt-20">
      <section className="bg-navy-dark text-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-gold text-[0.65rem] font-semibold tracking-[0.3em] uppercase mb-4">
            {clinic.clinicName}
          </div>
          <h1 className="text-4xl lg:text-5xl font-light mt-2">{name}</h1>
        </div>
      </section>
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-gray-400 font-light text-[0.9375rem]">[ 질환 상세 페이지 — 내용 입력 예정 ]</p>
          <div className="mt-10">
            <Link href={clinic.href} className="text-navy text-sm font-medium hover:text-navy-dark transition-colors">
              ← {clinic.clinicName}으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
