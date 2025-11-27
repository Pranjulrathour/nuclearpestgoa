'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  const services = [
    'Cockroach Control',
    'Termite Control',
    'Bed Bug Treatment',
    'Rodent Control',
    'Ant Control',
    'Mosquito Control',
  ]

  const areas = [
    'Panjim',
    'Margao',
    'Calangute',
    'Candolim',
    'Baga',
    'Colva',
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="/" aria-label="Nuclear Pest Control Goa Home" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Nuclear Pest Control Goa Logo"
                width={200}
                height={50}
                className="h-14 w-auto"
              />
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Goa&apos;s #1 trusted pest control company. Professional, eco-safe, and licensed pest management services.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+917020062681" 
                  className="flex items-start text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>+91 70200 62681</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@nuclearpestgoa.in" 
                  className="flex items-start text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>info@nuclearpestgoa.in</span>
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>37/C, Indona, Davorlim, Behind Amul Icecream Shop, Salcete, Margao, Goa 403601</span>
              </li>
            </ul>

            {/* Service Areas Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {areas.map((area, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 pb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">10,000+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">4.8★</div>
              <div className="text-gray-400 text-sm">Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Goa Coverage</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left flex items-center gap-2">
              © {new Date().getFullYear()} Nuclear Pest Control – Proprietor: Monali Jadhav – Goa, India. 
              <span className="inline-flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" />
              </span>
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
