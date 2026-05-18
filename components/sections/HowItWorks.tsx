'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Enter details',
    desc: 'Add pickup and drop-off addresses, package size, weight, and any special handling notes. Our smart form auto-fills addresses from your history.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    color: '#FF3D2E',
    stat: '30 sec',
    statLabel: 'avg to complete',
  },
  {
    num: '02',
    title: 'Get matched instantly',
    desc: 'Our algorithm scans all nearby verified riders and dispatches the closest one within seconds. No waiting, no uncertainty. Real-time confirmation sent to your phone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    color: '#00D9F5',
    stat: '< 90s',
    statLabel: 'match time',
  },
  {
    num: '03',
    title: 'Track it live',
    desc: 'Watch your rider move on the live map. Get SMS and in-app notifications at every stage. ETA updates every 30 seconds with traffic-aware routing built in.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#FF6B35',
    stat: '30s',
    statLabel: 'update interval',
  },
  {
    num: '04',
    title: 'Delivered. Confirmed.',
    desc: 'Photo proof of delivery, instant digital receipt, and a summary sent to sender and recipient. Rate your rider, leave a tip. Done in under 4 minutes average.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#00FFB3',
    stat: '99.2%',
    statLabel: 'success rate',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 overflow-hidden" id="how-it-works"
      style={{ background: '#111318' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Left-aligned header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FF3D2E' }}>
            How it works
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Simple as<br />1, 2, 3, 4.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm md:text-right">
              From opening the app to confirmed delivery, the whole process takes minutes.
            </p>
          </div>
        </motion.div>

        {/* Numbered steps — editorial list */}
        <div>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group flex gap-6 md:gap-12 py-10 md:py-12 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {/* Big step number */}
              <div className="flex-shrink-0 w-14 md:w-20 pt-1">
                <span
                  className="text-5xl md:text-7xl font-black tabular-nums leading-none select-none transition-colors duration-300 group-hover:opacity-100"
                  style={{ color: 'rgba(255,255,255,0.07)' }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${step.color}12`, border: `1px solid ${step.color}20`, color: step.color }}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </div>

                {/* Stat */}
                <div className="sm:text-right flex-shrink-0 pl-14 sm:pl-0">
                  <p className="text-2xl md:text-3xl font-black" style={{ color: step.color }}>{step.stat}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{step.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
        </div>
      </div>
    </section>
  )
}
