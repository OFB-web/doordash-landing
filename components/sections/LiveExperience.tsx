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
      style={{ background: '#0A0B0F' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FF3D2E' }}>
            Live experience
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 text-white">
            Watch it <span style={{ color: '#FF3D2E' }}>happen</span>
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
            From the moment you tap send to the second it arrives, every step is tracked in real time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl overflow-hidden relative"
              style={{ height: 340, background: 'linear-gradient(145deg, #0c1624, #081018)', border: '1px solid rgba(255,255,255,0.07)' }}>

              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 340" preserveAspectRatio="xMidYMid slice">
                {/* Road grid */}
                <line x1="0" y1="170" x2="500" y2="170" stroke="rgba(255,255,255,0.04)" strokeWidth="18" />
                <line x1="250" y1="0" x2="250" y2="340" stroke="rgba(255,255,255,0.04)" strokeWidth="14" />
                <line x1="0" y1="280" x2="500" y2="280" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                <line x1="140" y1="0" x2="140" y2="340" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />

                {/* Route */}
                <path d="M 85 315 C 140 290, 190 255, 250 210 S 360 140, 415 105"
                  fill="none" stroke="rgba(255,61,46,0.35)" strokeWidth="12" strokeLinecap="round" />
                <path d="M 85 315 C 140 290, 190 255, 250 210 S 360 140, 415 105"
                  fill="none" stroke="#FF3D2E" strokeWidth="2" strokeDasharray="7 5" strokeLinecap="round" className="route-line" />

                {/* Origin */}
                <circle cx="85" cy="315" r="12" fill="rgba(0,255,179,0.1)" className="loc-ping" />
                <circle cx="85" cy="315" r="6" fill="#00FFB3" />
                <circle cx="85" cy="315" r="2.5" fill="white" />

                {/* Destination */}
                <circle cx="415" cy="105" r="10" fill="rgba(255,61,46,0.12)" className="loc-ping-delay" />
                <circle cx="415" cy="105" r="5.5" fill="#FF3D2E" />
                <circle cx="415" cy="105" r="2" fill="white" />

                {/* Rider */}
                <motion.g
                  key={active}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="16" fill={`${step.color}12`} className="loc-ping" />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="9" fill={`${step.color}25`} />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="5.5" fill={step.color} />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="2" fill="white" />
                </motion.g>
              </svg>

              {/* Live badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-lg px-3 py-2"
                style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#00FFB3' }} />
                <span className="text-[10px] font-bold text-white/90 tracking-widest">LIVE TRACKING</span>
              </div>

              {/* Status card */}
              <motion.div
                key={`card-${active}`}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3.5 flex items-center justify-between"
                style={{ background: 'rgba(10,11,15,0.88)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div>
                  <p className="text-[10px] text-slate-500 mb-0.5">{step.label}</p>
                  <p className="text-sm font-semibold text-white">{step.detail}</p>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25`, color: step.color }}>
                  {step.icon}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-xl p-4 cursor-pointer transition-all duration-300"
                style={{
                  background: active === i ? '#1A1D26' : '#16181F',
                  border: `1px solid ${active === i ? `${s.color}30` : 'rgba(255,255,255,0.07)'}`,
                }}
                onClick={() => setActive(i)}
              >
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-[27px] w-0.5 h-3 rounded-full z-10"
                    style={{ background: i < active ? s.color : 'rgba(255,255,255,0.07)', transition: 'background 0.5s' }} />
                )}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: active === i ? `${s.color}15` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${active === i ? `${s.color}30` : 'rgba(255,255,255,0.06)'}`,
                      color: active === i ? s.color : '#64748b',
                    }}>
                    {s.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-white text-sm">{s.label}</p>
                      {active === i && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: `${s.color}15`, color: s.color }}>
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">{s.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-2 pt-2 pl-1">
              {steps.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 24 : 6,
                    height: 6,
                    background: active === i ? steps[active].color : 'rgba(255,255,255,0.12)',
                  }} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-xl p-6 text-center"
              style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-2xl sm:text-3xl font-black mb-1.5" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
