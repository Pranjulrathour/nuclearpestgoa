'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call for Pest Control Goa',
      info: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email - Pest Control Services',
      info: 'info@nuclearpestgoa.in',
      link: 'mailto:info@nuclearpestgoa.in'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Service Areas in Goa',
      info: 'North Goa, South Goa, Panjim, Margao - All Goa',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Pest Control Service Hours',
      info: 'Mon-Sat: 8AM-8PM | Emergency: 24/7',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-700 via-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-pure-white">
            Get a Free Quote Today
          </h2>
          <p className="text-xl text-pure-white/90 mt-4 max-w-3xl mx-auto">
            Get Free Pest Inspection & Quote | Call/WhatsApp: +91-98765-43210 | Emergency Pest Control Services Available | Serving North Goa, South Goa, Panjim, Margao & All Goa Areas | Licensed Pest Control Experts
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-pure-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Nuclear Pest Control Goa - Contact Details</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-dark-900 mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-primary-600 transition-colors">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-dark-900 mb-4">Quick Contact</h4>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-pure-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Book Pest Control Service in Goa</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="cockroach">Cockroach Control</option>
                    <option value="termite">Termite Control</option>
                    <option value="bedbug">Bed Bug Treatment</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="ant">Ant Control</option>
                    <option value="mosquito">Mosquito Control</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Describe your pest problem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We&apos;ll contact you shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
