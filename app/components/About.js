'use client'

import { Shield, Users, Award, Clock, Sparkles, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const features = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Govt. Licensed',
      description: 'Government-approved pest control company in Goa using eco-safe, low-odor chemicals.',
      gradient: 'from-blue-500/80 via-blue-400/70 to-sky-500/70',
      tag: 'Compliance Ready'
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Elite Crew',
      description: '15+ pest control technicians trained for apartments, villas, hotels, and industrial plants.',
      gradient: 'from-purple-500/80 via-fuchsia-500/70 to-pink-500/70',
      tag: 'Expert Team'
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Assured Warranty',
      description: '5-year termite control warranty with digital inspection photos and service reports.',
      gradient: 'from-primary-500/80 via-primary-400/70 to-orange-400/70',
      tag: 'Trusted'
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: '24/7 Dispatch',
      description: 'Same-day cockroach, rodent, and mosquito treatment with GPS-tracked service vans.',
      gradient: 'from-accent-500/80 via-emerald-400/70 to-lime-400/70',
      tag: 'Always On'
    }
  ]

  const stats = [
    { value: '10,000+', label: 'Homes & Resorts Protected' },
    { value: '4.8★', label: 'Average Client Rating' },
    { value: '120', label: 'Goa Pin Codes Covered' },
  ]

  const journey = [
    { title: 'Discovery Call', body: 'Capture pest history, floor plan & urgency within 15 minutes.' },
    { title: 'On-Site Diagnosis', body: 'AI-assisted moisture & thermal scans map hidden colonies.' },
    { title: 'Precision Treatment', body: 'Dual-chemistry spray, gel baiting & barrier sealing executed.' },
    { title: 'Post-Care Ritual', body: 'Digital report, warranty card, and 30-day health check reminders.' },
  ]

  const imageHighlights = [
    {
      src: 'https://mmpestcontrol.in/wp-content/uploads/2025/03/3.webp',
      alt: 'Technician preparing eco-safe pest control treatment kit in Goa facility',
      badge: 'Eco Lab'
    },
    {
      src: 'https://mmpestcontrol.in/wp-content/uploads/2025/03/51.webp',
      alt: 'Pest control expert inspecting luxury villa interiors',
      badge: 'Resort Ops'
    }
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-primary-200 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">About Nuclear Pest Control</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Trusted <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">pest control company in Goa</span> for homes, hotels, and businesses.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuclear Pest Control delivers licensed pest control services across Goa, including termite control, bed bug treatment, cockroach control, and hotel pest management. We keep the language simple so property owners know exactly what happens at every step.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-6 shadow-soft relative overflow-hidden">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-primary-50/40 to-accent-50/40 opacity-0 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-primary group w-full sm:w-auto justify-center">
                Book Free Diagnosis
                <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-accent-500" />
                <span>ISO 16636 · Govt. Regd.</span>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Simple Service Flow</p>
              <div className="space-y-5">
                {journey.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="w-10 h-10 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      {index !== journey.length - 1 && <span className="w-px flex-1 bg-gradient-to-b from-gray-200 to-transparent" />}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-primary-200/30 via-white/0 to-accent-200/30 blur-3xl" />
            <div className="relative space-y-6">
              {imageHighlights.map((image, index) => (
                <div key={image.alt} className="relative rounded-3xl overflow-hidden border border-white/40 bg-slate-950/80 shadow-2xl backdrop-blur">
                  <div className="aspect-[4/3] sm:aspect-[5/4] relative">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 90vw" priority={index === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
                  </div>
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-accent-400" />
                    {image.badge}
                  </div>
                  {index === 0 && (
                    <div className="absolute -bottom-6 right-6 w-44 rounded-2xl bg-white text-gray-900 p-4 shadow-xl">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Response Window</p>
                      <p className="text-2xl font-bold">45 min</p>
                      <p className="text-xs text-gray-500">Avg dispatch across Goa</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div key={feature.title} className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(250,82,82,0.08) 100%)' }} />
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-5 shadow-lg`}>{feature.icon}</div>
              <span className="inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">{feature.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
          </div>
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Goa Coverage</p>
              <h3 className="text-3xl md:text-4xl font-bold mt-4">Pest control for every beach belt, heritage home, and factory</h3>
              <p className="text-white/80 mt-4 leading-relaxed">
                Panjim, Margao, Vasco, Mapusa, Calangute, Candolim, Baga, Colva, Ponda, Porvorim, plus 60+ Goa pin codes. We treat termites, cockroaches, bed bugs, rodents, and mosquitoes with the same proven checklist.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['ISO Certified', 'Eco-Friendly', 'Fully Insured'].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-accent-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-glow space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Avg. Response Time</p>
                  <p className="text-4xl font-bold">38 mins</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold">Live Ops</div>
              </div>
              <p className="text-sm text-gray-600">WhatsApp, phone, and email tickets are monitored round-the-clock so we can dispatch a pest control team fast.</p>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-primary-600 transition-all" onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}>
                Talk to Pest Expert
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
