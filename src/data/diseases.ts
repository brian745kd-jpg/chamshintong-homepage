export type DiseaseItem = {
  slug: string
  name: string
}

export type ClinicWithDiseases = {
  clinicSlug: string
  clinicName: string
  href: string
  diseases: DiseaseItem[]
}

export const clinicDiseaseData: ClinicWithDiseases[] = [
  {
    clinicSlug: 'spine',
    clinicName: '척추·체형 클리닉',
    href: '/clinic/spine',
    diseases: [
      { slug: 'scoliosis', name: '척추측만증' },
      { slug: 'spondylolisthesis', name: '척추전방전위증' },
      { slug: 'stenosis', name: '척추관협착증' },
      { slug: 'lumbar-disc', name: '허리디스크' },
      { slug: 'cervical-disc', name: '목디스크' },
      { slug: 'turtle-neck', name: '거북목' },
    ],
  },
  {
    clinicSlug: 'autonomic',
    clinicName: '자율신경 클리닉',
    href: '/clinic/autonomic',
    diseases: [
      { slug: 'dysautonomia', name: '자율신경실조증' },
      { slug: 'insomnia', name: '불면증' },
      { slug: 'fatigue', name: '만성피로' },
      { slug: 'dizziness', name: '어지럼증' },
      { slug: 'panic', name: '공황장애' },
      { slug: 'palpitation', name: '두근거림' },
    ],
  },
  {
    clinicSlug: 'ent',
    clinicName: '눈·코·귀 클리닉',
    href: '/clinic/ent',
    diseases: [
      { slug: 'floaters', name: '비문증' },
      { slug: 'rhinitis', name: '비염' },
      { slug: 'tinnitus', name: '이명' },
      { slug: 'hearing-loss', name: '난청' },
      { slug: 'dry-eye', name: '안구건조증' },
      { slug: 'anosmia', name: '후각장애' },
    ],
  },
  {
    clinicSlug: 'women',
    clinicName: '여성건강·호르몬 클리닉',
    href: '/clinic/women',
    diseases: [
      { slug: 'hypothyroidism', name: '갑상선기능저하증' },
      { slug: 'hyperthyroidism', name: '갑상선기능항진증' },
      { slug: 'dysmenorrhea', name: '생리통' },
      { slug: 'menopause', name: '갱년기증후군' },
      { slug: 'infertility', name: '난임' },
    ],
  },
]
