'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Which is the best pest control company in Goa?',
      answer: 'Nuclear Pest Control is the #1 rated and best pest control company in Goa with 10,000+ satisfied customers and 4.8/5-star rating. We provide professional termite control, cockroach control, bed bug treatment, rodent control, mosquito control, and ant control services across North Goa, South Goa, Panjim, Margao, Calangute, Candolim, Baga, Anjuna, Colva, and all Goa areas. Licensed, eco-safe, and trusted by top hotels, resorts, restaurants, villas, and homes in Goa.'
    },
    {
      question: 'How much does pest control cost in Goa?',
      answer: 'Pest control service costs in Goa vary based on property size, pest type, and treatment required. Cockroach control starts from ₹1,500, termite control from ₹3,000, bed bug treatment from ₹2,500, and rodent control from ₹2,000. We offer the most affordable and competitive pest control prices in Goa with transparent pricing. Contact Nuclear Pest Control at +91-98765-43210 for free pest inspection and accurate quote for your home or business in Goa.'
    },
    {
      question: 'Are pest control chemicals safe for children and pets in Goa homes?',
      answer: 'Yes! Nuclear Pest Control uses only eco-friendly, non-toxic, and government-approved pest control chemicals certified by the Central Insecticides Board. Our organic pest control solutions are 100% safe for children, pets, pregnant women, and elderly family members in Goa. We follow strict safety protocols and use chemical-free pest control methods where possible. All our pest control technicians in Goa are trained in safe application techniques ensuring your family\'s safety.'
    },
    {
      question: 'Which areas in Goa do you provide pest control services?',
      answer: 'Nuclear Pest Control provides comprehensive pest control services across ALL areas of Goa. North Goa: Calangute, Candolim, Baga, Anjuna, Vagator, Arambol, Morjim, Mapusa, Assagao, Siolim, Aldona. South Goa: Margao, Colva, Benaulim, Palolem, Agonda, Vasco da Gama, Cavelossim, Betalbatim. Central Goa: Panjim (Panaji), Porvorim, Caranzalem, Dona Paula. We serve residential homes, villas, apartments, hotels, beach resorts, restaurants, cafes, offices, factories, and warehouses throughout Goa.'
    },
    {
      question: 'Do you offer warranty on pest control services in Goa?',
      answer: 'Yes! Nuclear Pest Control provides comprehensive warranty on all pest control services in Goa. Termite control: 5-year warranty. Cockroach treatment: 3-month warranty. Bed bug treatment: 2-month warranty. Rodent control: 1-month warranty. We also offer FREE follow-up visits and re-treatment if pests return within the warranty period. This is why we are the most trusted pest control company in Goa with highest customer satisfaction.'
    },
    {
      question: 'How quickly can you respond to pest emergencies in Goa?',
      answer: 'Nuclear Pest Control offers 24/7 emergency pest control services across Goa with same-day response available for urgent pest infestations. Our standard response time is 24-48 hours for all areas in North Goa and South Goa. For immediate pest control needs in Panjim, Margao, Calangute, Candolim, or anywhere in Goa, contact us via WhatsApp at +91-98765-43210 for fastest response. We prioritize pest emergencies in hotels, restaurants, and commercial establishments.'
    },
    {
      question: 'What types of pest control services do you offer in Goa?',
      answer: 'Nuclear Pest Control offers complete pest management services in Goa: (1) Termite Control - Pre-construction and post-construction anti-termite treatment with 5-year warranty. (2) Cockroach Control - German and American cockroach extermination using gel and spray. (3) Bed Bug Treatment - Heat treatment and chemical spray for hotels and homes. (4) Rodent Control - Professional rat and mice control with trapping and baiting. (5) Mosquito Control - Fogging services and dengue prevention programs. (6) Ant Control - All species ant extermination. (7) General Pest Control - Comprehensive treatment for all pests in Goa properties.'
    },
    {
      question: 'Why choose Nuclear Pest Control over other pest control companies in Goa?',
      answer: '✓ #1 Rated Pest Control Company in Goa with 4.8/5 stars. ✓ 10,000+ Successful Pest Control Services Completed. ✓ Government Licensed & Certified. ✓ Eco-Safe & Non-Toxic Chemicals. ✓ 5-Year Warranty on Termite Control. ✓ Same-Day Emergency Service Available. ✓ Trusted by Top Hotels, Resorts & Restaurants. ✓ Affordable & Transparent Pricing. ✓ Experienced & Professional Technicians. ✓ Complete Goa Coverage - North & South Goa. ✓ 100% Customer Satisfaction Guarantee. ✓ Free Pest Inspection & Consultation.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="section-heading text-dark-900 mb-6">
              Pest Control FAQs <span className="text-primary-600">Goa</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Common Questions About Pest Control Services in Goa | Termite Control | Cockroach Control | Bed Bug Treatment | Pricing | Areas Covered | Safety | Warranty. Get answers from Goa's best pest control experts.
            </p>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">Need Pest Control in Goa?</h3>
              <p className="text-gray-700 mb-4">Contact us for free pest inspection and consultation!</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md border border-gray-100/80 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
