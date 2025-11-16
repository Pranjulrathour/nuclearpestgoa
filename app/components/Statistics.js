'use client'

import { TrendingUp, Star, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Statistics() {
  const stats = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      number: '10,000+',
      label: 'Pest Control Services Completed in Goa',
      description: 'Successfully completed 10,000+ termite control, cockroach control, bed bug, rodent, and mosquito control projects across all Goa'
    },
    {
      icon: <Star className="w-10 h-10" />,
      number: '4.8/5',
      label: 'Top Rated Pest Control Goa',
      description: 'Highest customer satisfaction rating for pest control services in North Goa and South Goa. Best pest control company reviews.'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      number: '24-48hrs',
      label: 'Emergency Pest Control Response',
      description: 'Same-day and 24-48 hour emergency response for urgent pest control needs across Panjim, Margao, Calangute, Candolim, and all Goa'
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      number: '100%',
      label: 'Complete Goa Coverage',
      description: 'Pest control services available in all areas of Goa: North Goa, South Goa, Panjim, Margao, Vasco, Mapusa, all beaches and villages'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-dark-900">
            Goa's Most Trusted <span className="text-primary-600">Pest Control Company</span>
          </h2>
          <p className="section-subheading text-gray-600 mt-4">
            Top-Rated Pest Control Services in Goa | 10,000+ Satisfied Customers | 4.8★ Rating | Serving North Goa, South Goa & All Goa Areas Since Years
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-dark-900 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-dark-900 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
