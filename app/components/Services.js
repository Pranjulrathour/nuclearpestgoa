'use client'

import { Bug, Home, Rat, Waves, Shield, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: <Bug className="w-12 h-12" />,
      title: 'Cockroach Control Services Goa',
      description: 'Professional German cockroach and American cockroach extermination services in Goa. Complete cockroach pest control for homes, hotels, restaurants, and commercial properties across North Goa, South Goa, Panjim, Margao.',
      features: ['German & American cockroach control Goa', 'Gel treatment & spray for cockroaches', '3-month warranty on cockroach extermination'],
      image: 'https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Professional pest control specialist treating cockroaches in a modern kitchen in Goa'
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Termite Control Treatment Goa',
      description: 'Advanced pre-construction and post-construction termite control services in Goa. Best termite treatment company for homes, buildings, wooden furniture protection. Anti-termite treatment specialists across all Goa.',
      features: ['Pre & post-construction termite control', 'Wood termite treatment & soil treatment', '5-year warranty on termite control Goa'],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Close-up of termite inspection on wooden structure in a Goa home'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Bed Bug Treatment Services Goa',
      description: 'Effective bed bug extermination for homes, hotels, resorts, and hostels in Goa. Heat treatment and chemical spray for complete bed bug removal. Best bed bug pest control company in North Goa and South Goa.',
      features: ['Heat treatment for bed bugs Goa', 'Chemical spray bed bug removal', '100% bed bug elimination guarantee'],
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Clean, modern hotel bedroom after professional bed bug treatment in Goa'
    },
    {
      icon: <Rat className="w-12 h-12" />,
      title: 'Rodent Control & Rat Control Goa',
      description: 'Professional rat control and mice control services for residential and commercial properties in Goa. Rodent extermination, trapping, and prevention for homes, restaurants, hotels, warehouses across Goa.',
      features: ['Rat trapping & rodent baiting services', 'Entry point sealing & proofing', 'Ongoing rodent monitoring in Goa'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Rodent control technician inspecting a commercial property in Goa'
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: 'Ant Control Services Goa',
      description: 'Complete ant pest control and ant extermination services in Goa. Red ant control, black ant control, carpenter ant removal for homes and gardens. Eco-friendly ant control solutions across all Goa areas.',
      features: ['All ant species control in Goa', 'Indoor & outdoor ant treatment', 'Eco-friendly ant control methods'],
      image: 'https://images.unsplash.com/photo-1598966895320-6f2365c11b94?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Close-up of ants on an outdoor surface before ant control treatment in Goa'
    },
    {
      icon: <Waves className="w-12 h-12" />,
      title: 'Mosquito Control & Fogging Goa',
      description: 'Professional mosquito fogging services and mosquito control treatment in Goa. Dengue prevention, malaria control, mosquito breeding site elimination for homes, hotels, resorts across North and South Goa.',
      features: ['Mosquito fogging services Goa', 'Larvae treatment & breeding control', 'Dengue & malaria prevention programs'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Outdoor mosquito fogging operation in a residential area in Goa'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Professional <span className="text-primary-500">Pest Control Services in Goa</span>
          </h2>
          <p className="section-subheading mt-4">
            Comprehensive pest management solutions for residential and commercial properties across Goa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-0 overflow-hidden text-left md:text-center border border-gray-100/80 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              {service.image && (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                </div>
              )}

              <div className="p-8">
                <div className="text-primary-600 mb-4 inline-flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-deep-black">{service.title}</h3>
                <p className="text-gunmetal mb-4">{service.description}</p>
                <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gunmetal">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gunmetal mb-6 text-lg">
            Looking for the best pest control services in Goa? Contact Nuclear Pest Control for free pest inspection and consultation. Available for emergency pest control across all Goa locations.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get Free Pest Inspection & Quote</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
