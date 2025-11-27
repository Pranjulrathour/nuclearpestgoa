'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react'
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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Sticky Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-32 space-y-8"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Common questions about pest control services in Goa. Get answers from our expert team.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-white/90 mb-6">
                  Contact us for free pest inspection and consultation!
                </p>
                <a
                  href="https://wa.me/917020062681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-white text-primary-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300 shadow-xl"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-soft-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-bold text-gray-900 pr-4 flex-1">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 ${openIndex === index ? 'text-primary-600' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
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
