'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>

      {/* Background photo */}
      <Image
        src="/hero-rider.png"
        alt="Zipp rider on a delivery"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay — heavier on the left so text is readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, rgba(4,4,10,0.90) 0%, rgba(4,4,10,0.72) 52%, rgba(4,4,10,0.28) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-20 w-full py-32 md:py-40">
          <div className="max-w-xl xl:max-w-2xl">

            {/* City line */}
            <p className="fade-up-1 text-sm font-medium mb-7" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
              Nairobi · Mombasa · Kisumu — and growing
            </p>

            {/* Headline */}
            <h1
              className="fade-up-2 font-black text-white leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(48px, 7.5vw, 92px)' }}
            >
              Deliver anything,<br />
              <span style={{ color: '#FF3D2E' }}>right now.</span>
            </h1>

            {/* Subheading — human, direct, no hype */}
            <p
              className="fade-up-3 mt-7 text-lg sm:text-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.70)', maxWidth: '480px' }}
            >
              Book a pickup in seconds. A verified rider arrives at your door, and you watch every turn of the route until it&apos;s delivered — or your money back.
            </p>

            {/* CTAs */}
            <div className="fade-up-4 mt-10 flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2.5 font-bold text-white px-8 py-4 rounded-xl text-base transition-opacity hover:opacity-85"
                style={{ background: '#FF3D2E' }}
              >
                Send a package
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/drivers"
                className="inline-flex items-center gap-2.5 font-semibold text-white px-8 py-4 rounded-xl text-base transition-colors border"
                style={{ borderColor: 'rgba(255,255,255,0.28)', background: 'transparent' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)')}
              >
                Become a rider
              </Link>
            </div>

            {/* Social proof — plain text, no gimmicks */}
            <p className="fade-up-5 mt-10 text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Trusted by <span style={{ color: 'rgba(255,255,255,0.75)' }}>50,000+ people</span> across Kenya &nbsp;·&nbsp; 4.9 ★ on the App Store
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 grid grid-cols-2 md:grid-cols-4"
        style={{ background: 'rgba(4,4,10,0.75)', backdropFilter: 'blur(14px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {[
          { value: '< 4 min', label: 'Average delivery' },
          { value: '99.2%',   label: 'On-time rate' },
          { value: '3,000+',  label: 'Verified riders' },
          { value: '2.4M+',   label: 'Deliveries done' },
        ].map((stat, i) => (
          <div
            key={i}
            className="py-5 px-6 sm:px-8"
            style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
          >
            <p className="text-xl sm:text-2xl font-black text-white">{stat.value}</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.40)' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
