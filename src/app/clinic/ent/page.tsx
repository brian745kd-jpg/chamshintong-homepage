import ClinicPageTemplate, { ClinicData } from '@/components/ui/ClinicPageTemplate'

const data: ClinicData = {
  number: '03', slug: 'ent',
  name: '눈·코·귀 클리닉', shortName: '눈·코·귀 클리닉',
  tagline: '[ 문구 입력 예정 ]', heroSub: '[ 클리닉 소개 문구 입력 예정 ]', accentColor: 'navy',
  checklist: [
    '눈앞에 실 같은 것이 떠다니고 점이 보입니다. (비문증)',
    '코가 항상 막혀 있고 재채기가 반복됩니다. (비염)',
    '귀에서 소리가 나고 멈추지 않습니다. (이명)',
    '소리가 잘 안 들리거나 먹먹한 느낌이 있습니다. (난청)',
    '눈이 항상 건조하고 뻑뻑합니다. (안구건조증)',
  ],
  diseases: [
    { name: '비문증', desc: '[ 설명 입력 예정 ]' },
    { name: '비염·축농증', desc: '[ 설명 입력 예정 ]' },
    { name: '이명', desc: '[ 설명 입력 예정 ]' },
    { name: '난청', desc: '[ 설명 입력 예정 ]' },
    { name: '안구건조증', desc: '[ 설명 입력 예정 ]' },
    { name: '어지럼증', desc: '[ 설명 입력 예정 ]' },
  ],
  diagnosisTitle: '[ 진단 접근 제목 ]', diagnosisDesc: '[ 설명 입력 예정 ]',
  diagnosisPoints: ['[ 포인트 1 ]', '[ 포인트 2 ]', '[ 포인트 3 ]'],
  treatments: [
    { name: '[ 치료법 ]', desc: '[ 설명 ]' },
    { name: '[ 치료법 ]', desc: '[ 설명 ]' },
    { name: '[ 치료법 ]', desc: '[ 설명 ]' },
    { name: '[ 치료법 ]', desc: '[ 설명 ]' },
  ],
  faqs: [
    { q: '[ 질문 1 ]', a: '[ 답변 입력 예정 ]' },
    { q: '[ 질문 2 ]', a: '[ 답변 입력 예정 ]' },
  ],
}
export default function EntPage() { return <ClinicPageTemplate data={data} /> }
