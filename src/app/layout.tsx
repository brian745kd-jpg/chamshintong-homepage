import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '참신통한의원 | 척추·자율신경·눈·코·귀·여성건강 전문 한의원',
  description:
    '병을 고치기 위해 병이 들어있는 사람을 고칩니다. 전국 참신통 네트워크의 통합 홈페이지입니다.',
  openGraph: {
    title: '참신통한의원 | 척추·자율신경·눈·코·귀·여성건강 전문 한의원',
    description:
      '병을 고치기 위해 병이 들어있는 사람을 고칩니다. 전국 참신통 네트워크의 통합 홈페이지입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '참신통한의원 | 척추·자율신경·눈·코·귀·여성건강 전문 한의원',
    description:
      '병을 고치기 위해 병이 들어있는 사람을 고칩니다. 전국 참신통 네트워크의 통합 홈페이지입니다.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSans.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
