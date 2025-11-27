'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Star, CheckCircle, Sparkles } from 'lucide-react'

export default function Hero() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Licensed & Certified" },
    { icon: <Star className="w-5 h-5" />, text: "4.8★ Rated" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "10,000+ Happy Clients" },
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 md:pt-32 pb-20 md:pb-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-gray-200">#1 Pest Control Service in Goa</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans leading-[1.1] tracking-tight"
            >
              Best pest control service 
              <span className="block mt-2 bg-gradient-to-r from-primary-400 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                in Goa
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              Professional, eco-safe pest control solutions for homes and businesses. 
              Licensed experts with 5-year warranty on termite control.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                >
                  <span className="text-primary-400">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a 
                href="#contact" 
                className="btn-primary group"
              >
                <span>Get Free Inspection</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Services
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500" />
                <span>Same Day Service</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/30 via-accent-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-70" />
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80"
                    alt="Professional pest control treatment in Goa"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Nuclear Pest Control</p>
                      <p className="text-sm text-gray-600">Government Licensed · Eco-Safe</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-xl">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-sm">4.8</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute top-6 right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-glow"
                >
                  24/7 Emergency
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
