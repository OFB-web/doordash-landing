'use client'

import { motion } from 'framer-motion'

const pillars = [
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>), title: 'Verified riders only', desc: 'Every driver goes through ID verification, background checks, and a 5-point safety screening before their first trip.', color: '#FF3D2E' },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>), title: 'End-to-end encryption', desc: 'All personal data, package details, and communications are fully encrypted using AES-256 standards.', color: '#00D9F5' },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>), title: 'Real-time monitoring', desc: 'Our 24/7 operations team monitors every active delivery for safety anomalies and performance issues.', color: '#FF6B35' },
  { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>), title: 'Photo delivery proof', desc: 'Every delivery is confirmed with a photo. You see exactly where your package landed, every time.', color: '#00FFB3' },
]

export default function TrustSafety() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-bg-deep" id="safety">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,61,46,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* Animated shield */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30"
                style={{ background: 'rgba(255,61,46,0.2)', transform: 'scale(1.6)' }} />
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"
                style={{ background: 'rgba(255,61,46,0.1)', transform: 'scale(1.3)' }} />
              <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(255,61,46,0.2), rgba(255,107,53,0.1))', border: '1px solid rgba(255,61,46,0.35)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="1.5" className="w-10 h-10">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 glass border border-primary/25 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Trust & Safety</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Built on <span className="gradient-text">trust.</span><br />Engineered for <span className="gradient-text-cool">safety.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every feature, every process, every decision — designed to keep your packages and data safe.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group glass rounded-3xl p-7 border border-white/8 hover:border-white/15 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}10, transparent 60%)` }} />
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>
                {p.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-6 border border-white/8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {[
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-5 h-5 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>), text: 'All packages insured up to KSh 500,000 per delivery' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="2" className="w-5 h-5 flex-shrink-0"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>), text: 'ISO 27001 certified data security infrastructure' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#FF3D2E" strokeWidth="2" className="w-5 h-5 flex-shrink-0"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>), text: '3,000+ background-checked riders across 8 cities in Kenya' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm text-slate-200 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
