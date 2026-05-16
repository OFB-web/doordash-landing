'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import MagneticButton from '@/components/ui/MagneticButton'

function IconBolt() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
}
function IconPlay() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8 5v14l11-7z" /></svg>
}
function IconStar() {
  return <svg viewBox="0 0 20 20" fill="#FBC02D" className="w-3.5 h-3.5"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
}

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert: () => void } | undefined
    async function init() {
      try {
        const { gsap } = await import('gsap')
        ctx = gsap.context(() => {
          gsap.to(orb1.current, { y: -30, x: 15, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut' })
          gsap.to(orb2.current, { y: 25, x: -20, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 })
        })
      } catch (_) { /* non-critical */ }
    }
    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#0A0B0F' }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=80"
          alt="Nairobi city at night"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,11,15,0.7) 0%, rgba(10,11,15,0.85) 50%, #0A0B0F 100%)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Orbs */}
      <div ref={orb1} className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,61,46,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div ref={orb2} className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,217,245,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      {/* Route lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
          <defs>
            <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3D2E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M 100 200 C 300 150, 500 300, 700 200 S 900 100, 1200 250" fill="none" stroke="url(#rg1)" strokeWidth="1.5" strokeDasharray="8 8" className="route-line" />
          <path d="M 0 500 C 300 420, 600 580, 900 480 S 1100 350, 1400 520" fill="none" stroke="url(#rg1)" strokeWidth="1" strokeDasharray="5 10" className="route-line" style={{ animationDelay: '-2s' }} />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left — rendered visible immediately, CSS animates in */}
          <div className="hero-content">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 glass border border-primary/25 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span className="text-xs font-semibold text-slate-200 tracking-wide">Now live in Nairobi, Mombasa &amp; Kisumu</span>
              </span>
            </div>

            <h1 className="text-[42px] sm:text-6xl lg:text-[82px] font-black leading-[1.05] tracking-tight">
              <span className="block text-white">Deliver</span>
              <span className="block gradient-text">Anything.</span>
              <span className="block text-white">Instantly.</span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-300 max-w-md leading-relaxed">
              Kenya&apos;s fastest on-demand delivery platform. Send packages across the city in minutes, tracked end to end and guaranteed.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <MagneticButton href="/get-started">
                <span className="inline-flex items-center gap-2.5 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 text-sm sm:text-base"
                  style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>
                  <IconBolt />
                  Send a Package
                </span>
              </MagneticButton>
              <MagneticButton>
                <span className="inline-flex items-center gap-2.5 glass border border-white/15 hover:border-primary/40 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base">
                  <span className="text-accent-cyan"><IconPlay /></span>
                  Watch it work
                </span>
              </MagneticButton>
            </div>

            <div className="mt-10 sm:mt-12 flex items-center gap-5">
              <div className="flex -space-x-3">
                {['#FF3D2E', '#E6341F', '#00D9F5', '#00FFB3', '#FF6B35'].map((c, i) => (
                  <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{ background: `${c}25`, borderColor: '#0A0B0F', color: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                </div>
                <p className="text-xs text-slate-400">Trusted by <span className="text-white font-semibold">50,000+</span> Kenyans</p>
              </div>
            </div>
          </div>

          {/* Right: Phone */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Stats ticker bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 glass-heavy py-3 sm:py-4 z-10">
        <div className="ticker-container">
          <div className="ticker-track">
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-10 sm:gap-12 px-6">
                {[
                  { label: 'Deliveries completed', value: '2.4M+' },
                  { label: 'Cities covered', value: '8' },
                  { label: 'Avg delivery time', value: '4 min' },
                  { label: 'Verified riders', value: '3,000+' },
                  { label: 'Customer rating', value: '4.9/5' },
                  { label: 'Success rate', value: '99.2%' },
                  { label: 'Support', value: '24/7' },
                  { label: 'Package insurance', value: 'Up to KSh 50k' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                    <span className="text-base sm:text-lg font-black text-white">{item.value}</span>
                    <span className="text-xs sm:text-sm text-slate-400">{item.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 ml-2 sm:ml-3" />
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
    <div className="relative">
      <div className="absolute inset-0 blur-3xl opacity-50 rounded-[50px]"
        style={{ background: 'radial-gradient(circle, #FF3D2E 0%, #FF6B35 40%, transparent 75%)', transform: 'scale(0.85)' }} />

      <div className="relative w-[260px] sm:w-[280px] h-[530px] sm:h-[580px] rounded-[44px] bg-gradient-to-b from-slate-700 to-slate-900 p-[2px] shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
        <div className="w-full h-full rounded-[42px] bg-[#111318] overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2 relative">
            <span className="text-[11px] font-semibold text-white">9:41</span>
            <div className="w-24 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 items-end">
                {[3, 4, 5, 6].map(h => <div key={h} className="w-0.5 bg-white rounded-sm" style={{ height: h }} />)}
              </div>
              <div className="w-5 h-2.5 rounded-sm border border-white/40 p-[1px] ml-1">
                <div className="w-3/4 h-full bg-accent-mint rounded-sm" />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative mx-3 rounded-2xl overflow-hidden flex-1 max-h-[200px] sm:max-h-[220px]"
            style={{ background: 'linear-gradient(135deg, #0d1b2a, #0a1220)' }}>
            <Image
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=600&q=60"
              alt="Nairobi city map"
              fill
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 200" preserveAspectRatio="none">
              <path d="M 30 160 C 80 120, 140 140, 180 80 S 230 40, 240 50" fill="none" stroke="#FF3D2E" strokeWidth="2.5" strokeDasharray="6 4" />
              <circle cx="30" cy="160" r="8" fill="rgba(0,255,179,0.3)" />
              <circle cx="30" cy="160" r="4" fill="#00FFB3" />
              <circle cx="240" cy="50" r="6" fill="#FF3D2E" />
              <circle cx="240" cy="50" r="3" fill="white" />
              <circle cx="140" cy="115" r="8" fill="rgba(255,61,46,0.3)" />
              <circle cx="140" cy="115" r="5" fill="#FF3D2E" />
              <circle cx="140" cy="115" r="2.5" fill="white" />
            </svg>
            <div className="absolute top-3 left-3 glass rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
              <span className="text-[9px] font-semibold text-white/90">LIVE TRACKING</span>
            </div>
          </div>

          {/* Package card */}
          <div className="mx-3 mt-3 glass rounded-2xl p-3.5 border border-white/8">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-4 h-4">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white">Package #2847</p>
                  <p className="text-[9px] text-slate-400">Electronics · Fragile</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-accent-mint">ETA 4 min</p>
                <p className="text-[9px] text-slate-500">0.8 km away</p>
              </div>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full rounded-full w-[72%]" style={{ background: 'linear-gradient(90deg, #FF3D2E, #FF6B35)' }} />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[8px] text-slate-500">Picked up</span>
              <span className="text-[8px] text-slate-500">On the way</span>
              <span className="text-[8px] text-primary font-semibold">Delivery</span>
            </div>
          </div>

          {/* Driver */}
          <div className="mx-3 mt-2 mb-3 flex items-center justify-between glass rounded-2xl px-4 py-3 border border-white/8">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white"
                style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>BK</div>
              <div>
                <p className="text-[11px] font-semibold text-white">Brian Kamau</p>
                <div className="flex items-center gap-1">
                  <IconStar />
                  <span className="text-[9px] text-slate-400">4.98 · 1,240 trips</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-3.5 h-3.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-accent-mint/10 border border-accent-mint/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-3.5 h-3.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges — tablet and up only */}
      <div className="hidden sm:flex absolute -right-4 top-20 glass border border-accent-mint/25 rounded-2xl px-4 py-3 items-center gap-3 animate-float">
        <div className="w-8 h-8 rounded-xl bg-accent-mint/15 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-4 h-4">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">Package picked up!</p>
          <p className="text-[10px] text-slate-400">Just now · Westlands</p>
        </div>
      </div>

      <div className="hidden sm:block absolute -left-8 bottom-24 glass border border-primary/25 rounded-2xl px-4 py-3 animate-float-delayed">
        <p className="text-[9px] text-slate-400 mb-1">Today&apos;s Earnings</p>
        <p className="text-lg font-black gradient-text">KSh 4,800</p>
        <div className="flex items-center gap-1 mt-1">
          <svg viewBox="0 0 20 20" fill="#00FFB3" className="w-3 h-3"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
          <span className="text-[9px] text-accent-mint font-semibold">+18% vs yesterday</span>
        </div>
      </div>
    </div>
  )
}
