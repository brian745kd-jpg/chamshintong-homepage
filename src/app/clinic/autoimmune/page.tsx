import ClinicPageTemplate, { ClinicData } from '@/components/ui/ClinicPageTemplate'

const data: ClinicData = {
  number: '03', slug: 'autoimmune',
  name: '자가면역질환클리닉', shortName: '자가면역클리닉',
  tagline: '[ 문구 입력 예정 ]', heroSub: '[ 클리닉 소개 문구 입력 예정 ]', accentColor: 'navy',
  checklist: ['[ 체크리스트 항목 1 ]', '[ 체크리스트 항목 2 ]', '[ 체크리스트 항목 3 ]', '[ 체크리스트 항목 4 ]'],
  diseases: [{ name: '[ 질환명 ]', desc: '[ 설명 ]' }, { name: '[ 질환명 ]', desc: '[ 설명 ]' }, { name: '[ 질환명 ]', desc: '[ 설명 ]' }, { name: '[ 질환명 ]', desc: '[ 설명 ]' }],
  diagnosisTitle: '[ 진단 접근 제목 ]', diagnosisDesc: '[ 설명 입력 예정 ]',
  diagnosisPoints: ['[ 포인트 1 ]', '[ 포인트 2 ]', '[ 포인트 3 ]'],
  treatments: [{ name: '[ 치료법 ]', desc: '[ 설명 ]' }, { name: '[ 치료법 ]', desc: '[ 설명 ]' }, { name: '[ 치료법 ]', desc: '[ 설명 ]' }, { name: '[ 치료법 ]', desc: '[ 설명 ]' }],
  faqs: [{ q: '[ 질문 1 ]', a: '[ 답변 입력 예정 ]' }, { q: '[ 질문 2 ]', a: '[ 답변 입력 예정 ]' }],
}
export default function AutoimmunePage() { return <ClinicPageTemplate data={data} /> }
