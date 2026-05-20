'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 0,
    label: 'Order placed',
    detail: 'Package ready at Westlands, Nairobi',
    color: '#FF3D2E',
    riderPos: { cx: 85, cy: 315 },
  },
  {
    id: 1,
    label: 'Rider dispatched',
    detail: 'Brian is 1.2 km away, heading to you',
    color: '#0EA5E9',
    riderPos: { cx: 185, cy: 240 },
  },
  {
    id: 2,
    label: 'In transit',
    detail: 'On the way to recipient — ETA 4 min',
    color: '#FF6B35',
    riderPos: { cx: 290, cy: 175 },
  },
  {
    id: 3,
    label: 'Delivered',
    detail: 'Photo proof sent. Package confirmed.',
    color: '#00D49A',
    riderPos: { cx: 415, cy: 105 },
  },
]

export default function LiveExperience() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % steps.length), 2600)
    return () => clearInterval(id)
  }, [])

  const step = steps[active]

  return (
    <section className="py-20 md:py-32 overflow-hidden" id="features" style={{ background: '#F5F6F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-18"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FF3D2E' }}>
            Live tracking
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: '#0F1117' }}>
              Watch it<br />happen.
            </h2>
            <p className="text-base leading-relaxed max-w-sm md:text-right" style={{ color: '#6B7280' }}>
              From the tap of Send to the moment it arrives — every step, every turn, in real time.
            </p>
          </div>
        </motion.div>

        {/* 50/50 split */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Map card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl overflow-hidden relative"
              style={{ height: 380, background: 'linear-gradient(145deg, #0c1624, #081018)', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>

              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
                <line x1="0" y1="190" x2="500" y2="190" stroke="rgba(255,255,255,0.04)" strokeWidth="18" />
                <line x1="250" y1="0" x2="250" y2="380" stroke="rgba(255,255,255,0.04)" strokeWidth="14" />
                <line x1="0" y1="310" x2="500" y2="310" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                <line x1="140" y1="0" x2="140" y2="380" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />

                {/* Route glow */}
                <path d="M 85 345 C 140 315, 190 275, 250 230 S 360 155, 415 115"
                  fill="none" stroke="rgba(255,61,46,0.25)" strokeWidth="14" strokeLinecap="round" />
                {/* Route dash */}
                <path d="M 85 345 C 140 315, 190 275, 250 230 S 360 155, 415 115"
                  fill="none" stroke="#FF3D2E" strokeWidth="2" strokeDasharray="7 5" strokeLinecap="round" className="route-line" />

                {/* Origin dot */}
                <circle cx="85" cy="345" r="12" fill="rgba(0,212,154,0.12)" className="loc-ping" />
                <circle cx="85" cy="345" r="6" fill="#00D49A" />
                <circle cx="85" cy="345" r="2.5" fill="white" />

                {/* Destination dot */}
                <circle cx="415" cy="115" r="10" fill="rgba(255,61,46,0.12)" className="loc-ping-delay" />
                <circle cx="415" cy="115" r="5.5" fill="#FF3D2E" />
                <circle cx="415" cy="115" r="2" fill="white" />

                {/* Rider */}
                <motion.g
                  key={active}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="18" fill={`${step.color}10`} className="loc-ping" />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="10" fill={`${step.color}22`} />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="6" fill={step.color} />
                  <circle cx={step.riderPos.cx} cy={step.riderPos.cy} r="2.5" fill="white" />
                </motion.g>
              </svg>

              {/* LIVE badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-lg px-3 py-2"
                style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#00D49A' }} />
                <span className="text-[10px] font-bold text-white/90 tracking-widest">LIVE</span>
              </div>

              {/* Status card */}
              <motion.div
                key={`card-${active}`}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 flex items-center justify-between"
                style={{ background: 'rgba(8,10,18,0.90)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div>
                  <p className="text-[10px] text-slate-500 mb-0.5 uppercase tracking-wide">{step.label}</p>
                  <p className="text-sm font-semibold text-white">{step.detail}</p>
                </div>
                <div className="w-2 h-2 rounded-full flex-shrink-0 ml-4" style={{ background: step.color }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Steps list */}
          <div className="space-y-2">
            {steps.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="w-full text-left rounded-xl p-5 transition-all duration-300"
                style={{
                  background: active === i ? '#FFFFFF' : 'transparent',
                  border: `1px solid ${active === i ? '#E5E8ED' : 'transparent'}`,
                  boxShadow: active === i ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
                }}
                onClick={() => setActive(i)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 transition-all duration-300"
                    style={{
                      background: active === i ? s.color : '#E5E8ED',
                      color: active === i ? '#fff' : '#9CA3AF',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm" style={{ color: active === i ? '#0F1117' : '#6B7280' }}>{s.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: active === i ? '#6B7280' : '#9CA3AF' }}>{s.detail}</p>
                  </div>
                  {active === i && (
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: s.color }} />
                  )}
                </div>
              </motion.button>
            ))}

            {/* Progress dots */}
            <div className="flex items-center gap-2 pt-3 pl-1">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 20 : 6,
                    height: 6,
                    background: active === i ? steps[active].color : '#D1D5DB',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '< 4 min', label: 'Average pickup', color: '#FF3D2E' },
            { value: '99.2%',   label: 'On-time rate',   color: '#0EA5E9' },
            { value: '24/7',    label: 'Always open',    color: '#00D49A' },
            { value: '3,000+',  label: 'Verified riders',color: '#FF6B35' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-xl p-6 text-center bg-white"
              style={{ border: '1px solid #E5E8ED' }}
            >
              <p className="text-2xl sm:text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
