'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Real-time GPS tracking',
    desc: 'Watch your package move on the map. Live updates every 3 seconds with traffic-aware ETA.',
    color: '#FF3D2E',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>),
  },
  {
    title: 'In-app rider messaging',
    desc: 'Chat directly with your rider. No phone numbers needed, full privacy maintained.',
    color: '#00D9F5',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>),
  },
  {
    title: 'Photo delivery proof',
    desc: 'Photo confirmation the moment your package arrives. Instant digital receipt to both parties.',
    color: '#00FFB3',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>),
  },
  {
    title: 'Schedule ahead',
    desc: 'Book deliveries up to 7 days in advance. Recurring pickups for businesses.',
    color: '#FF6B35',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>),
  },
  {
    title: 'Business API',
    desc: 'Integrate DoorDash directly into your platform. Full REST API with webhooks and live callbacks.',
    color: '#FF3D2E',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
  },
  {
    title: 'Multi-stop deliveries',
    desc: 'One order, multiple stops. Optimised routing keeps cost low and speed high.',
    color: '#00D9F5',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="5" r="3" /><circle cx="19" cy="19" r="3" /><circle cx="5" cy="19" r="3" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="9" y1="16.5" x2="14.5" y2="10.5" /></svg>),
  },
]

export default function AppShowcase() {
  return (
    <section className="py-20 md:py-32 overflow-hidden" id="app"
      style={{ background: '#111318' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FF3D2E' }}>
              The app
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Delivery in<br />your pocket.
            </h2>
          </div>
          <div className="flex gap-3 md:flex-col md:items-end">
            {['App Store', 'Google Play'].map(store => (
              <a key={store} href="#"
                className="inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-all duration-200 hover:text-white"
                style={{ background: '#16181F', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  {store === 'App Store'
                    ? <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    : <path d="M3.18 23.76c.33.18.7.19 1.06.03l12.78-7.23-2.87-2.87-10.97 10.07zm15.67-12.3L16.3 9.91 5.1.62C4.7.41 4.27.43 3.93.65L15.7 12.42l3.15-1.89zm1.1.62l-2.6 1.56 2.6 1.56c.84-.5.84-1.65 0-2.15zM4.24.18C3.89.01 3.5.02 3.18.19L3.17 12l1.07-1.07 10.17-10.17L4.24.18z" />
                  }
                </svg>
                <span className="text-sm font-semibold">{store}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Feature grid — 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 md:p-8 border-b border-r group transition-colors duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${f.color}10`, border: `1px solid ${f.color}20`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
