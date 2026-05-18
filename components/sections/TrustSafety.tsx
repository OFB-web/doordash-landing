'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    title: 'Verified riders only',
    desc: 'Every driver goes through ID verification, background checks, and a 5-point safety screening before their first trip.',
    color: '#FF3D2E',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>),
    title: 'End-to-end encryption',
    desc: 'All personal data, package details, and communications are fully encrypted using AES-256 standards.',
    color: '#00D9F5',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>),
    title: 'Real-time monitoring',
    desc: 'Our 24/7 operations team monitors every active delivery for safety anomalies and issues.',
    color: '#FF6B35',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>),
    title: 'Photo delivery proof',
    desc: 'Every delivery is confirmed with a photo. You see exactly where your package landed, every time.',
    color: '#00FFB3',
  },
]

const trustItems = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-5 h-5 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    text: 'All packages insured up to KSh 500,000 per delivery',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="2" className="w-5 h-5 flex-shrink-0"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>),
    text: 'ISO 27001 certified data security infrastructure',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-5 h-5 flex-shrink-0"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>),
    text: '3,000+ background-checked riders across 8 cities in Kenya',
  },
]

export default function TrustSafety() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="safety"
      style={{ background: '#0A0B0F' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(255,61,46,0.08)', border: '1px solid rgba(255,61,46,0.2)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="1.5" className="w-8 h-8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>

          <span className="section-badge mb-6 inline-flex">Trust &amp; Safety</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 mt-4">
            Built on <span className="gradient-text">trust.</span><br />
            Engineered for <span className="gradient-text-cool">safety.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            Every feature, every process, every decision designed to keep your packages and data safe.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl p-6 transition-all duration-300"
              style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}10`, border: `1px solid ${p.color}20`, color: p.color }}>
                {p.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm text-slate-300">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
