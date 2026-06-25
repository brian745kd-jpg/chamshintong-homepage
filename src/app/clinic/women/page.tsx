import ClinicPageTemplate, { ClinicData } from '@/components/ui/ClinicPageTemplate'

const placeholder: ClinicData = {
  number: '04', slug: 'women',
  name: '여성건강·호르몬클리닉', shortName: '여성건강클리닉',
  tagline: '[ 문구 입력 예정 ]', heroSub: '[ 문구 입력 예정 ]', accentColor: 'navy',
  checklist: ['[ 체크리스트 항목 ]', '[ 체크리스트 항목 ]', '[ 체크리스트 항목 ]'],
  diseases: [{ name: '[ 질환명 ]', desc: '[ 설명 ]' }, { name: '[ 질환명 ]', desc: '[ 설명 ]' }, { name: '[ 질환명 ]', desc: '[ 설명 ]' }],
  diagnosisTitle: '[ 진단 접근 제목 ]', diagnosisDesc: '[ 설명 입력 예정 ]',
  diagnosisPoints: ['[ 포인트 1 ]', '[ 포인트 2 ]', '[ 포인트 3 ]'],
  treatments: [{ name: '[ 치료법 ]', desc: '[ 설명 ]' }, { name: '[ 치료법 ]', desc: '[ 설명 ]' }, { name: '[ 치료법 ]', desc: '[ 설명 ]' }, { name: '[ 치료법 ]', desc: '[ 설명 ]' }],
  faqs: [{ q: '[ 질문 ]', a: '[ 답변 입력 예정 ]' }, { q: '[ 질문 ]', a: '[ 답변 입력 예정 ]' }],
}
export default function WomenPage() { return <ClinicPageTemplate data={placeholder} /> }
