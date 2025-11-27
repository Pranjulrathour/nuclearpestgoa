'use client'

import Link from 'next/link'
import { Sparkles, ArrowUpRight, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      slug: 'rodent-control-goa',
      title: 'Rodent Control Service',
      description: 'Low-odor rodent baiting and proofing for villas, hotels, and warehouses.',
      image: 'https://sipc.in/images/pest-control/rodent-500x500.webp',
      accent: 'from-rose-400 via-rose-200 to-white',
      badge: 'Critical Response',
      features: ['3-layer bait grid', 'Entry sealing'],
    },
    {
      slug: 'cockroach-control-goa',
      title: 'Cockroach Control Service',
      description: 'German & American cockroaches cleared with gel baiting + residual spray.',
      image: 'https://sipc.in/images/pest-control/cockroach-500x500.webp',
      accent: 'from-orange-400 via-amber-200 to-white',
      badge: 'Kitchen Safe',
      features: ['Gel + spray duo', '3-month cover'],
    },
    {
      slug: 'bed-bug-treatment-goa',
      title: 'Bedbug Control Service',
      description: 'Steam + low-odor chemical pass for suites, homestays, and premium bedding.',
      image: 'https://sipc.in/images/pest-control/bedbug-500x500.webp',
      accent: 'from-fuchsia-400 via-pink-100 to-white',
      badge: 'Hospitality Ready',
      features: ['Steam pass', '14-day audit'],
    },
    {
      slug: 'mosquito-control-goa',
      title: 'Mosquito Control Service',
      description: 'Thermal fogging + ULV misting to shield pools, lawns, and cafés.',
      image: 'https://sipc.in/images/pest-control/mosquito-500x500.webp',
      accent: 'from-emerald-400 via-cyan-100 to-white',
      badge: 'Outdoor Shield',
      features: ['Fog + ULV', 'Larvae kill'],
    },
    {
      slug: 'housefly-control-goa',
      title: 'Housefly Control Service',
      description: 'Food-safe baiting and UV traps for bakeries, cafés, and cloud kitchens.',
      image: 'https://sipc.in/images/pest-control/housefly-500x500.webp',
      accent: 'from-sky-400 via-blue-100 to-white',
      badge: 'Food Zone',
      features: ['UV light traps', 'Sanitation note'],
    },
    {
      slug: 'termite-control-goa',
      title: 'Termite Control Service',
      description: 'Pre & post construction termite shield with soil + wood treatment.',
      image: 'https://sipc.in/images/pest-control/termite-500x500.webp',
      accent: 'from-amber-400 via-yellow-100 to-white',
      badge: '5-Year Cover',
      features: ['Soil & wood', 'Warranty app'],
    },
    {
      slug: 'wood-borer-control-goa',
      title: 'Wood Borer Control Service',
      description: 'Microscopic drill injection that saves bespoke furniture and doors.',
      image: 'https://sipc.in/images/pest-control/wood-borer-500x500.webp',
      accent: 'from-lime-400 via-emerald-100 to-white',
      badge: 'Precision Care',
      features: ['Moisture scan', 'Furniture dome'],
    },
    {
      slug: 'honey-bee-removal-goa',
      title: 'Honey Bee Control Service',
      description: 'Apiary-trained crew relocates colonies safely for balconies and resorts.',
      image: 'https://sipc.in/images/pest-control/honey-bee-500x500.webp',
      accent: 'from-yellow-400 via-amber-100 to-white',
      badge: 'Humane Rescue',
      features: ['Live relocation', 'Netting & seal'],
    },
    {
      slug: 'snake-control-goa',
      title: 'Snake Control Service',
      description: '24/7 certified snake catchers with GPS dispatch and proofing.',
      image: 'https://sipc.in/images/pest-control/snake-500x500.webp',
      accent: 'from-red-400 via-rose-200 to-white',
      badge: 'Command Pod',
      features: ['Resort trained', 'Habitat sweep'],
    },
  ]

  const highlights = [
    { label: 'Goa-wide coverage', value: 'North & South Goa, coastal & city zones' },
    { label: 'Same-day response', value: 'Average 45 min dispatch window' },
    { label: 'Eco & food-safe', value: 'Low-odor pest control chemicals' },
  ]

  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-10 w-80 h-80 bg-white/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-accent-400/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_65%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-4 py-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Goa pest control services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Simple, SEO-ready pest control solutions for Goa homes and businesses.
          </h2>
          <p className="text-lg text-white/80">
            From rodent control, termite treatment, to honey bee relocation, every service uses licensed technicians, eco chemicals, and transparent pricing so Goa customers instantly know what we fix.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/20 bg-white/10 px-6 py-5 shadow-soft backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">{item.label}</p>
              <p className="mt-2 text-white font-semibold">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="group h-full rounded-[36px] border border-gray-100 bg-white/95 shadow-[0_25px_120px_rgba(15,23,42,0.09)] hover:shadow-[0_32px_140px_rgba(15,23,42,0.15)] transition-all duration-500 p-10">
                <div className="relative mx-auto w-[17rem] h-[17rem]">
                  <div className={`absolute inset-[-12px] rounded-full bg-gradient-to-b ${service.accent} opacity-70 blur-[50px]`} />
                  <div className="relative w-full h-full rounded-full bg-white border border-white/70 shadow-inner flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain p-4"
                      sizes="(min-width: 1280px) 12vw, (min-width: 768px) 20vw, 50vw"
                      loading={index > 3 ? 'lazy' : 'eager'}
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 shadow-2xl">
                    {service.badge}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-semibold text-gray-900 text-center">{service.title}</h3>
                <p className="mt-4 text-sm text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-900/10 bg-gray-900 text-white py-3 text-sm font-semibold transition-all duration-300 hover:bg-primary-600"
                  >
                    Book Service
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-900/15 bg-white text-gray-900 py-3 text-sm font-semibold transition-all duration-300 hover:bg-gray-50"
                  >
                    View Service Details
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-[32px] border border-gray-100 bg-white/90 shadow-soft px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Need instant help?</p>
            <h3 className="mt-3 text-3xl font-bold text-gray-900">WhatsApp us a photo & get a treatment plan in 5 minutes.</h3>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Our command pod reviews infestation images, confirms the pest species, and dispatches the closest technician with GPS updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/917020062681"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 text-white px-6 py-4 font-semibold shadow-soft hover:bg-primary-500 transition"
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp ETA
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-900 hover:text-white transition"
            >
              Schedule Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
