'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      </svg>
    ),
    label: 'Order placed',
    detail: 'Package ready at Westlands, Nairobi',
    color: '#FF3D2E',
    riderPos: { cx: 85, cy: 315 },
  },
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Rider dispatched',
    detail: 'Brian is 1.2 km away, heading to you',
    color: '#00D9F5',
    riderPos: { cx: 185, cy: 240 },
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'In transit',
    detail: 'On the way to recipient, ETA 4 min',
    color: '#FF6B35',
    riderPos: { cx: 290, cy: 175 },
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: 'Delivered',
    detail: 'Photo proof sent. Package confirmed.',
    color: '#00FFB3',
    riderPos: { cx: 415, cy: 105 },
  },
]

const stats = [
  { value: '< 4 min', label: 'Average pickup', color: '#FF3D2E' },
  { value: '99.2%', label: 'On-time rate', color: '#00D9F5' },
  { value: '24 / 7', label: 'Always available', color: '#00FFB3' },
  { value: '3,000+', label: 'Verified riders', color: '#FF6B35' },
]

export default function LiveExperience() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % steps.length), 2600)
    return () => clearInterval(id)
  }, [])

  const step = steps[active]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="features"
      style={{ background: 'linear-gradient(180deg, #111318 0%, #0A0B0F 50%, #111318 100%)' }}>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,217,245,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 glass border border-accent-cyan/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-semibold text-accent-cyan tracking-widest uppercase">Live experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5">
            Watch it <span className="gradient-text">happen</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            From the moment you tap send to the second it arrives, every step is tracked in real time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-3xl overflow-hidden border border-white/6 relative"
              style={{ height: 340, background: 'linear-gradient(145deg, #0B1123, #0d1a35)' }}>

              {/* Grid */}
              <div className="absolute inset-0 opacity-15"
                style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

              {/* City road lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 340" preserveAspectRatio="xMidYMid slice">
                {/* Road grid */}
                <line x1="0" y1="170" x2="500" y2="170" stroke="rgba(255,255,255,0.04)" strokeWidth="18" />
                <line x1="250" y1="0" x2="250" y2="340" stroke="rgba(255,255,255,0.04)" strokeWidth="14" />
                <line x1="0" y1="280" x2="500" y2="280" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                <line x1="140" y1="0" x2="140" y2="340" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />

                {/* Route path — glow shadow */}
                <path d="M 85 315 C 140 290, 190 255, 250 210 S 360 140, 415 105"
                  fill="none" stroke="rgba(255,61,46,0.12)" strokeWidth="14" strokeLinecap="round" />
                {/* Route path */}
                <path d="M 85 315 C 140 290, 190 255, 250 210 S 360 140, 415 105"
                  fill="none" stroke="#FF3D2E" strokeWidth="2.5" strokeDasharray="7 5" strokeLinecap="round" className="route-line" />

                {/* Origin */}
                <circle cx="85" cy="315" r="14" fill="rgba(0,255,179,0.12)" className="loc-ping" />
                <circle cx="85" cy="315" r="7" fill="#00FFB3" />
                <circle cx="85" cy="315" r="3" fill="white" />

                {/* Destination */}
                <circle cx="415" cy="105" r="12" fill="rgba(255,61,46,0.15)" className="loc-ping-delay" />
                <circle cx="415" cy="105" r="6" fill="#FF3D2E" />
                <circle cx="415" cy="105" r="2.5" fill="white" />

                {/* Animated rider dot */}
                <motion.g
                  key={active}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="18" fill={`${step.color}18`} className="loc-ping" />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="10" fill={`${step.color}30`} />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="6" fill={step.color} />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="2.5" fill="white" />
                </motion.g>
              </svg>

              {/* Top badges */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-xl px-3 py-2"
                style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
                <span className="text-[10px] font-bold text-white/90 tracking-widest">LIVE TRACKING</span>
              </div>

              {/* Bottom status card */}
              <motion.div
                key={`card-${active}`}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3.5 flex items-center justify-between"
                style={{ background: 'rgba(13,15,20,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div>
                  <p className="text-[10px] text-slate-400 mb-0.5">{step.label}</p>
                  <p className="text-sm font-bold text-white">{step.detail}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}30`, color: step.color }}>
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl p-4 border cursor-pointer transition-all duration-400"
                style={{
                  background: active === i ? `${s.color}08` : 'rgba(255,255,255,0.025)',
                  borderColor: active === i ? `${s.color}40` : 'rgba(255,255,255,0.05)',
                  boxShadow: active === i ? `0 0 24px ${s.color}12` : 'none',
                }}
                onClick={() => setActive(i)}
              >
                {/* Progress line connector */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-[27px] w-0.5 h-3 rounded-full z-10"
                    style={{ background: i < active ? s.color : 'rgba(255,255,255,0.08)', transition: 'background 0.5s' }} />
                )}

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: active === i ? `${s.color}20` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${active === i ? `${s.color}45` : 'rgba(255,255,255,0.06)'}`,
                      color: active === i ? s.color : '#64748b',
                    }}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-white text-sm">{s.label}</p>
                      {active === i && (
                        <motion.span
                          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: `${s.color}20`, color: s.color }}>
                          Active
                        </motion.span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">{s.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Auto-progress dots */}
            <div className="flex items-center gap-2 pt-2 pl-1">
              {steps.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 24 : 6,
                    height: 6,
                    background: active === i ? steps[active].color : 'rgba(255,255,255,0.15)',
                  }} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 sm:mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl p-6 border border-white/5 text-center"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              <p className="text-3xl font-black mb-1.5" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
