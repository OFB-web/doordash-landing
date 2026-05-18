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
  const card1 = useRef<HTMLDivElement>(null)
  const card2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined
    async function init() {
      try {
        const { gsap } = await import('gsap')
        ctx = gsap.context(() => {
          if (card1.current) gsap.to(card1.current, { y: -10, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
          if (card2.current) gsap.to(card2.current, { y: 10, duration: 4.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
        })
      } catch (_) { /* non-critical */ }
    }
    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0A0B0F' }}>

      {/* Nairobi city image — very subtle texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?auto=format&fit=crop&w=1920&q=60"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.06 }}
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,11,15,0.5) 0%, rgba(10,11,15,0.75) 60%, #0A0B0F 100%)' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      {/* Single ambient glow — far top-left, very faint */}
      <div className="absolute top-0 left-0 w-[700px] h-[500px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 20% 30%, rgba(255,61,46,0.06) 0%, transparent 65%)', filter: 'blur(60px)' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-32 pb-20">
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div className="mb-7 hero-badge">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: 'rgba(255,61,46,0.08)', border: '1px solid rgba(255,61,46,0.18)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-mint pulse-dot" />
                <span className="text-xs font-semibold text-slate-300 tracking-wide">Live in 8 cities across Kenya</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black leading-[1.02] tracking-tight" style={{ fontSize: 'clamp(48px, 7.5vw, 92px)' }}>
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

            {/* Sub */}
            <p className="mt-7 text-base sm:text-lg text-slate-400 max-w-[420px] leading-relaxed hero-sub">
              Kenya&apos;s fastest on-demand delivery platform. Send packages across Nairobi, Mombasa, Kisumu and 5 more cities, tracked end to end.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 hero-cta">
              <MagneticButton href="/get-started" strength={0.4}>
                <span className="inline-flex items-center gap-2.5 text-white font-bold px-7 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-sm sm:text-base"
                  style={{ background: '#FF3D2E' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Send a Package
                </span>
              </MagneticButton>
              <MagneticButton href="/get-started">
                <span className="inline-flex items-center gap-2.5 text-slate-300 font-semibold px-7 py-4 rounded-xl text-sm sm:text-base transition-all duration-300 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Become a driver
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                </span>
              </MagneticButton>
            </div>

            {/* Trust */}
            <div className="mt-10 flex items-center gap-5 hero-trust">
              <div className="flex -space-x-2.5">
                {['#FF3D2E', '#E6341F', '#00D9F5', '#00FFB3', '#FF6B35'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[11px] font-black"
                    style={{ background: `${c}20`, borderColor: '#0A0B0F', color: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-xs text-slate-500">Trusted by <span className="text-slate-300 font-medium">50,000+</span> Kenyans</p>
              </div>
            </div>
          </div>

          {/* ── Right: phone ── */}
          <div className="flex justify-center lg:justify-end hero-phone">
            <div className="relative">
              <PhoneMockup />

              {/* Floating card: pickup */}
              <div ref={card1}
                className="absolute -right-2 sm:-right-8 top-16 rounded-2xl px-4 py-3 hidden sm:flex items-center gap-3 z-20"
                style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,255,179,0.1)', border: '1px solid rgba(0,255,179,0.2)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">Package picked up</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Just now · Westlands</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-mint pulse-dot ml-1 flex-shrink-0" />
              </div>

              {/* Floating card: earnings */}
              <div ref={card2}
                className="absolute -left-4 sm:-left-12 bottom-32 rounded-2xl px-4 py-3 z-20 hidden sm:block"
                style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>
                <p className="text-[10px] text-slate-500 mb-1">Today&apos;s earnings</p>
                <p className="text-xl font-black" style={{ color: '#FF3D2E' }}>KSh 4,800</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg viewBox="0 0 20 20" fill="#00FFB3" className="w-3 h-3">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] font-medium text-accent-mint">+18% today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ticker ── */}
      <div className="relative z-10 border-t py-3 sm:py-4"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(10,11,15,0.6)', backdropFilter: 'blur(12px)' }}>
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
                    <span className="text-sm font-bold text-white">{item.value}</span>
                    <span className="text-xs text-slate-600">{item.label}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20 ml-2" />
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
      {/* Subtle glow behind phone */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(255,61,46,0.12) 0%, transparent 65%)', filter: 'blur(40px)', transform: 'scale(0.9)' }} />

      {/* Phone shell */}
      <div className="relative w-[260px] sm:w-[280px] h-[540px] sm:h-[590px] rounded-[44px] p-[2px]"
        style={{ background: 'linear-gradient(145deg, #2a2a2a, #0e0e0e)', boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)' }}>
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
            style={{ height: 210, background: 'linear-gradient(145deg, #0c1a28, #081018)' }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 210" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="ph-route" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00FFB3" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF3D2E" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d="M 28 170 C 80 135, 135 155, 182 105 S 242 62, 258 55"
                fill="none" stroke="url(#ph-route)" strokeWidth="2.5" strokeDasharray="6 4" className="route-line" />
              <circle cx="28" cy="170" r="10" fill="rgba(0,255,179,0.12)" className="loc-ping" />
              <circle cx="28" cy="170" r="5.5" fill="#00FFB3" />
              <circle cx="28" cy="170" r="2.5" fill="white" />
              <circle cx="258" cy="55" r="8" fill="rgba(255,61,46,0.18)" className="loc-ping-delay" />
              <circle cx="258" cy="55" r="4.5" fill="#FF3D2E" />
              <circle cx="258" cy="55" r="1.8" fill="white" />
              <circle cx="143" cy="120" r="8" fill="rgba(255,61,46,0.12)" className="loc-ping" />
              <circle cx="143" cy="120" r="5.5" fill="#FF3D2E" />
              <circle cx="143" cy="120" r="2.5" fill="white" />
            </svg>
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}>
              <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#00FFB3' }} />
              <span className="text-[9px] font-bold text-white/90 tracking-widest">LIVE</span>
            </div>
            <div className="absolute bottom-2.5 right-2.5 rounded-lg px-2.5 py-1.5"
              style={{ background: '#FF3D2E' }}>
              <span className="text-[10px] font-black text-white">ETA 4 min</span>
            </div>
          </div>

          {/* Package card */}
          <div className="mx-2.5 mt-2.5 rounded-2xl p-3 flex-shrink-0"
            style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,61,46,0.1)', border: '1px solid rgba(255,61,46,0.2)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Package #2847</p>
                  <p className="text-[9px] text-slate-500">Electronics · Fragile</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black" style={{ color: '#00FFB3' }}>ETA 4 min</p>
                <p className="text-[9px] text-slate-600">0.8 km away</p>
              </div>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="h-full rounded-full" style={{ width: '72%', background: '#FF3D2E' }} />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[8px] text-slate-600">Picked up</span>
              <span className="text-[8px] text-slate-600">On the way</span>
              <span className="text-[8px] font-semibold" style={{ color: '#FF3D2E' }}>Delivery</span>
            </div>
          </div>

          {/* Driver card */}
          <div className="mx-2.5 mt-2 mb-2.5 rounded-2xl px-3 py-2.5 flex items-center justify-between flex-shrink-0"
            style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                style={{ background: '#FF3D2E' }}>BK</div>
              <div>
                <p className="text-[11px] font-semibold text-white">Brian Kamau</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <StarIcon />
                  <span className="text-[9px] text-slate-500">4.98 · 1,240 trips</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5">
              <button className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,61,46,0.1)', border: '1px solid rgba(255,61,46,0.2)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,255,179,0.08)', border: '1px solid rgba(0,255,179,0.18)' }}>
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
