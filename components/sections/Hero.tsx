'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import MagneticButton from '@/components/ui/MagneticButton'

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#FBC02D" className="w-3.5 h-3.5">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined
    async function init() {
      try {
        const { gsap } = await import('gsap')
        ctx = gsap.context(() => {
          if (phoneRef.current) {
            gsap.to(phoneRef.current, { y: -8, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
          }
        })
      } catch (_) { /* non-critical */ }
    }
    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col" style={{ background: '#0A0B0F' }}>

      {/* Very faint city texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?auto=format&fit=crop&w=1920&q=40"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.04 }}
          priority
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-10">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-20 w-full items-center">

          {/* Left */}
          <div>
            {/* Category line */}
            <p className="hero-badge text-xs font-semibold tracking-widest uppercase mb-8"
              style={{ color: '#FF3D2E' }}>
              Now live in Nairobi · Mombasa · Kisumu · 5 more cities
            </p>

            {/* Headline */}
            <h1 className="font-black tracking-tight leading-[0.97]" style={{ fontSize: 'clamp(54px, 8.5vw, 112px)' }}>
              <span className="overflow-hidden block">
                <span className="text-reveal text-reveal-delay-1 block text-white">Deliver</span>
              </span>
              <span className="overflow-hidden block">
                <span className="shimmer-reveal block">Anything.</span>
              </span>
              <span className="overflow-hidden block">
                <span className="text-reveal text-reveal-delay-3 block text-white">In Minutes.</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="mt-8 text-lg text-slate-400 max-w-[400px] leading-relaxed hero-sub">
              Kenya&apos;s fastest on-demand delivery. Send packages across 8 cities, tracked end to end, guaranteed on time.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-3 hero-cta">
              <MagneticButton href="/get-started" strength={0.35}>
                <span className="inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-opacity duration-200 hover:opacity-90"
                  style={{ background: '#FF3D2E' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Send a Package
                </span>
              </MagneticButton>
              <MagneticButton href="/get-started">
                <span className="inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-xl text-sm sm:text-base transition-all duration-200 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                  Become a driver
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </MagneticButton>
            </div>

            {/* Trust */}
            <div className="mt-10 flex items-center gap-4 hero-trust">
              <div className="flex -space-x-2">
                {['#FF3D2E', '#E6341F', '#00D9F5', '#00FFB3', '#FF6B35'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black"
                    style={{ background: `${c}18`, borderColor: '#0A0B0F', color: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span className="text-xs text-slate-500">
                  <span className="text-slate-300 font-medium">50,000+</span> Kenyans trust us
                </span>
              </div>
            </div>
          </div>

          {/* Right: phone only, clean */}
          <div className="flex justify-center lg:justify-end hero-phone">
            <div ref={phoneRef}>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: '2.4M+', label: 'Deliveries completed' },
              { value: '4 min', label: 'Average delivery time' },
              { value: '99.2%', label: 'On-time success rate' },
              { value: '3,000+', label: 'Verified riders' },
            ].map((stat, i) => (
              <div key={i} className="py-6 px-4 sm:px-6 flex flex-col gap-1"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none rounded-[44px]"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(255,61,46,0.1) 0%, transparent 70%)', filter: 'blur(30px)', transform: 'scale(0.95) translateY(10px)' }} />

      <div className="relative w-[252px] sm:w-[270px] h-[520px] sm:h-[566px] rounded-[44px] p-[2px]"
        style={{ background: 'linear-gradient(145deg, #2e2e2e 0%, #111 70%)', boxShadow: '0 40px 120px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)' }}>
        <div className="w-full h-full rounded-[42px] flex flex-col overflow-hidden" style={{ background: '#0D0F14' }}>

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-5 pt-3 pb-1.5 flex-shrink-0">
            <span className="text-[11px] font-semibold text-white">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-6 bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px] items-end">
                {[3, 4, 5, 6].map(h => <div key={h} className="w-[3px] bg-white/80 rounded-sm" style={{ height: h }} />)}
              </div>
              <div className="w-5 h-2.5 rounded-sm border border-white/40 p-[1px] ml-1">
                <div className="w-3/4 h-full rounded-sm" style={{ background: '#00FFB3' }} />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative mx-2.5 rounded-2xl overflow-hidden flex-shrink-0"
            style={{ height: 200, background: '#081018' }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 270 200" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="ph-r" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FFB3" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF3D2E" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d="M 26 164 C 76 130, 130 150, 176 102 S 236 60, 250 53"
                fill="none" stroke="url(#ph-r)" strokeWidth="2.5" strokeDasharray="6 4" className="route-line" />
              <circle cx="26" cy="164" r="10" fill="rgba(0,255,179,0.1)" className="loc-ping" />
              <circle cx="26" cy="164" r="5.5" fill="#00FFB3" />
              <circle cx="26" cy="164" r="2.5" fill="white" />
              <circle cx="250" cy="53" r="8" fill="rgba(255,61,46,0.15)" className="loc-ping-delay" />
              <circle cx="250" cy="53" r="4.5" fill="#FF3D2E" />
              <circle cx="250" cy="53" r="1.8" fill="white" />
              <circle cx="138" cy="116" r="8" fill="rgba(255,61,46,0.1)" className="loc-ping" />
              <circle cx="138" cy="116" r="5.5" fill="#FF3D2E" />
              <circle cx="138" cy="116" r="2.5" fill="white" />
            </svg>
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
              style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }}>
              <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#00FFB3' }} />
              <span className="text-[9px] font-bold text-white/90 tracking-widest">LIVE</span>
            </div>
            <div className="absolute bottom-2.5 right-2.5 rounded-lg px-2.5 py-1.5" style={{ background: '#FF3D2E' }}>
              <span className="text-[10px] font-black text-white">ETA 4 min</span>
            </div>
          </div>

          {/* Package */}
          <div className="mx-2.5 mt-2.5 rounded-2xl p-3 flex-shrink-0"
            style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,61,46,0.1)', border: '1px solid rgba(255,61,46,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Package #2847</p>
                  <p className="text-[9px] text-slate-500">Electronics · Fragile</p>
                </div>
              </div>
              <p className="text-[11px] font-black" style={{ color: '#00FFB3' }}>4 min</p>
            </div>
            <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="h-full rounded-full w-[72%]" style={{ background: '#FF3D2E' }} />
            </div>
          </div>

          {/* Driver */}
          <div className="mx-2.5 mt-2 mb-3 rounded-2xl px-3 py-2.5 flex items-center justify-between flex-shrink-0"
            style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                style={{ background: '#FF3D2E' }}>BK</div>
              <div>
                <p className="text-[11px] font-semibold text-white">Brian Kamau</p>
                <p className="text-[9px] text-slate-500">4.98 · 1,240 trips</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              {[
                { stroke: '#FF3D2E', bg: 'rgba(255,61,46,0.1)', border: 'rgba(255,61,46,0.2)', path: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /> },
                { stroke: '#00FFB3', bg: 'rgba(0,255,179,0.07)', border: 'rgba(0,255,179,0.18)', path: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> },
              ].map((btn, j) => (
                <button key={j} className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: btn.bg, border: `1px solid ${btn.border}` }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={btn.stroke} strokeWidth="2" className="w-3.5 h-3.5">{btn.path}</svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
