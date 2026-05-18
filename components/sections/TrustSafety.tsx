'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    title: 'Verified riders only',
    desc: 'ID verification, background checks, and a 5-point safety screening before the first trip.',
    color: '#FF3D2E',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>),
    title: 'End-to-end encryption',
    desc: 'All personal data, package details, and communications encrypted with AES-256.',
    color: '#00D9F5',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>),
    title: 'Real-time monitoring',
    desc: 'A 24/7 operations team monitors every active delivery for safety anomalies.',
    color: '#FF6B35',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>),
    title: 'Photo delivery proof',
    desc: 'Every delivery confirmed with a photo. See exactly where your package landed.',
    color: '#00FFB3',
  },
]

export default function TrustSafety() {
  return (
    <section className="py-20 md:py-32 overflow-hidden" id="safety"
      style={{ background: '#0A0B0F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header — split layout */}
        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FF3D2E' }}>
              Trust &amp; Safety
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Built to be<br />trusted.
            </h2>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-sm md:text-right">
            Every feature, every process, every decision designed to keep your packages and data safe.
          </p>
        </motion.div>

        {/* Pillars — 2x2 grid with dividers */}
        <div className="grid sm:grid-cols-2 border-t border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10 border-b border-r transition-colors duration-300 group"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${p.color}10`, border: `1px solid ${p.color}20`, color: p.color }}>
                {p.icon}
              </div>
              <h3 className="font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-0 border border-t-0 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-4 h-4 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, text: 'All packages insured up to KSh 500,000 per delivery' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="2" className="w-4 h-4 flex-shrink-0"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>, text: 'ISO 27001 certified data security infrastructure' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-4 h-4 flex-shrink-0"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, text: '3,000+ background-checked riders across 8 cities' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-4">
              {item.icon}
              <span className="text-sm text-slate-400">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
