'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'For Drivers', href: '#for-drivers' },
  { label: 'Safety', href: '#safety' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
      style={
        scrolled
          ? { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #E5E8ED', boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }
          : { background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(16px)' }
      }
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#FF3D2E' }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className="text-base font-black tracking-tight" style={{ color: '#0F1117' }}>DoorDash</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-gray-900"
              style={{ color: '#6B7280' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium px-4 py-2 transition-colors duration-200 hover:text-gray-900"
            style={{ color: '#6B7280' }}
          >
            Sign in
          </Link>
          <MagneticButton href="/get-started">
            <span
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-opacity duration-200 hover:opacity-90"
              style={{ background: '#FF3D2E' }}
            >
              Get Started
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </MagneticButton>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 transition-colors duration-200"
          style={{ color: '#6B7280' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-4"
          style={{ background: '#FFFFFF', borderTop: '1px solid #E5E8ED', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
        >
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium py-1 transition-colors duration-200"
              style={{ color: '#4B5563' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2 pt-4" style={{ borderTop: '1px solid #E5E8ED' }}>
            <Link
              href="/login"
              className="text-center rounded-xl py-3 font-medium border transition-colors duration-200"
              style={{ color: '#374151', borderColor: '#E5E8ED' }}
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="text-center text-white font-bold rounded-xl py-3"
              style={{ background: '#FF3D2E' }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
