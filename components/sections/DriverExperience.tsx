'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const perks = [
  {
    title: 'Instant payouts',
    desc: 'Cash out your earnings anytime. No waiting for weekly cycles.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
    color: '#FF3D2E',
  },
  {
    title: 'Smart routing',
    desc: 'AI-optimized routes mean more deliveries per hour, more money for you.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>),
    color: '#00D9F5',
  },
  {
    title: "You're fully protected",
    desc: 'Comprehensive insurance coverage on every single trip you complete.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    color: '#00FFB3',
  },
  {
    title: 'Dedicated driver app',
    desc: 'Clean, fast, and built specifically for the road. Available offline.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>),
    color: '#FF6B35',
  },
]

export default function DriverExperience() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" id="for-drivers"
      style={{ background: 'linear-gradient(180deg, #0A0B0F 0%, #111318 60%, #0A0B0F 100%)' }}>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black select-none pointer-events-none whitespace-nowrap"
        style={{ color: 'rgba(255,255,255,0.02)' }}>
        EARN MORE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left: image + overlay */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[360px] sm:h-[440px] md:h-[520px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                alt="African delivery rider"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(10,11,15,0.9) 100%)' }} />

              {/* Overlay stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Active riders', value: 3000, suffix: '+', color: '#FF3D2E' },
                  { label: 'Avg weekly earn', value: 28, prefix: 'KSh ', suffix: 'k', color: '#00FFB3' },
                  { label: 'Cities', value: 8, color: '#00D9F5' },
                ].map((stat, i) => (
                  <div key={i} className="glass rounded-2xl p-4 text-center border border-white/10">
                    <p className="text-2xl font-black" style={{ color: stat.color }}>
                      {stat.prefix}<AnimatedCounter end={stat.value} duration={2} />{stat.suffix}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 glass border border-accent-mint/25 rounded-2xl px-4 py-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span className="text-xs font-semibold text-white">Hiring now in your city</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div>
            <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2 glass border border-accent-mint/25 rounded-full px-4 py-2 mb-6">
                <span className="text-xs font-semibold text-accent-mint tracking-widest uppercase">For Drivers</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 leading-[1.05]">
                Drive on your<br /><span className="gradient-text">own terms.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
                Turn your bike or car into an income machine across Kenyan cities. Set your own hours, choose your zones and get paid fast.
              </p>
            </motion.div>

            <div className="space-y-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-2xl p-5 border border-white/8 flex items-start gap-4 hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${perk.color}15`, border: `1px solid ${perk.color}30`, color: perk.color }}>
                    {perk.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{perk.title}</p>
                    <p className="text-sm text-slate-400">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10">
              <a href="/get-started" className="inline-flex items-center gap-2.5 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-glow"
                style={{ background: 'linear-gradient(135deg, #00FFB3, #00D9F5)', color: '#0A0B0F' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Start earning today
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
