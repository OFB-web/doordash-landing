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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    color: '#FF3D2E', accent: 'rgba(255,61,46,0.12)',
    backStat: '30 sec', backStatLabel: 'avg to complete',
  },
  {
    num: '02',
    title: 'Get matched',
    frontDesc: 'Nearest verified rider dispatched instantly.',
    backTitle: 'Instant matching',
    backDesc: 'Our algorithm scans all nearby verified riders and dispatches the closest one within seconds. No waiting, no uncertainty. Real-time confirmation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    color: '#00D9F5', accent: 'rgba(0,217,245,0.12)',
    backStat: '< 90s', backStatLabel: 'match time',
  },
  {
    num: '03',
    title: 'Track live',
    frontDesc: 'GPS precision. Live ETA. Full visibility.',
    backTitle: 'Full transparency',
    backDesc: 'Watch your rider move on the live map. Get SMS + in-app notifications at every stage. ETA updates every 30 seconds with traffic-aware routing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#FF6B35', accent: 'rgba(255,107,53,0.12)',
    backStat: '30s', backStatLabel: 'update interval',
  },
  {
    num: '04',
    title: 'Delivered.',
    frontDesc: 'Photo proof. Instant receipt. Done.',
    backTitle: 'Confirmed delivery',
    backDesc: 'Photo proof of delivery, instant digital receipt, and a delivery summary sent to both sender and recipient. Rate your rider and leave a tip.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#00FFB3', accent: 'rgba(0,255,179,0.12)',
    backStat: '99.2%', backStatLabel: 'success rate',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="how-it-works"
      style={{ background: 'linear-gradient(180deg, #0A0B0F 0%, #111318 50%, #0A0B0F 100%)' }}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,61,46,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,217,245,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 glass border border-primary/25 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">How it works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
            <span className="block sm:inline">Simple as </span><span className="gradient-text whitespace-nowrap">1, 2, 3, 4</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Hover each card to see more detail.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 md:mt-16 relative">
          {/* Connector line — sits behind the step badges at the top */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-[16px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px origin-left"
            style={{ background: 'linear-gradient(90deg, #FF3D2E, #00D9F5, #FF6B35, #00FFB3)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {/* Step badge — outside the flip card so it's never clipped */}
              <div className="flex justify-center mb-4 relative z-10">
                <span className="text-xs font-black px-4 py-1.5 rounded-full"
                  style={{ background: step.accent, color: step.color, border: `1px solid ${step.color}40` }}>
                  {step.num}
                </span>
              </div>

              <FlipCard height="300px"
                front={
                  <div className="w-full h-full rounded-3xl p-6 border flex flex-col relative overflow-hidden"
                    style={{ background: '#191C24', borderColor: `${step.color}25` }}>
                    {/* Subtle top glow */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${step.color}12, transparent 55%)` }} />

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0 relative z-10"
                      style={{ background: step.accent, border: `1px solid ${step.color}30`, color: step.color }}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-black text-white mb-2 relative z-10">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed relative z-10">{step.frontDesc}</p>

                    {/* Footer hint */}
                    <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-semibold relative z-10" style={{ color: step.color }}>
                      <span>Hover to learn more</span>
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full rounded-3xl p-6 border flex flex-col relative overflow-hidden"
                    style={{ background: '#191C24', borderColor: `${step.color}50` }}>
                    <div className="absolute inset-0 pointer-events-none rounded-3xl"
                      style={{ background: `linear-gradient(145deg, ${step.color}20, transparent 60%)` }} />

                    {/* Icon + title row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: step.accent, color: step.color }}>
                        {step.icon}
                      </div>
                      <h3 className="text-base font-black text-white leading-tight">{step.backTitle}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed flex-1">{step.backDesc}</p>

                    {/* Stat */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-2xl font-black" style={{ color: step.color }}>{step.backStat}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{step.backStatLabel}</p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-accent-cyan font-semibold transition-colors duration-200 group">
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
