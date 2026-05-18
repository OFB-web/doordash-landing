'use client'

import { motion } from 'framer-motion'
import MagneticButton from '@/components/ui/MagneticButton'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: '#111318' }}>

      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255,61,46,0.3), transparent)' }} />

      {/* Single centered ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,61,46,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10"
            style={{ background: 'rgba(0,255,179,0.06)', border: '1px solid rgba(0,255,179,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#00FFB3' }} />
            <span className="text-xs font-semibold text-slate-300 tracking-wide">Ready to move fast?</span>
          </span>
        </motion.div>

        <div className="overflow-hidden mb-8">
          {[
            { word: 'Your city.', gradient: false },
            { word: 'Your speed.', gradient: true },
            { word: 'Your delivery.', gradient: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={`block font-black tracking-tight leading-[1.05] ${item.gradient ? 'gradient-text' : 'text-white'}`}
                style={{ fontSize: 'clamp(38px, 8vw, 88px)' }}
              >
                {item.word}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
        >
          Join 50,000+ Kenyans who already deliver smarter. Start your first delivery in under 60 seconds. No credit card needed.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <MagneticButton href="/get-started" strength={0.4}>
            <span className="inline-flex items-center gap-3 text-white font-black text-base px-9 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              style={{ background: '#FF3D2E' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Send your first package
            </span>
          </MagneticButton>
          <MagneticButton href="/get-started">
            <span className="inline-flex items-center gap-2.5 text-slate-300 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:text-white"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              Become a driver
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          {[
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-4 h-4"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>), text: 'No credit card required' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>), text: 'Live in 60 seconds' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>), text: '8 cities across Kenya' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500">
              {b.icon}
              <span className="text-sm">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
