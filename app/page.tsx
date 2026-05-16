import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LiveExperience from '@/components/sections/LiveExperience'
import HowItWorks from '@/components/sections/HowItWorks'
import DriverExperience from '@/components/sections/DriverExperience'
import TrustSafety from '@/components/sections/TrustSafety'
import AppShowcase from '@/components/sections/AppShowcase'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LiveExperience />
      <HowItWorks />
      <DriverExperience />
      <TrustSafety />
      <AppShowcase />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
