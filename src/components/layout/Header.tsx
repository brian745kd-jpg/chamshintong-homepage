'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { clinicDiseaseData } from '@/data/diseases'

const networkByRegion = [
  {
    region: '서울',
    branches: [
      { href: '/network/songpa', label: '송파점' },
      { href: '/network/gangdong', label: '강동점' },
    ],
  },
  {
    region: '경기',
    branches: [
      { href: '/network/wirye', label: '위례점' },
      { href: '/network/bundang', label: '분당점' },
      { href: '/network/suwon', label: '수원점' },
    ],
  },
  {
    region: '경북',
    branches: [{ href: '/network/gumi', label: '구미점' }],
  },
]

const navLinks = [
  { href: '/about', label: '참신통 소개' },
  { href: '/treatment', label: '치료과정' },
]

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<'clinic' | 'network' | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const openMenu = useCallback((menu: 'clinic' | 'network') => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
    setActiveMenu(menu)
  }, [])

  const scheduleClose = useCallback(() => {
    hoverTimerRef.current = setTimeout(() => setActiveMenu(null), 200)
  }, [])

  const cancelClose = useCallback(() => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
  }, [])

  const toggle = (menu: 'clinic' | 'network') => {
    setActiveMenu((prev) => (prev === menu ? null : menu))
  }

  const closeAll = () => {
    setActiveMenu(null)
    setMobileOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-white'
      }`}
    >
      {/* ── Main Bar ── */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex flex-col leading-none group">
          <span className="text-navy font-bold text-[1.25rem] tracking-tight group-hover:text-navy-dark transition-colors">
            참신통한의원
          </span>
          <span className="text-gold text-[0.6rem] tracking-[0.25em] font-light mt-0.5">
            CHAMSHINTONG
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeAll}
              className="text-[0.875rem] text-gray-600 hover:text-navy font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {/* 전문클리닉 trigger — hover */}
          <button
            onMouseEnter={() => openMenu('clinic')}
            onMouseLeave={scheduleClose}
            onClick={() => toggle('clinic')}
            className={`flex items-center gap-1 text-[0.875rem] font-medium tracking-wide transition-colors ${
              activeMenu === 'clinic' ? 'text-navy' : 'text-gray-600 hover:text-navy'
            }`}
          >
            전문클리닉
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                activeMenu === 'clinic' ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* 네트워크 trigger — hover */}
          <button
            onMouseEnter={() => openMenu('network')}
            onMouseLeave={scheduleClose}
            onClick={() => toggle('network')}
            className={`flex items-center gap-1 text-[0.875rem] font-medium tracking-wide transition-colors ${
              activeMenu === 'network' ? 'text-navy' : 'text-gray-600 hover:text-navy'
            }`}
          >
            네트워크
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                activeMenu === 'network' ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="text-gray-300 text-sm font-light">|</span>
          <Link
            href="/reservation"
            onClick={closeAll}
            className="bg-navy text-white text-[0.8125rem] font-medium px-7 py-3 tracking-wide hover:bg-navy-dark transition-colors"
          >
            예약하기
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ══════════════════════════════════════
          Mega Menu: 전문클리닉
      ══════════════════════════════════════ */}
      {activeMenu === 'clinic' && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="hidden lg:block border-t border-gray-100 bg-white mega-menu-enter shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex">

              {/* 왼쪽: 타이틀 */}
              <div className="w-48 py-10 pr-8 shrink-0 flex flex-col justify-between">
                <div>
                  <div className="text-gold text-[0.6rem] font-semibold tracking-[0.3em] uppercase mb-5">
                    Clinics
                  </div>
                  <h3 className="text-navy text-[2rem] font-light leading-[1.15]">
                    전문<br />클리닉
                  </h3>
                </div>
                <Link
                  href="/reservation"
                  onClick={closeAll}
                  className="inline-flex items-center gap-1.5 text-[0.78rem] text-gray-400 hover:text-navy transition-colors mt-8"
                >
                  상담 예약하기
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* 구분선 */}
              <div className="w-px bg-gray-100 my-8 shrink-0" />

              {/* 가운데: 4개 클리닉 + 질환 목록 */}
              <div className="flex-1 py-10 px-10">
                <div className="grid grid-cols-4 gap-8">
                  {clinicDiseaseData.map((clinic) => (
                    <div key={clinic.clinicSlug}>
                      {/* 클리닉 헤더 */}
                      <Link
                        href={clinic.href}
                        onClick={closeAll}
                        className="block text-navy font-semibold text-[0.875rem] mb-3 hover:text-gold transition-colors duration-150 leading-snug"
                      >
                        {clinic.clinicName}
                      </Link>
                      <div className="w-full h-px bg-gray-100 mb-4" />

                      {/* 질환 목록 */}
                      <ul className="flex flex-col gap-2.5">
                        {clinic.diseases.map((disease) => (
                          <li key={disease.slug}>
                            <Link
                              href={`${clinic.href}/${disease.slug}`}
                              onClick={closeAll}
                              className="text-gray-500 text-[0.8125rem] font-light hover:text-navy transition-colors duration-150"
                            >
                              {disease.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 구분선 */}
              <div className="w-px bg-gray-100 my-8 shrink-0" />

              {/* 오른쪽: 브랜드 영역 */}
              <div className="w-56 py-10 pl-8 shrink-0 flex flex-col">
                <div className="text-gold text-[0.6rem] font-semibold tracking-[0.3em] uppercase mb-5">
                  참신통
                </div>
                <p className="text-navy text-[1.25rem] font-light leading-[1.5] mb-4">
                  몸이 보내는<br />신호를 읽습니다.
                </p>
                <p className="text-gray-400 text-[0.8125rem] font-light leading-[1.8]">
                  환자의 말만으로 진단하지 않습니다.<br />
                  몸이 보내는 신호를<br />
                  함께 읽습니다.
                </p>
                {/* 이미지 Placeholder */}
                <div className="mt-auto pt-6">
                  <div className="bg-sage-tint h-20 w-full flex items-center justify-center">
                    <span className="text-gray-300 text-[0.7rem] tracking-widest">[ 이미지 ]</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          Mega Menu: 네트워크
      ══════════════════════════════════════ */}
      {activeMenu === 'network' && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="hidden lg:block border-t border-gray-100 bg-white mega-menu-enter shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex gap-16">
              {networkByRegion.map(({ region, branches }) => (
                <div key={region}>
                  <div className="text-gold text-[0.7rem] font-semibold tracking-[0.2em] uppercase mb-4">
                    {region}
                  </div>
                  <div className="flex flex-col gap-2">
                    {branches.map((b) => (
                      <Link
                        key={b.href}
                        href={b.href}
                        onClick={closeAll}
                        className="text-navy font-medium text-[0.95rem] hover:text-gold transition-colors py-0.5"
                      >
                        {b.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="ml-auto self-end">
                <Link
                  href="/network"
                  onClick={closeAll}
                  className="inline-flex items-center gap-2 text-[0.8125rem] text-gray-400 hover:text-navy transition-colors"
                >
                  전체 지점 보기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="px-5 py-6 flex flex-col gap-6">
            <Link href="/about" onClick={closeAll} className="text-navy font-medium text-lg">
              참신통 소개
            </Link>

            <div>
              <div className="text-navy font-medium text-lg mb-3">전문클리닉</div>
              <div className="flex flex-col gap-3 pl-4 border-l border-gray-100">
                {clinicDiseaseData.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={closeAll}
                    className="text-gray-600 text-[0.9rem]"
                  >
                    {c.clinicName}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/treatment" onClick={closeAll} className="text-navy font-medium text-lg">
              치료과정
            </Link>

            <div>
              <div className="text-navy font-medium text-lg mb-3">네트워크</div>
              <div className="flex flex-col gap-3 pl-4 border-l border-gray-100">
                {networkByRegion.flatMap((r) => r.branches).map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    onClick={closeAll}
                    className="text-gray-600 text-[0.9rem]"
                  >
                    {b.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/reservation"
              onClick={closeAll}
              className="block text-center bg-navy text-white py-4 font-medium tracking-wide mt-2"
            >
              예약하기
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
