'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'Home', id: 'hero', isScroll: true },
    { name: 'About', id: 'about', isScroll: true },
    { name: 'Services', id: 'services', isScroll: true },
    { name: 'Blog', id: '/blog', isScroll: false },
    { name: 'Contact', id: 'contact', isScroll: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Nuclear Pest Control Goa Home">
              <Image
                src="/logo.png"
                alt="Nuclear Pest Control Goa Logo"
                width={280}
                height={70}
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isScroll ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    isScrolled ? 'text-deep-black' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.id}
                  href={link.id}
                  className={`font-medium transition-colors hover:text-primary-600 ${
                    isScrolled ? 'text-deep-black' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-deep-black' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              link.isScroll ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left font-medium text-deep-black hover:text-primary-600 transition-colors py-2"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.id}
                  href={link.id}
                  className="block w-full text-left font-medium text-deep-black hover:text-primary-600 transition-colors py-2"
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
