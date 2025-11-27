'use client'

import { CheckCircle, Leaf, Building2, Award, Shield, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: 'Government Licensed',
      description: 'Fully licensed and registered pest control service provider in Goa. Authorized by Goa government for professional pest management services.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: 'Eco-Safe Certified',
      description: 'Certified to use eco-friendly, non-toxic, and environmentally safe pest control chemicals approved by Central Insecticides Board.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Hotel Approved',
      description: 'Government-approved pest control services for 5-star hotels, beach resorts, restaurants, and commercial establishments across Goa.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'ISO Certified',
      description: 'ISO-compliant pest management processes and international quality assurance standards with certified quality protocols.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-white">Certifications & Licenses</span>
          </div>
          <h2 className="section-heading text-white">
            Licensed & <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Certified</span> Excellence
          </h2>
          <p className="section-subheading text-gray-300 mt-6 max-w-3xl mx-auto">
            Government-approved and certified pest control company with eco-safe practices trusted by top establishments across Goa
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} text-white shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {cert.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="relative text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>

                {/* Decorative Corner */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />
                
                {/* Check Icon */}
                <div className="absolute bottom-6 right-6 w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Trusted by Leading Establishments
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our certified pest control services are trusted by 5-star hotels, luxury resorts, fine dining restaurants, corporate offices, and residential properties across Goa. We maintain the highest standards of quality and safety.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-gray-400 text-sm">Hotels Served</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Restaurants</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Homes</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
