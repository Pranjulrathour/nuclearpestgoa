'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'complete-pest-control-guide-goa',
      title: 'Complete Guide to Pest Control Services in Goa 2024',
      excerpt: 'Are you searching for pest control near me in Goa? This comprehensive guide covers everything about professional pest management, pricing, methods, and how to choose the best pest control company in Goa.',
      category: 'Pest Control Guide',
      readTime: '8 min read',
      date: 'November 8, 2024',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      keywords: ['pest control goa', 'best pest control near me', 'pest control services'],
    },
    {
      id: 2,
      slug: 'termite-control-treatment-goa',
      title: 'Complete Termite Control & Treatment Guide for Goa 2024',
      excerpt: 'Everything about termite control in Goa - treatment methods, costs, inspection process, prevention tips, and why professional termite treatment is essential for Goa properties.',
      category: 'Termite Control',
      readTime: '10 min read',
      date: 'November 8, 2024',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800',
      keywords: ['termite treatment', 'termite control goa', 'anti-termite treatment'],
    },
    {
      id: 3,
      slug: 'bed-bug-treatment-elimination-goa',
      title: 'Complete Bed Bug Treatment Guide for Goa Hotels & Homes',
      excerpt: 'Professional bed bug treatment guide covering heat treatment, chemical methods, hotel solutions, elimination process, costs, and prevention strategies for Goa properties.',
      category: 'Bed Bug Control',
      readTime: '9 min read',
      date: 'November 8, 2024',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800',
      keywords: ['bed bug treatment', 'bed bug exterminator', 'hotel pest control'],
    },
    {
      id: 4,
      slug: 'rodent-rat-control-services-goa',
      title: 'Complete Rodent & Rat Control Guide for Goa 2024',
      excerpt: 'Professional rodent control services guide - rat extermination, mice control, health risks, commercial services, prevention techniques, and complete elimination strategies.',
      category: 'Rodent Control',
      readTime: '10 min read',
      date: 'November 8, 2024',
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800',
      keywords: ['rodent control', 'rat control services', 'mice extermination'],
    },
    {
      id: 5,
      slug: 'cockroach-mosquito-control-goa',
      title: 'Cockroach & Mosquito Control Guide for Goa',
      excerpt: 'Complete guide to cockroach pest control and mosquito control in Goa - treatment methods, disease prevention, commercial services, costs, and comprehensive elimination strategies.',
      category: 'Multi-Pest Control',
      readTime: '12 min read',
      date: 'November 8, 2024',
      image: 'https://images.unsplash.com/photo-1577796170283-3fbb78c59d90?w=800',
      keywords: ['cockroach control', 'mosquito control', 'dengue prevention'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pest Control Blog - Expert Tips & Guides
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional pest control guides for Goa | Termite, Bed Bug, Rodent, Cockroach & Mosquito Control | Expert Tips from Nuclear Pest Control
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-dark-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Read Full Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Professional Pest Control Services?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert pest control services across all of Goa. Call now for free inspection!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Call: +91-98765-43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-dark-800 transition-all duration-300 shadow-lg"
              >
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Keywords Footer */}
      <section className="bg-dark-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm">
            <p className="font-semibold text-white mb-2">Related Topics:</p>
            <p className="leading-relaxed">
              pest control goa | pest control services goa | best pest control goa | termite control goa | 
              bed bug treatment goa | rodent control goa | cockroach control goa | mosquito control goa | 
              pest control near me | pest control services near me | professional pest control | 
              eco-friendly pest control | emergency pest control | commercial pest control | 
              residential pest control | pest management services
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
