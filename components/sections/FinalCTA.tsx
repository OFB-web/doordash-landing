'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#111318' }}>

      {/* Subtle red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,61,46,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-black text-white tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}
          >
            Your city.<br />
            <span style={{ color: '#FF3D2E' }}>Your delivery.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-md mx-auto leading-relaxed mb-10">
            Start your first delivery in under 60 seconds. No credit card. No waiting. Just open the app and go.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2.5 text-white font-bold text-base px-9 py-4 rounded-xl transition-opacity hover:opacity-85"
              style={{ background: '#FF3D2E' }}
            >
              Send your first package
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/drivers"
              className="inline-flex items-center gap-2.5 text-slate-300 font-semibold text-base px-8 py-4 rounded-xl transition-colors hover:text-white"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Become a rider
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
