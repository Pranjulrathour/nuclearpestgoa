'use client'

import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StructuredData from './components/StructuredData'

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <Certifications />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
