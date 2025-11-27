'use client'

import { TrendingUp, Star, Clock, MapPin, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Statistics() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '10,000+',
      label: 'Happy Clients',
      description: 'Successfully completed pest control services across Goa',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: '4.8/5',
      label: 'Customer Rating',
      description: 'Top-rated pest control company in Goa with excellent reviews',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: '24-48hrs',
      label: 'Response Time',
      description: 'Quick emergency response for urgent pest control needs',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: '100%',
      label: 'Goa Coverage',
      description: 'Serving all areas of North and South Goa',
      gradient: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(150deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0),linear-gradient(150deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]" />
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
          <h2 className="section-heading text-gray-900">
            Goa&apos;s Most <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Trusted</span> Pest Control
          </h2>
          <p className="section-subheading mt-6">
            Top-rated pest control services with thousands of satisfied customers across North and South Goa
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-5xl md:text-6xl font-bold text-gray-900 mb-3"
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Certified</div>
                <div className="font-bold text-gray-900">ISO Compliant</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Established</div>
                <div className="font-bold text-gray-900">Trusted Brand</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Rating</div>
                <div className="font-bold text-gray-900">Top Rated</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
