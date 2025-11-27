'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const CONTACT_NUMBER = '+91 70200 62681'
const WHATSAPP_LINK = 'https://wa.me/917020062681'

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
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
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

  const contactTiles = [
    {
      icon: Phone,
      label: 'Call Us',
      value: CONTACT_NUMBER,
      link: `tel:${CONTACT_NUMBER.replace(/[^\d+]/g, '')}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@nuclearpestgoa.in',
      link: 'mailto:info@nuclearpestgoa.in'
    },
    {
      icon: MapPin,
      label: 'Head Office',
      value: '37/C, Indona, Davorlim, Behind Amul Icecream Shop, Salcete, Margao, Goa 403601'
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Open 24 Hours · 7 Days'
    }
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-100 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-accent-100 blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-primary-500">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s plan your pest-free property</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share photos on WhatsApp or book a free site inspection. We reply 24/7 and dispatch across North & South Goa.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          {/* Left column */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-gray-900 text-white p-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-500">WhatsApp Support</p>
                  <p className="text-2xl font-semibold text-gray-900">{CONTACT_NUMBER}</p>
                </div>
              </div>
              <p className="text-gray-600">
                Send infestation photos, floor plans, or Google Maps locations. We confirm pest type, share prices, and lock a slot instantly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold">
                  Chat on WhatsApp
                </a>
                <a href={`tel:${CONTACT_NUMBER.replace(/[^\d+]/g, '')}`} className="px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-gray-800 hover:border-gray-300">
                  Call the Desk
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactTiles.map((tile) => (
                <div key={tile.label} className="rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-sm">
                  <tile.icon className="w-6 h-6 text-primary-500" />
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500">{tile.label}</p>
                  {tile.link ? (
                    <a href={tile.link} className="mt-2 block text-lg font-semibold text-gray-900 hover:text-primary-600">
                      {tile.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-gray-900">{tile.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="rounded-[32px] border border-gray-100 bg-white shadow-xl p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Request inspection</p>
                <h3 className="text-3xl font-semibold text-gray-900">Book a service visit</h3>
                <p className="text-gray-600">We reply within 10 minutes between 8am–10pm and keep WhatsApp support online 24/7.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Input name="name" label="Full Name *" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                <Input name="phone" label="Phone Number *" value={formData.phone} onChange={handleChange} required placeholder={CONTACT_NUMBER} type="tel" />
                <Input name="email" label="Email (optional)" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" type="email" />

                <div>
                  <Label>Service Required *</Label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  >
                    <option value="">Select a service</option>
                    <option value="cockroach">Cockroach Control</option>
                    <option value="termite">Termite Control</option>
                    <option value="bedbug">Bed Bug Treatment</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="mosquito">Mosquito Control</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label>Message *</Label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe the pest issue and location"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gray-900 text-white py-3 text-sm font-semibold shadow-lg hover:bg-primary-600 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send Request'}
                </button>

                {submitStatus === 'success' && <Alert tone="success" message="Thank you! We’ll confirm shortly." />}
                {submitStatus === 'error' && <Alert tone="error" message="Something went wrong. Please try again." />}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Input({ label, name, onChange, value, placeholder, type = 'text', required }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
    </div>
  )
}

function Label({ children }) {
  return <label className="block text-sm font-medium text-gray-700 mb-2">{children}</label>
}

function Alert({ tone, message }) {
  const isSuccess = tone === 'success'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl px-4 py-3 text-sm font-medium ${
        isSuccess ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
      }`}
    >
      {isSuccess ? <CheckCircle className="w-4 h-4 inline mr-2" /> : null}
      {message}
    </motion.div>
  )
}
