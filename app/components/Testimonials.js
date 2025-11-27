'use client'

import { Star, Quote, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Mehta',
      role: '5-Star Beach Resort Owner',
      location: 'Calangute, North Goa',
      rating: 5,
      text: 'Nuclear Pest Control is the best pest control company in North Goa! They have been providing professional termite control, cockroach control, and rodent control services to our beach resort for 2 years. No pest complaints from guests. Their eco-safe pest control methods are perfect for our hotel. Highly recommend for all hotels and resorts in Goa!',
      image: '👨‍💼',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Sarah D\'Souza',
      role: 'Luxury Villa Owner',
      location: 'Candolim Beach, Goa',
      rating: 5,
      text: 'Excellent termite treatment service in Candolim! Nuclear Pest Control handled our severe termite infestation problem efficiently with professional pre-construction termite treatment. Their pest control technicians were courteous and used eco-friendly chemicals safe for my family. Best termite control company in Goa. 5-year warranty gives peace of mind!',
      image: '👩‍💼',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Amit Patel',
      role: 'Fine Dining Restaurant Owner',
      location: 'Panjim, Goa',
      rating: 5,
      text: 'As a restaurant owner in Panjim, pest control is critical for food safety and hygiene compliance. Nuclear Pest Control provides the best cockroach control and rodent control services in Goa. They work discreetly during off-hours and ensure 100% pest elimination. Government-approved pest control perfect for restaurants in Goa. Affordable and reliable!',
      image: '👨‍🍳',
      gradient: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="section-heading text-gray-900">
            What Our <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="section-subheading mt-6">
            Real testimonials from satisfied customers across North Goa, South Goa, and all areas. Trusted by hotels, villas, restaurants, and homes.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-16 h-16 text-gray-900" />
                </div>

                {/* Profile Section */}
                <div className="relative flex items-start mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {testimonial.image}
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="relative flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="relative text-gray-700 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-lg border-2 border-white">
                  👨
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-lg border-2 border-white">
                  👩
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-lg border-2 border-white">
                  👨
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-lg border-2 border-white">
                  👩
                </div>
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.8/5</span>
              </div>
              <p className="text-gray-600">
                Rated by <span className="font-bold text-gray-900">10,000+ Happy Customers</span> across Goa
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
