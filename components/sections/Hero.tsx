'use client'

import { useEffect, useRef } from 'react'
import MagneticButton from '@/components/ui/MagneticButton'

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#FBC02D" className="w-3.5 h-3.5">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)
  const card1 = useRef<HTMLDivElement>(null)
  const card2 = useRef<HTMLDivElement>(null)
  const card3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined
    async function init() {
      try {
        const { gsap } = await import('gsap')
        ctx = gsap.context(() => {
          gsap.to(orb1.current, { y: -40, x: 20, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' })
          gsap.to(orb2.current, { y: 30, x: -25, duration: 13, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 })
          if (card1.current) gsap.to(card1.current, { y: -12, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
          if (card2.current) gsap.to(card2.current, { y: 10, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2 })
          if (card3.current) gsap.to(card3.current, { y: -8, duration: 4.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.6 })
        })
      } catch (_) { /* non-critical */ }
    }
    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0A0B0F' }}>

      {/* ── City route network SVG ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
          <defs>
            <linearGradient id="rg-a" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF3D2E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="rg-b" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00FFB3" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="rg-c" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF3D2E" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          {/* Primary routes */}
          <path d="M -60 720 C 200 630, 420 510, 660 390 S 920 260, 1200 200 S 1380 185, 1520 170"
            fill="none" stroke="url(#rg-a)" strokeWidth="1.5" className="route-line" />
          <path d="M -60 500 C 160 450, 360 400, 560 320 S 820 220, 1060 175 S 1300 148, 1520 130"
            fill="none" stroke="url(#rg-a)" strokeWidth="1" className="route-line" style={{ animationDelay: '-1.5s' }} />
          <path d="M -60 880 C 300 740, 580 610, 790 470 S 1010 320, 1210 255 S 1390 215, 1520 205"
            fill="none" stroke="url(#rg-a)" strokeWidth="0.8" className="route-line" style={{ animationDelay: '-3s', animationDuration: '5.5s' }} />

          {/* Return routes */}
          <path d="M 1520 760 C 1220 690, 920 560, 660 440 S 360 300, 110 235 S -80 205, -120 195"
            fill="none" stroke="url(#rg-b)" strokeWidth="1.2" className="route-line-fast" />
          <path d="M 1520 460 C 1200 405, 950 345, 700 285 S 400 205, 150 165 S -40 148, -100 140"
            fill="none" stroke="url(#rg-b)" strokeWidth="0.7" className="route-line-fast" style={{ animationDelay: '-2s' }} />

          {/* Cross routes */}
          <path d="M 220 -40 C 290 170, 310 360, 350 510 S 410 700, 460 920"
            fill="none" stroke="url(#rg-c)" strokeWidth="0.7" className="route-line" style={{ animationDelay: '-0.8s', animationDuration: '4.5s' }} />
          <path d="M 740 -40 C 755 190, 770 390, 790 540 S 808 730, 825 920"
            fill="none" stroke="url(#rg-c)" strokeWidth="0.6" className="route-line-fast" style={{ animationDelay: '-1.2s' }} />
          <path d="M 1100 -40 C 1105 200, 1100 420, 1090 580 S 1080 760, 1075 920"
            fill="none" stroke="url(#rg-c)" strokeWidth="0.5" className="route-line" style={{ animationDelay: '-2.5s' }} />

          {/* Location pings at key intersections */}
          <circle cx="660" cy="390" r="6" fill="#FF3D2E" opacity="0.9" className="loc-ping" />
          <circle cx="660" cy="390" r="14" fill="none" stroke="#FF3D2E" strokeWidth="1" opacity="0.4" className="loc-ping-delay" />

          <circle cx="290" cy="570" r="4" fill="#00FFB3" opacity="0.8" className="loc-ping-delay" />
          <circle cx="290" cy="570" r="10" fill="none" stroke="#00FFB3" strokeWidth="0.8" opacity="0.35" className="loc-ping-delay-2" />

          <circle cx="1060" cy="240" r="4" fill="#00D9F5" opacity="0.7" className="loc-ping-delay-2" />
          <circle cx="1060" cy="240" r="9" fill="none" stroke="#00D9F5" strokeWidth="0.8" opacity="0.3" className="loc-ping" />

          <circle cx="910" cy="430" r="3" fill="#FF6B35" opacity="0.6" className="loc-ping" />
          <circle cx="480" cy="310" r="2.5" fill="#00D9F5" opacity="0.4" className="loc-ping-delay-2" />
          <circle cx="1180" cy="175" r="2.5" fill="#FF3D2E" opacity="0.5" className="loc-ping-delay" />

          {/* Static node dots */}
          <circle cx="430" cy="460" r="2" fill="#FF3D2E" opacity="0.35" />
          <circle cx="790" cy="315" r="2" fill="#00D9F5" opacity="0.3" />
          <circle cx="1150" cy="195" r="2" fill="#FF6B35" opacity="0.35" />
          <circle cx="155" cy="445" r="1.5" fill="#00FFB3" opacity="0.3" />
        </svg>
      </div>

      {/* ── CSS motion delivery dots ── */}
      <div className="delivery-dot-1" style={{ zIndex: 1, pointerEvents: 'none' }} />
      <div className="delivery-dot-2" style={{ zIndex: 1, pointerEvents: 'none' }} />
      <div className="delivery-dot-3" style={{ zIndex: 1, pointerEvents: 'none' }} />

      {/* ── Ambient gradient orbs ── */}
      <div ref={orb1} className="absolute -top-24 -left-16 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,61,46,0.10) 0%, transparent 70%)', filter: 'blur(90px)' }} />
      <div ref={orb2} className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,217,245,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      {/* ── Subtle grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-32 pb-20">
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ── Left: headline + CTAs ── */}
          <div>
            {/* Live badge */}
            <div className="mb-6 sm:mb-8 hero-badge">
              <span className="inline-flex items-center gap-2 glass border border-primary/25 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span className="text-xs font-semibold text-slate-200 tracking-wide">Now live across 8 cities in Kenya</span>
              </span>
            </div>

            {/* H1 — each word clips up independently */}
            <h1 className="font-black leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(46px, 7vw, 88px)' }}>
              <span className="overflow-hidden block">
                <span className="text-reveal text-reveal-delay-1 text-white">Deliver</span>
              </span>
              <span className="overflow-hidden block">
                <span className="shimmer-reveal">Anything.</span>
              </span>
              <span className="overflow-hidden block">
                <span className="text-reveal text-reveal-delay-3 text-white">In Minutes.</span>
              </span>
            </h1>

            {/* Sub copy */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-300 max-w-md leading-relaxed hero-sub">
              Kenya&apos;s fastest on-demand delivery platform. Send packages across Nairobi, Mombasa, Kisumu and 5 more cities. Tracked end to end, guaranteed on time.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 hero-cta">
              <MagneticButton href="/get-started" strength={0.45}>
                <span className="inline-flex items-center gap-2.5 text-white font-black px-7 sm:px-9 py-4 rounded-2xl transition-all duration-300 hover:shadow-glow-lg text-sm sm:text-base"
                  style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)', boxShadow: '0 0 40px rgba(255,61,46,0.35)' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Send a Package
                </span>
              </MagneticButton>
              <MagneticButton href="/get-started">
                <span className="inline-flex items-center gap-2.5 glass border border-white/15 hover:border-primary/40 text-white font-semibold px-7 sm:px-8 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base">
                  <span className="text-accent-cyan">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                  Watch it work
                </span>
              </MagneticButton>
            </div>

            {/* Trust row */}
            <div className="mt-10 sm:mt-12 flex items-center gap-5 hero-trust">
              <div className="flex -space-x-3">
                {['#FF3D2E', '#E6341F', '#00D9F5', '#00FFB3', '#FF6B35'].map((c, i) => (
                  <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-xs font-black"
                    style={{ background: `${c}22`, borderColor: '#0A0B0F', color: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-xs text-slate-400">Trusted by <span className="text-white font-semibold">50,000+</span> Kenyans</p>
              </div>
            </div>
          </div>

          {/* ── Right: phone + floating cards ── */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 hero-phone">
            <div className="relative">
              <PhoneMockup />

              {/* Floating card: pickup notification */}
              <div ref={card1}
                className="absolute -right-2 sm:-right-8 top-16 glass-card border border-accent-mint/25 rounded-2xl px-4 py-3 hidden sm:flex items-center gap-3 z-20"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,255,179,0.12)', border: '1px solid rgba(0,255,179,0.25)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">Package picked up!</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Just now in Westlands</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent-mint animate-pulse ml-1 flex-shrink-0" />
              </div>

              {/* Floating card: earnings */}
              <div ref={card2}
                className="absolute -left-4 sm:-left-12 bottom-32 glass-card border border-primary/25 rounded-2xl px-4 py-3 z-20 hidden sm:block"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <p className="text-[10px] text-slate-400 mb-0.5">Today&apos;s Earnings</p>
                <p className="text-xl font-black gradient-text">KSh 4,800</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg viewBox="0 0 20 20" fill="#00FFB3" className="w-3 h-3">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] text-accent-mint font-semibold">+18% vs yesterday</span>
                </div>
              </div>

              {/* Floating card: live count */}
              <div ref={card3}
                className="absolute -right-2 sm:-right-10 bottom-48 glass-card border border-accent-cyan/20 rounded-xl px-3.5 py-2.5 z-20 hidden sm:flex items-center gap-2.5"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-[9px] text-slate-400 leading-none mb-0.5">Live deliveries</p>
                  <p className="text-[13px] font-black" style={{ color: '#00D9F5' }}>1,247 active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ticker ── */}
      <div className="relative z-10 border-t border-white/5 glass-heavy py-3 sm:py-4">
        <div className="ticker-container">
          <div className="ticker-track">
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-10 sm:gap-14 px-6">
                {[
                  { label: 'Deliveries completed', value: '2.4M+' },
                  { label: 'Cities across Kenya', value: '8' },
                  { label: 'Avg delivery time', value: '4 min' },
                  { label: 'Verified riders', value: '3,000+' },
                  { label: 'Customer rating', value: '4.9 / 5' },
                  { label: 'On-time rate', value: '99.2%' },
                  { label: 'Live support', value: '24 / 7' },
                  { label: 'Package cover', value: 'Up to KSh 50k' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                    <span className="text-sm sm:text-base font-black text-white">{item.value}</span>
                    <span className="text-xs text-slate-500">{item.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 ml-2" />
                  </div>
                ))}
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
    <div className="relative z-10">
      {/* Glow halo behind phone */}
      <div className="absolute inset-0 rounded-[50px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 60%, rgba(255,61,46,0.28) 0%, rgba(255,107,53,0.12) 40%, transparent 70%)', filter: 'blur(40px)', transform: 'scale(0.88)' }} />

      {/* Phone shell */}
      <div className="relative w-[260px] sm:w-[280px] h-[540px] sm:h-[588px] rounded-[44px] p-[2px]"
        style={{ background: 'linear-gradient(145deg, #2e2e2e 0%, #111 60%)', boxShadow: '0 32px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04)' }}>
        <div className="w-full h-full rounded-[42px] flex flex-col overflow-hidden" style={{ background: '#0D0F14' }}>

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-5 pt-3 pb-1.5 flex-shrink-0">
            <span className="text-[11px] font-semibold text-white">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-6 bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px] items-end">
                {[3, 4, 5, 6].map(h => (
                  <div key={h} className="w-[3px] bg-white/80 rounded-sm" style={{ height: h }} />
                ))}
              </div>
              <div className="w-5 h-2.5 rounded-sm border border-white/40 p-[1px] ml-1">
                <div className="w-3/4 h-full bg-accent-mint rounded-sm" />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative mx-2.5 rounded-2xl overflow-hidden flex-shrink-0" style={{ height: '210px', background: 'linear-gradient(145deg, #0c1a28, #08101a)' }}>
            <div className="absolute inset-0 opacity-15"
              style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.5) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 210" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="ph-route" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FFB3" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF3D2E" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d="M 28 170 C 80 135, 135 155, 182 105 S 242 62, 258 55"
                fill="none" stroke="url(#ph-route)" strokeWidth="2.5" strokeDasharray="6 4" className="route-line" />
              {/* Origin ping */}
              <circle cx="28" cy="170" r="12" fill="rgba(0,255,179,0.12)" className="loc-ping" />
              <circle cx="28" cy="170" r="6" fill="#00FFB3" />
              <circle cx="28" cy="170" r="2.5" fill="white" />
              {/* Destination ping */}
              <circle cx="258" cy="55" r="8" fill="rgba(255,61,46,0.2)" className="loc-ping-delay" />
              <circle cx="258" cy="55" r="4.5" fill="#FF3D2E" />
              <circle cx="258" cy="55" r="1.8" fill="white" />
              {/* Rider mid-route */}
              <circle cx="143" cy="120" r="10" fill="rgba(255,61,46,0.15)" className="loc-ping" />
              <circle cx="143" cy="120" r="6" fill="#FF3D2E" />
              <circle cx="143" cy="120" r="2.5" fill="white" />
            </svg>
            {/* Live badge */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
              <span className="text-[9px] font-bold text-white/90 tracking-widest">LIVE</span>
            </div>
            {/* ETA badge */}
            <div className="absolute bottom-2.5 right-2.5 rounded-lg px-2.5 py-1.5"
              style={{ background: 'rgba(255,61,46,0.92)', backdropFilter: 'blur(8px)' }}>
              <span className="text-[10px] font-black text-white">ETA 4 min</span>
            </div>
          </div>

          {/* Package card */}
          <div className="mx-2.5 mt-2.5 rounded-2xl p-3 flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,61,46,0.14)', border: '1px solid rgba(255,61,46,0.28)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Package #2847</p>
                  <p className="text-[9px] text-slate-400">Electronics · Fragile</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black text-accent-mint">ETA 4 min</p>
                <p className="text-[9px] text-slate-500">0.8 km away</p>
              </div>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full" style={{ width: '72%', background: 'linear-gradient(90deg, #FF3D2E, #FF6B35)' }} />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[8px] text-slate-500">Picked up</span>
              <span className="text-[8px] text-slate-500">On the way</span>
              <span className="text-[8px] font-semibold" style={{ color: '#FF3D2E' }}>Delivery</span>
            </div>
          </div>

          {/* Driver card */}
          <div className="mx-2.5 mt-2 mb-2.5 rounded-2xl px-3 py-2.5 flex items-center justify-between flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
                BK
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white">Brian Kamau</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <svg viewBox="0 0 20 20" fill="#FBC02D" className="w-3 h-3">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-[9px] text-slate-400">4.98 · 1,240 trips</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,61,46,0.12)', border: '1px solid rgba(255,61,46,0.25)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,255,179,0.08)', border: '1px solid rgba(0,255,179,0.22)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
