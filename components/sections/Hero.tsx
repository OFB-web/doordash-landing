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

const stats = [
  { value: '2.4M+',  label: 'Deliveries completed' },
  { value: '4 min',  label: 'Average delivery time' },
  { value: '99.2%',  label: 'On-time rate' },
  { value: '3,000+', label: 'Verified riders' },
]

const pills = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
    text: 'Rider matched in under 90 seconds',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    text: 'Live GPS tracking every 30 seconds',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    text: 'Every package insured to KSh 500,000',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Full-bleed background image ── */}
      <Image
        src="/hero-rider.png"
        alt="DoorDash delivery rider"
        fill
        className="object-cover object-center"
        priority
      />

      {/* ── Gradient overlay — heavier on left so text pops ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(5,5,12,0.88) 0%, rgba(5,5,12,0.70) 50%, rgba(5,5,12,0.35) 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-20 w-full py-28 md:py-32">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Location badge */}
            <p className="hero-badge text-xs font-semibold tracking-widest uppercase mb-8" style={{ color: '#FF3D2E' }}>
              Now live in Nairobi · Mombasa · Kisumu · 5 more cities
            </p>

            {/* Headline */}
            <h1 className="font-black tracking-tight leading-[0.95] text-white" style={{ fontSize: 'clamp(52px, 8vw, 100px)' }}>
              <span className="overflow-hidden block">
                <span className="text-reveal text-reveal-delay-1 block">Deliver</span>
              </span>
              <span className="overflow-hidden block">
                <span className="shimmer-reveal block">Anything.</span>
              </span>
              <span className="overflow-hidden block">
                <span className="text-reveal text-reveal-delay-3 block">In Minutes.</span>
              </span>
            </h1>

            {/* Strong intro — viewers get the full picture without scrolling */}
            <p className="mt-7 text-lg sm:text-xl leading-relaxed hero-sub" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px' }}>
              Kenya&apos;s #1 on-demand delivery platform. Book a pickup in 30 seconds, get matched to a verified rider instantly, and watch your package move live on the map — tracked end to end, guaranteed on time, every single order.
            </p>

            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap gap-2.5 hero-cta">
              {pills.map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  <span style={{ color: '#FF3D2E' }}>{pill.icon}</span>
                  {pill.text}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
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
                <span className="inline-flex items-center gap-2.5 font-semibold px-8 py-4 rounded-xl text-sm sm:text-base transition-all duration-200 border-[1.5px] text-white border-white/30 hover:border-white/70">
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
                    className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-[10px] font-black text-white"
                    style={{ background: `${c}40` }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <span className="font-semibold text-white">50,000+</span> Kenyans trust us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4"
        style={{ background: 'rgba(5,5,12,0.70)', backdropFilter: 'blur(16px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="py-5 px-6 sm:px-8 flex flex-col gap-1"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <span className="text-xl sm:text-2xl font-black text-white">{stat.value}</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
