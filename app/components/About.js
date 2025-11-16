'use client'

import { Shield, Users, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Government Licensed Pest Control Goa',
      description: 'Fully licensed and certified pest control company in Goa. Government-approved eco-safe chemicals for residential and commercial pest control services.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Expert Pest Control Technicians',
      description: 'Highly trained and experienced pest control experts in Goa. Specialized in termite control, cockroach extermination, bed bug treatment, rodent management across Goa.'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Best Pest Control Services Warranty',
      description: '100% satisfaction guarantee on all pest control services in Goa. 5-year warranty on termite control, 3-month warranty on cockroach and bed bug treatment.'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: '24/7 Emergency Pest Control Goa',
      description: 'Same-day and emergency pest control services available across North Goa and South Goa. Quick 24-48 hour response for urgent pest infestations.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-deep-black">
            Best <span className="text-primary-600">Pest Control Company in Goa</span>
          </h2>
          <p className="section-subheading mt-4">
            Nuclear Pest Control - Goa's #1 Trusted Pest Control Service Provider | Licensed Pest Exterminators | Eco-Safe Chemical Solutions | Serving North Goa, South Goa, Panjim, Margao, Calangute, Candolim, Baga, Anjuna, Colva & All Goa Areas
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-primary-600 mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold font-sans mb-2 text-deep-black">{feature.title}</h3>
                <p className="text-gunmetal text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
