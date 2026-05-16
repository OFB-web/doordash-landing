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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-heavy border-b border-white/5 py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-200"
            style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <span className="text-xl font-black tracking-tight text-white">DoorDash</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.label} href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium tracking-wide">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login"
            className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2 font-medium">
            Sign in
          </Link>
          <MagneticButton href="/get-started">
            <span className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
              style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
              Get Started
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-heavy border-t border-white/5 mt-3 px-6 py-6 flex flex-col gap-4">
          {links.map(link => (
            <a key={link.label} href={link.href} className="text-slate-300 font-medium py-1" onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <Link href="/login" className="text-center text-slate-300 border border-white/10 rounded-2xl py-3 font-medium" onClick={() => setMenuOpen(false)}>
              Sign in
            </Link>
            <Link href="/get-started" className="text-center text-white font-bold rounded-2xl py-3" onClick={() => setMenuOpen(false)}
              style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
