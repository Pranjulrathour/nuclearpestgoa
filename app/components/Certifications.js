'use client'

import { CheckCircle, Leaf, Building2, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Government Licensed Pest Control Goa',
      description: 'Fully licensed and registered pest control service provider in Goa. Authorized by Goa government for professional pest management services across all Goa areas.'
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Eco-Safe & Non-Toxic Pest Control',
      description: 'Certified to use eco-friendly, non-toxic, and environmentally safe pest control chemicals approved by Central Insecticides Board. Safe for children and pets in Goa homes.'
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Hotel & Restaurant Pest Control Approved',
      description: 'Government-approved pest control services for 5-star hotels, beach resorts, restaurants, cafes, and commercial establishments across North Goa and South Goa.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'ISO Certified Pest Control Company',
      description: 'ISO-compliant pest management processes and international quality assurance standards. Best rated pest control company in Goa with certified quality protocols.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-white">
            Licensed & Certified <span className="text-primary-500">Pest Control Company Goa</span>
          </h2>
          <p className="section-subheading text-gray-300 mt-4">
            Government Licensed Pest Control Services in Goa | Eco-Safe Certified Chemicals | Hotel & Restaurant Approved | ISO Compliant Pest Control Company | Trusted by Top Hotels, Resorts & Commercial Establishments Across Goa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600/20 text-primary-500 rounded-full mb-4 hover:bg-primary-600/30 transition-colors">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
