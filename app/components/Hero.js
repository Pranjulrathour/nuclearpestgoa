'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute top-40 -left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6"
            >
              Elite Precision Pest Protection for Your Home and Business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-slate-200/90 mb-8 max-w-xl"
            >
              Modern, effective, and safe pest control solutions for Goa&apos;s residential and corporate clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary shadow-lg shadow-primary-500/30">
                Get a Free Quote
              </a>
              <a href="#services" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/15">
                Our Services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative md:block"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-500/40 via-emerald-400/30 to-sky-500/30 blur-2xl opacity-70" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80"
                  alt="Professional pest control treatment in Goa"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs md:text-sm text-slate-100">
                  <div>
                    <p className="font-semibold">Nuclear Pest Control Goa</p>
                    <p className="text-slate-200/80">Government Licensed · Eco-Safe Solutions</p>
                  </div>
                  <div className="rounded-full bg-slate-950/70 px-3 py-1 border border-white/10">
                    24/7 Emergency Support
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
