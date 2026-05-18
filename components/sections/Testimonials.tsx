'use client'

import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Wanjiku Kamau', role: 'Online store owner · Nairobi', initials: 'WK', color: '#FF3D2E', rating: 5, quote: "DoorDash completely changed how I run my business. I was losing customers to competitors with faster shipping. Now I send 40 orders a day and my reviews have never been better." },
  { name: 'Brian Otieno', role: 'DoorDash Driver · Mombasa', initials: 'BO', color: '#00D49A', rating: 5, quote: "I make KSh 25,000 a week and I choose my own hours. DoorDash has given me the freedom to be there for my family while actually building something real. Best move I ever made." },
  { name: 'Amina Hassan', role: 'Corporate client · Mombasa', initials: 'AH', color: '#0EA5E9', rating: 5, quote: "We switched all our B2B deliveries to DoorDash four months ago. Not one lost package, always on time, and the live tracking keeps our clients updated without us lifting a finger." },
  { name: 'Kipchoge Waweru', role: 'Food entrepreneur · Nakuru', initials: 'KW', color: '#FF6B35', rating: 5, quote: "Hot food reaching customers in under 12 minutes. My regulars are impressed every single time. DoorDash is the reason my catering side hustle is now a full business." },
  { name: 'Grace Muthoni', role: 'Fashion designer · Kisumu', initials: 'GM', color: '#FF3D2E', rating: 5, quote: "Fragile fabrics, express orders, weekend deliveries. DoorDash handles all of it and I have never had a damaged item. The riders are careful and professional every single time." },
  { name: 'David Njoroge', role: 'DoorDash Driver · Nairobi', initials: 'DN', color: '#00D49A', rating: 5, quote: "The app is clean, the payouts are honest and I can see exactly what I earned on each trip. DoorDash actually respects the people doing the work on the ground." },
  { name: 'Zawadi Akinyi', role: 'Pharmacist · Eldoret', initials: 'ZA', color: '#FF3D2E', rating: 5, quote: "I use DoorDash to deliver medication to patients who cannot leave their homes. It is fast, reliable and the riders handle sensitive parcels with genuine care." },
  { name: 'James Kariuki', role: 'Tech startup founder · Nairobi', initials: 'JK', color: '#0EA5E9', rating: 5, quote: "Same-day delivery for hardware, client gifts and office supplies. The API saved our ops team hours every week and the reliability has been outstanding across the board." },
]

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#FBC02D" className="w-3.5 h-3.5">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="w-[300px] sm:w-[340px] flex-shrink-0 rounded-2xl p-6 mx-2.5 transition-all duration-300"
      style={{ background: '#FFFFFF', border: '1px solid #E5E8ED', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(t.rating)].map((_, j) => <StarIcon key={j} />)}
      </div>
      <p className="leading-relaxed mb-5 text-sm" style={{ color: '#4B5563' }}>&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
          style={{ background: `${t.color}12`, border: `1px solid ${t.color}20`, color: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm" style={{ color: '#0F1117' }}>{t.name}</p>
          <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#F5F6F8' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14">
        <motion.div
          initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex justify-center gap-0.5 mb-5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5" style={{ color: '#0F1117' }}>
            Real people.<br /><span className="gradient-text">Real results.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            From solopreneurs to enterprise clients, here is what DoorDash has done for people who trust us every day.
          </p>
        </motion.div>
      </div>

      <div className="ticker-container mb-4">
        <div className="ticker-track">
          {[...row1, ...row1].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
      <div className="ticker-container">
        <div className="ticker-track-reverse">
          {[...row2, ...row2].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
