import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import LiveExperience from '@/components/sections/LiveExperience'
import AppShowcase from '@/components/sections/AppShowcase'
import DriverExperience from '@/components/sections/DriverExperience'
import TrustSafety from '@/components/sections/TrustSafety'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      {/* Hero — full bleed photo, dark overlay */}
      <Hero />
      {/* How it works — white, numbered steps, big delivery photo */}
      <HowItWorks />
      {/* Live tracking — light gray, 50/50 animated map */}
      <LiveExperience />
      {/* App features — white, phone mockup + feature list */}
      <AppShowcase />
      {/* Driver section — light gray, rider photo 50/50 */}
      <DriverExperience />
      {/* Trust & safety — white, 2×2 grid */}
      <TrustSafety />
      {/* Testimonials — light gray, scrolling ticker */}
      <Testimonials />
      {/* Final CTA — dark, closing push */}
      <FinalCTA />
      <Footer />
    </main>
  )
}
