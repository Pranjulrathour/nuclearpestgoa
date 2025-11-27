'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl shadow-soft border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a href="/" aria-label="Nuclear Pest Control Goa Home">
                <Image
                  src="/logo.png"
                  alt="Nuclear Pest Control Goa Logo"
                  width={280}
                  height={70}
                  className="h-16 md:h-20 w-auto"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                link.isScroll ? (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-2 font-medium text-sm transition-colors duration-300 rounded-xl ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50' 
                        : 'text-white hover:text-primary-300 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ) : (
                  <motion.a
                    key={link.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={link.id}
                    className={`relative px-4 py-2 font-medium text-sm transition-colors duration-300 rounded-xl ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50' 
                        : 'text-white hover:text-primary-300 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/917020062681"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary ml-4 flex items-center space-x-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-deep-black hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 shadow-2xl"
            >
              <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
                {navLinks.map((link, index) => (
                  link.isScroll ? (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left px-4 py-3 font-medium text-deep-black hover:text-primary-600 hover:bg-gray-50 transition-all duration-300 rounded-xl"
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.a
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      href={link.id}
                      className="block w-full text-left px-4 py-3 font-medium text-deep-black hover:text-primary-600 hover:bg-gray-50 transition-all duration-300 rounded-xl"
                    >
                      {link.name}
                    </motion.a>
                  )
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  href="https://wa.me/917020062681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 w-full mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917020062681"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-glow-lg hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ rotate: 15 }}
        aria-label="Contact via WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </>
  )
}
