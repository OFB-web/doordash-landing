'use client'

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
  return (
    <section style={{ background: '#FFFFFF' }}>

      {/* ── Main row: left text + right image ── */}
      {/*
       * Flexbox row with min-height: 100svh.
       * align-items: stretch (default) makes BOTH halves fill the row height.
       * The right half therefore has a concrete height → next/image fill works.
       */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: '100svh' }}>

        {/* Left: text, centered vertically */}
        <div
          className="flex flex-col justify-center px-6 sm:px-10 xl:px-20 pt-28 pb-16 lg:py-20"
          style={{ flex: '1 1 50%' }}
        >
          <p className="hero-badge text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: '#FF3D2E' }}>
            Now live in Nairobi · Mombasa · Kisumu · 5 more cities
          </p>

          <h1 className="font-black tracking-tight leading-[0.97]" style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
            <span className="overflow-hidden block">
              <span className="text-reveal text-reveal-delay-1 block" style={{ color: '#0F1117' }}>Deliver</span>
            </span>
            <span className="overflow-hidden block">
              <span className="shimmer-reveal block">Anything.</span>
            </span>
            <span className="overflow-hidden block">
              <span className="text-reveal text-reveal-delay-3 block" style={{ color: '#0F1117' }}>In Minutes.</span>
            </span>
          </h1>

          <p className="mt-8 text-lg max-w-[400px] leading-relaxed hero-sub" style={{ color: '#4B5563' }}>
            Kenya&apos;s fastest on-demand delivery. Send packages across 8 cities, tracked end to end, guaranteed on time.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 hero-cta">
            <MagneticButton href="/get-started" strength={0.35}>
              <span
                className="inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-opacity duration-200 hover:opacity-90"
                style={{ background: '#FF3D2E' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Send a Package
              </span>
            </MagneticButton>
            <MagneticButton href="/get-started">
              <span className="btn-secondary text-sm sm:text-base">
                Become a driver
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </MagneticButton>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex items-center gap-4 hero-trust">
            <div className="flex -space-x-2">
              {['#FF3D2E', '#E6341F', '#0EA5E9', '#00D49A', '#FF6B35'].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black"
                  style={{ background: `${c}15`, color: c }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-xs" style={{ color: '#9CA3AF' }}>
                <span className="font-semibold" style={{ color: '#0F1117' }}>50,000+</span> Kenyans trust us
              </span>
            </div>
          </div>

          {/* Mobile-only stats */}
          <div className="lg:hidden grid grid-cols-2 mt-12 pt-10" style={{ borderTop: '1px solid #E5E8ED' }}>
            {[
              { value: '2.4M+', label: 'Deliveries completed' },
              { value: '4 min', label: 'Average delivery time' },
              { value: '99.2%', label: 'On-time success rate' },
              { value: '3,000+', label: 'Verified riders' },
            ].map((s, i) => (
              <div key={i} className="py-5 px-2 flex flex-col gap-1"
                style={{ borderRight: i % 2 === 0 ? '1px solid #E5E8ED' : 'none' }}>
                <span className="text-2xl font-black" style={{ color: '#0F1117' }}>{s.value}</span>
                <span className="text-xs" style={{ color: '#9CA3AF' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image panel — flex stretches it to match the row's min-height */}
        <div
          className="hidden lg:block relative overflow-hidden flex-shrink-0"
          style={{ width: '50%' }}
        >
          <Image
            src="/hero-rider.png"
            alt="DoorDash delivery rider on a scooter"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Floating delivery status card */}
          <div
            className="absolute bottom-10 left-6 right-6 rounded-2xl px-5 py-4 flex items-center gap-4 z-10"
            style={{
              background: 'rgba(255,255,255,0.94)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              border: '1px solid #E5E8ED',
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#FF3D2E' }}>
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate" style={{ color: '#0F1117' }}>Package #2847 — On the way</p>
              <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>Brian K. · 4 min away · KSh 180</p>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0 rounded-lg px-3 py-1.5" style={{ background: '#FF3D2E' }}>
              <div className="w-1.5 h-1.5 rounded-full pulse-dot bg-white" />
              <span className="text-xs font-black text-white">LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Desktop stats bar ── */}
      <div className="hidden lg:grid grid-cols-4 border-t" style={{ borderColor: '#E5E8ED' }}>
        {[
          { value: '2.4M+', label: 'Deliveries completed' },
          { value: '4 min', label: 'Average delivery time' },
          { value: '99.2%', label: 'On-time success rate' },
          { value: '3,000+', label: 'Verified riders' },
        ].map((stat, i) => (
          <div key={i} className="py-6 px-8 flex flex-col gap-1"
            style={{ borderRight: i < 3 ? '1px solid #E5E8ED' : 'none' }}>
            <span className="text-2xl sm:text-3xl font-black" style={{ color: '#0F1117' }}>{stat.value}</span>
            <span className="text-xs" style={{ color: '#9CA3AF' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
