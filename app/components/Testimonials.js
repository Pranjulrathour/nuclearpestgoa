'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Mehta',
      role: '5-Star Beach Resort Owner, Calangute, North Goa',
      rating: 5,
      text: 'Nuclear Pest Control is the best pest control company in North Goa! They have been providing professional termite control, cockroach control, and rodent control services to our beach resort for 2 years. No pest complaints from guests. Their eco-safe pest control methods are perfect for our hotel. Highly recommend for all hotels and resorts in Goa!',
      image: '👨‍💼'
    },
    {
      name: 'Sarah D\'Souza',
      role: 'Luxury Villa Owner, Candolim Beach, Goa',
      rating: 5,
      text: 'Excellent termite treatment service in Candolim! Nuclear Pest Control handled our severe termite infestation problem efficiently with professional pre-construction termite treatment. Their pest control technicians were courteous and used eco-friendly chemicals safe for my family. Best termite control company in Goa. 5-year warranty gives peace of mind!',
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Fine Dining Restaurant Owner, Panjim, Goa',
      rating: 5,
      text: 'As a restaurant owner in Panjim, pest control is critical for food safety and hygiene compliance. Nuclear Pest Control provides the best cockroach control and rodent control services in Goa. They work discreetly during off-hours and ensure 100% pest elimination. Government-approved pest control perfect for restaurants in Goa. Affordable and reliable!',
      image: '👨‍🍳'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-deep-black">
            Customer Reviews <span className="text-primary-600">Best Pest Control Services Goa</span>
          </h2>
          <p className="section-subheading mt-4">
            Real Reviews from Satisfied Customers | Top-Rated Pest Control Company in Goa | Trusted by Hotels, Villas, Restaurants & Homes Across North Goa, South Goa, Panjim, Margao
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 relative border border-gray-100/80 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200" />
              
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold font-sans text-deep-black">{testimonial.name}</h4>
                  <p className="text-sm text-gunmetal">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-hazard-yellow text-hazard-yellow" />
                ))}
              </div>

              <p className="text-gunmetal italic">
                &quot;{testimonial.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
