'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const perks = [
  { title: 'Instant payouts', desc: 'Cash out your earnings anytime. No waiting for weekly cycles.', color: '#FF3D2E' },
  { title: 'Smart routing', desc: 'AI-optimised routes mean more deliveries per hour and more money.', color: '#0EA5E9' },
  { title: 'Full insurance cover', desc: 'Comprehensive insurance coverage on every single trip you complete.', color: '#00D49A' },
  { title: 'Offline-capable app', desc: 'Built specifically for the road. Works without data in low-coverage zones.', color: '#FF6B35' },
]

export default function DriverExperience() {
  return (
    <section className="py-20 md:py-32 overflow-hidden" id="for-drivers" style={{ background: '#F5F6F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#00D49A' }}>
            For drivers
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]" style={{ color: '#0F1117' }}>
            Drive on your<br />own terms.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left: image placeholder */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 480 }}>
              <Image
                src="/driver-rider.png"
                alt="DoorDash delivery rider on a motorbike"
                fill
                className="object-cover object-center"
              />

              {/* Stats overlay card */}
              <div
                className="absolute bottom-5 left-5 right-5 rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', border: '1px solid #E5E8ED' }}
              >
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Active riders', value: '3,000+', color: '#FF3D2E' },
                    { label: 'Avg weekly earn', value: 'KSh 28k', color: '#00D49A' },
                    { label: 'Cities', value: '8', color: '#0EA5E9' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl font-black" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hiring badge */}
              <div
                className="absolute top-5 left-5 flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', border: '1px solid #E5E8ED', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#00D49A' }} />
                <span className="text-xs font-semibold" style={{ color: '#0F1117' }}>Hiring now in your city</span>
              </div>
            </div>
          </motion.div>

          {/* Right: perks + CTA */}
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
              className="text-base leading-relaxed mb-10 max-w-md"
              style={{ color: '#6B7280' }}
            >
              Turn your bike or car into an income machine across Kenyan cities. Set your own hours, choose your zones, and get paid fast.
            </motion.p>

            {/* Perks list */}
            <div className="border-t" style={{ borderColor: '#E5E8ED' }}>
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 py-6 border-b"
                  style={{ borderColor: '#E5E8ED' }}
                >
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: perk.color }} />
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: '#0F1117' }}>{perk.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="/get-started"
                className="inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl transition-opacity duration-200 hover:opacity-90 text-sm"
                style={{ background: '#FF3D2E', color: '#FFFFFF' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Start earning today
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
