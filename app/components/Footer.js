'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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

  return (
    <footer className="bg-gunmetal text-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="/" aria-label="Nuclear Pest Control Goa Home">
              <Image
                src="/logo.png"
                alt="Nuclear Pest Control Goa Logo"
                width={200}
                height={50}
                className="h-12 w-auto mb-4"
              />
            </a>
            <p className="text-soft-silver mb-4">
              Professional pest control services across Goa. No pests. No stress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-deep-black/20 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-deep-black/20 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-deep-black/20 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-soft-silver hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-soft-silver">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-soft-silver hover:text-primary-600 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nuclearpestgoa.in" className="text-soft-silver hover:text-primary-600 transition-colors">
                  info@nuclearpestgoa.in
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-soft-silver">
                  Serving All Areas of Goa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-deep-black/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-soft-silver text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Nuclear Pest Control – Proprietor: Monali Jadhav – Goa, India. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-soft-silver hover:text-primary-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-soft-silver hover:text-primary-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
