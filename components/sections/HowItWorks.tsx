'use client'

import { motion } from 'framer-motion'
import FlipCard from '@/components/ui/FlipCard'

const steps = [
  {
    num: '01',
    title: 'Enter details',
    frontDesc: 'Pickup address, drop-off, package size.',
    backTitle: 'Takes 30 seconds',
    backDesc: 'Add pickup and drop-off addresses, package size, weight, and any special handling notes. Our smart form auto-fills addresses from your history.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    color: '#FF3D2E',
    backStat: '30 sec', backStatLabel: 'avg to complete',
  },
  {
    num: '02',
    title: 'Get matched',
    frontDesc: 'Nearest verified rider dispatched instantly.',
    backTitle: 'Instant matching',
    backDesc: 'Our algorithm scans all nearby verified riders and dispatches the closest one within seconds. No waiting, no uncertainty. Real-time confirmation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    color: '#00D9F5',
    backStat: '< 90s', backStatLabel: 'match time',
  },
  {
    num: '03',
    title: 'Track live',
    frontDesc: 'GPS precision. Live ETA. Full visibility.',
    backTitle: 'Full transparency',
    backDesc: 'Watch your rider move on the live map. Get SMS and in-app notifications at every stage. ETA updates every 30 seconds with traffic-aware routing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#FF6B35',
    backStat: '30s', backStatLabel: 'update interval',
  },
  {
    num: '04',
    title: 'Delivered.',
    frontDesc: 'Photo proof. Instant receipt. Done.',
    backTitle: 'Confirmed delivery',
    backDesc: 'Photo proof of delivery, instant digital receipt, and a delivery summary sent to both sender and recipient. Rate your rider and leave a tip.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#00FFB3',
    backStat: '99.2%', backStatLabel: 'success rate',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="how-it-works"
      style={{ background: '#111318' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span className="section-badge mb-6 inline-flex">How it works</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 mt-4">
            <span className="block sm:inline">Simple as </span>
            <span className="gradient-text whitespace-nowrap">1, 2, 3, 4</span>
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto">Hover each card to see more detail.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 relative">
          {/* Connector line */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-[16px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px origin-left"
            style={{ background: 'linear-gradient(90deg, #FF3D2E, #00D9F5, #FF6B35, #00FFB3)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Step badge */}
              <div className="flex justify-center mb-4 relative z-10">
                <span className="text-xs font-black px-4 py-1.5 rounded-full"
                  style={{ background: `${step.color}14`, color: step.color, border: `1px solid ${step.color}30` }}>
                  {step.num}
                </span>
              </div>

              <FlipCard height="300px"
                front={
                  <div className="w-full h-full rounded-3xl p-6 flex flex-col relative overflow-hidden"
                    style={{ background: '#16181F', border: `1px solid rgba(255,255,255,0.07)` }}>
                    <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
                      style={{ background: `${step.color}12`, border: `1px solid ${step.color}22`, color: step.color }}>
                      {step.icon}
                    </div>
                    <h3 className="text-base font-black text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.frontDesc}</p>
                    <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color: step.color }}>
                      <span>Hover to learn more</span>
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full rounded-3xl p-6 flex flex-col relative overflow-hidden"
                    style={{ background: '#16181F', border: `1px solid ${step.color}35` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${step.color}12`, color: step.color }}>
                        {step.icon}
                      </div>
                      <h3 className="text-sm font-black text-white leading-tight">{step.backTitle}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">{step.backDesc}</p>
                    <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-2xl font-black" style={{ color: step.color }}>{step.backStat}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{step.backStatLabel}</p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200 group">
            See all features
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
