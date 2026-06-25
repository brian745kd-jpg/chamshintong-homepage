import Link from 'next/link'

const footerLinks = {
  소개: [
    { href: '/about', label: '브랜드 스토리' },
    { href: '/about', label: '진료철학' },
    { href: '/about', label: '의료진 소개' },
  ],
  전문클리닉: [
    { href: '/clinic/spine', label: '척추·체형클리닉' },
    { href: '/clinic/autonomic', label: '자율신경클리닉' },
    { href: '/clinic/ent', label: '눈·코·귀 클리닉' },
    { href: '/clinic/women', label: '여성건강·호르몬클리닉' },
  ],
  치료안내: [
    { href: '/treatment', label: '초진안내' },
    { href: '/treatment', label: '진료 프로세스' },
    { href: '/reservation', label: '예약하기' },
  ],
  네트워크: [
    { href: '/network/songpa', label: '송파점' },
    { href: '/network/gangdong', label: '강동점' },
    { href: '/network/wirye', label: '위례점' },
    { href: '/network/bundang', label: '분당점' },
    { href: '/network/suwon', label: '수원점' },
    { href: '/network/gumi', label: '구미점' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-white font-bold text-xl tracking-tight mb-1">참신통한의원</div>
              <div className="text-gold text-[0.6rem] tracking-[0.25em] font-light">CHAMSHINTONG</div>
            </div>
            <p className="text-gray-400 text-[0.8125rem] font-light leading-relaxed">
              몸을 치료하기 전에<br />
              원인을 진단합니다.
            </p>
            <div className="mt-6 w-8 h-px bg-gold opacity-60" />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-gold text-[0.7rem] font-semibold tracking-[0.2em] uppercase mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-[0.8125rem] font-light hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span className="text-gray-500 text-[0.75rem] font-light">
            사업자등록번호: 000-00-00000
          </span>
          <Link href="#" className="text-gray-500 text-[0.75rem] font-light hover:text-gray-300 transition-colors">
            개인정보처리방침
          </Link>
          <Link href="#" className="text-gray-500 text-[0.75rem] font-light hover:text-gray-300 transition-colors">
            비급여수가표
          </Link>
        </div>
        <p className="text-gray-600 text-[0.75rem] font-light">
          © {new Date().getFullYear()} 참신통한의원. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
