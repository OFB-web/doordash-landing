'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'

export default function FinalCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const W = canvas.offsetWidth
    const H = canvas.offsetHeight
    canvas.width = W * dpr
    canvas.height = H * dpr
    const c = canvas.getContext('2d')
    if (!c) return
    c.scale(dpr, dpr)

    const colors = ['#FF3D2E', '#FF6B35', '#00D9F5', '#00FFB3', '#E6341F']
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let rafId: number
    function draw() {
      if (!c) return
      c.clearRect(0, 0, W, H)
      for (const p of particles) {
        c.beginPath()
        c.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        c.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
        c.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
      }
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0B0F 0%, #111318 50%, #0A0B0F 100%)' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,61,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,46,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(255,61,46,0.1) 0%, rgba(255,107,53,0.06) 40%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-primary/25 rounded-full px-4 py-2 mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
          <span className="text-xs font-semibold text-slate-200 tracking-widest uppercase">Ready to move fast?</span>
        </motion.div>

        <div className="overflow-hidden mb-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { word: 'Your city.', gradient: false },
              { word: 'Your speed.', gradient: true },
              { word: 'Your DoorDash.', gradient: false },
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`block font-black tracking-tight leading-[1.0] ${item.gradient ? 'gradient-text' : 'text-white'}`}
                style={{ fontSize: 'clamp(36px, 8vw, 96px)' }}
              >
                {item.word}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12"
        >
          Join 50,000+ Kenyans who already deliver smarter. Start your first delivery in under 60 seconds. No credit card needed.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <MagneticButton href="/get-started" strength={0.5}>
            <span className="inline-flex items-center gap-3 text-white font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:shadow-glow-lg"
              style={{ background: 'linear-gradient(135deg, #FF3D2E, #E6341F)', boxShadow: '0 0 50px rgba(255,61,46,0.4)' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Send your first package
            </span>
          </MagneticButton>
          <MagneticButton href="/get-started">
            <span className="inline-flex items-center gap-2.5 glass border border-white/12 hover:border-primary/40 text-white font-semibold text-base px-8 py-5 rounded-2xl transition-all duration-300">
              Become a driver
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00FFB3" strokeWidth="2" className="w-4 h-4"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>), text: 'No credit card required' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="2" className="w-4 h-4"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>), text: 'Live in 60 seconds' },
            { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>), text: '8 cities across Kenya' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400">
              {b.icon}
              <span className="text-sm font-medium">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
