'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    id: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Real-time GPS',
    desc: 'Watch your package move on the map. Live updates every 3 seconds.',
    color: '#FF3D2E',
  },
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'In-app messaging',
    desc: 'Chat directly with your rider. No phone numbers needed.',
    color: '#00D9F5',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: 'Delivery proof',
    desc: 'Photo confirmation the moment your package arrives.',
    color: '#00FFB3',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Schedule ahead',
    desc: 'Book deliveries up to 7 days in advance.',
    color: '#FF6B35',
  },
]

const navIcons = [
  <svg key="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  <svg key="pkg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>,
  <svg key="bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
  <svg key="user" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
]

export default function AppShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const active = features[activeFeature]

  return (
    <section className="relative py-20 md:py-32 bg-bg-dark overflow-hidden" id="app">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,61,46,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass border border-primary/25 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">App Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Delivery, <span className="gradient-text">in your pocket.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Available on iOS and Android. Designed to be the most intuitive delivery app ever built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-end gap-4 relative"
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(255,61,46,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />

            {/* Back phone — decorative, hide on small screens */}
            <div className="hidden sm:block relative w-[220px] h-[440px] rounded-[36px] bg-gradient-to-b from-slate-700 to-slate-900 p-[1.5px] translate-y-6 opacity-40 scale-95">
              <div className="w-full h-full rounded-[35px] bg-bg-card" />
            </div>

            {/* Main phone */}
            <div className="relative w-[240px] sm:w-[256px] h-[480px] sm:h-[520px] rounded-[44px] bg-gradient-to-b from-slate-600 to-slate-900 p-[2px] shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:-translate-x-16 z-10">
              <div className="w-full h-full rounded-[42px] overflow-hidden bg-bg-dark flex flex-col">
                {/* Header */}
                <div className="px-5 pt-8 pb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400">Send to</p>
                    <p className="text-sm font-bold text-white">Westlands, Nairobi</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)' }}>D</div>
                </div>

                {/* Map */}
                <div className="mx-3 rounded-2xl overflow-hidden h-36 relative"
                  style={{ background: 'linear-gradient(135deg, #0f1a1f, #0a1628)' }}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 230 130">
                    <path d="M 20 110 C 70 90, 120 70, 170 40 S 210 20, 215 25" fill="none" stroke="#FF3D2E" strokeWidth="2.5" strokeDasharray="5 4" />
                    <circle cx="20" cy="110" r="6" fill="#00FFB3" />
                    <circle cx="20" cy="110" r="10" fill="#00FFB3" opacity="0.2" />
                    <circle cx="215" cy="25" r="5" fill="#FF3D2E" />
                    <circle cx="215" cy="25" r="2.5" fill="white" />
                    <circle cx="115" cy="70" r="9" fill="rgba(255,61,46,0.25)" />
                    <circle cx="115" cy="70" r="5" fill="#FF6B35" />
                    <circle cx="115" cy="70" r="2" fill="white" />
                  </svg>
                </div>

                {/* Feature card */}
                <div className="mx-3 mt-3 glass rounded-2xl p-4 border border-white/5 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ background: `${active.color}15`, border: `1px solid ${active.color}30`, color: active.color }}>
                      {active.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{active.title}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5 max-w-[130px]">{active.desc}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[80, 55, 70].map((w, j) => (
                      <div key={j} className="h-1.5 rounded-full bg-white/5">
                        <div className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${w}%`, background: `linear-gradient(90deg, ${active.color}90, ${active.color}30)` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="mx-3 mb-4 mt-2 grid grid-cols-4 gap-1">
                  {navIcons.map((icon, j) => (
                    <div key={j} className={`flex flex-col items-center py-2 rounded-xl ${j === 0 ? 'bg-primary/20' : ''}`}
                      style={{ color: j === 0 ? '#FF3D2E' : '#64748b' }}>
                      {icon}
                      {j === 0 && <div className="w-1 h-1 rounded-full bg-primary mt-1" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features list */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-5 border cursor-pointer transition-all duration-300"
                style={activeFeature === i
                  ? { borderColor: `${f.color}40`, boxShadow: `0 0 30px ${f.color}10` }
                  : { borderColor: 'rgba(255,255,255,0.05)' }}
                onClick={() => setActiveFeature(i)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 flex-shrink-0"
                    style={{
                      background: activeFeature === i ? `${f.color}15` : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${activeFeature === i ? `${f.color}30` : 'rgba(255,255,255,0.06)'}`,
                      color: activeFeature === i ? f.color : '#94a3b8',
                    }}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{f.desc}</p>
                  </div>
                  {activeFeature === i && (
                    <div className="ml-auto w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: f.color }} />
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-4">
              {['App Store', 'Google Play'].map(store => (
                <a key={store} href="#"
                  className="flex-1 glass border border-white/10 hover:border-primary/30 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      {store === 'App Store'
                        ? <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        : <path d="M3.18 23.76c.33.18.7.19 1.06.03l12.78-7.23-2.87-2.87-10.97 10.07zm15.67-12.3L16.3 9.91 5.1.62C4.7.41 4.27.43 3.93.65L15.7 12.42l3.15-1.89zm1.1.62l-2.6 1.56 2.6 1.56c.84-.5.84-1.65 0-2.15zM4.24.18C3.89.01 3.5.02 3.18.19L3.17 12l1.07-1.07 10.17-10.17L4.24.18z" />
                      }
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Download on</p>
                    <p className="text-sm font-bold text-white">{store}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
