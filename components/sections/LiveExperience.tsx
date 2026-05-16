'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    label: 'Sender',
    detail: 'Package ready at Westlands, Nairobi',
    color: '#FF3D2E',
    status: 'complete',
  },
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Rider dispatched',
    detail: 'Brian is 1.2km away',
    color: '#00D9F5',
    status: 'active',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'In transit',
    detail: 'On the way, ETA 4 min',
    color: '#FF6B35',
    status: 'pending',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    label: 'Delivered',
    detail: 'Door delivery confirmed',
    color: '#00FFB3',
    status: 'pending',
  },
]

const inView = { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, amount: 0.3 } }

export default function LiveExperience() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="relative py-20 md:py-32 bg-bg-deep overflow-hidden" id="features">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,217,245,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div {...inView} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass border border-accent-cyan/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-semibold text-accent-cyan tracking-widest uppercase">Live experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Watch it <span className="gradient-text">happen</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            From the moment you tap send to the second it arrives, every step is tracked and visible in real time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Map simulation */}
          <motion.div {...inView} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
            <div className="glass rounded-3xl overflow-hidden border border-white/5 h-[300px] sm:h-[380px] md:h-[420px] relative">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0B1023 0%, #0d1b3e 100%)' }}>
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.3) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 420">
                <path d="M 50 200 H 450" stroke="rgba(255,255,255,0.06)" strokeWidth="20" />
                <path d="M 250 50 V 380" stroke="rgba(255,255,255,0.06)" strokeWidth="16" />
                <path d="M 80 320 C 150 300, 200 250, 250 200 S 350 120, 420 100" fill="none" stroke="#FF3D2E" strokeWidth="3" strokeDasharray="8 5" strokeLinecap="round" />
                <path d="M 80 320 C 150 300, 200 250, 250 200 S 350 120, 420 100" fill="none" stroke="rgba(255,61,46,0.15)" strokeWidth="12" strokeLinecap="round" />
                <circle cx="80" cy="320" r="10" fill="#00FFB3" opacity="0.2" />
                <circle cx="80" cy="320" r="6" fill="#00FFB3" />
                <circle cx="80" cy="320" r="3" fill="white" />
                <circle cx="420" cy="100" r="10" fill="rgba(255,61,46,0.3)" />
                <circle cx="420" cy="100" r="6" fill="#FF3D2E" />
                <circle cx="420" cy="100" r="2.5" fill="white" />
                <circle cx="240" cy="208" r="16" fill="rgba(0,217,245,0.15)" />
                <circle cx="240" cy="208" r="10" fill="rgba(0,217,245,0.3)" />
                <circle cx="240" cy="208" r="6" fill="#00D9F5" />
                <circle cx="240" cy="208" r="2.5" fill="white" />
              </svg>
              <div className="absolute top-4 left-4 glass-heavy rounded-xl px-3 py-2 flex items-center gap-2 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span className="text-xs font-semibold text-white">LIVE</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-heavy rounded-2xl p-4 border border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Package in transit</p>
                    <p className="font-bold text-white mt-0.5">Electronics · #PKG-2847</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-accent-mint">4 min</p>
                    <p className="text-xs text-slate-400">ETA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative glass rounded-2xl p-5 border transition-all duration-500 cursor-pointer"
                style={activeStep === i ? { borderColor: `${step.color}40`, boxShadow: `0 0 30px ${step.color}15` } : { borderColor: 'rgba(255,255,255,0.05)' }}
                onClick={() => setActiveStep(i)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: activeStep === i ? `${step.color}20` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${activeStep === i ? `${step.color}40` : 'rgba(255,255,255,0.06)'}`,
                      color: activeStep === i ? step.color : '#64748b',
                    }}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{step.label}</p>
                      {activeStep === i && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${step.color}20`, color: step.color }}>Active</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">{step.detail}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-11 w-0.5 h-4 transition-all duration-300"
                    style={{ background: i < activeStep ? step.color : 'rgba(255,255,255,0.08)' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { value: '< 4 min', label: 'Average pickup time', color: '#FF3D2E' },
            { value: '99.2%', label: 'Delivery success rate', color: '#00D9F5' },
            { value: '24/7', label: 'Always available', color: '#00FFB3' },
            { value: '3,000+', label: 'Verified riders', color: '#FF6B35' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 border border-white/5 text-center"
            >
              <p className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
