'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle, Share2 } from 'lucide-react'
import BlogPost1 from './posts/BlogPost1'
import BlogPost2 from './posts/BlogPost2'
import BlogPost3 from './posts/BlogPost3'
import BlogPost4 from './posts/BlogPost4'
import BlogPost5 from './posts/BlogPost5'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug

  const blogPosts = {
    'complete-pest-control-guide-goa': {
      component: BlogPost1,
      title: 'Complete Guide to Pest Control Services in Goa 2024',
      category: 'Pest Control Guide',
      readTime: '8 min read',
      date: 'November 8, 2024',
      author: 'Nuclear Pest Control Goa Team',
    },
    'termite-control-treatment-goa': {
      component: BlogPost2,
      title: 'Complete Termite Control & Treatment Guide for Goa 2024',
      category: 'Termite Control',
      readTime: '10 min read',
      date: 'November 8, 2024',
      author: 'Termite Specialists Team',
    },
    'bed-bug-treatment-elimination-goa': {
      component: BlogPost3,
      title: 'Complete Bed Bug Treatment Guide for Goa Hotels & Homes',
      category: 'Bed Bug Control',
      readTime: '9 min read',
      date: 'November 8, 2024',
      author: 'Bed Bug Control Experts',
    },
    'rodent-rat-control-services-goa': {
      component: BlogPost4,
      title: 'Complete Rodent & Rat Control Guide for Goa 2024',
      category: 'Rodent Control',
      readTime: '10 min read',
      date: 'November 8, 2024',
      author: 'Rodent Control Specialists',
    },
    'cockroach-mosquito-control-goa': {
      component: BlogPost5,
      title: 'Cockroach & Mosquito Control Guide for Goa',
      category: 'Multi-Pest Control',
      readTime: '12 min read',
      date: 'November 8, 2024',
      author: 'Pest Control Experts',
    },
  }

  const currentPost = blogPosts[slug]

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-primary-600 hover:text-primary-700">
                ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const PostComponent = currentPost.component

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {currentPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {currentPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{currentPost.readTime}</span>
              </div>
              <div className="flex items-center">
                <span>By {currentPost.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-primary-50 border-b border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-dark-900 font-semibold">
              Need immediate pest control? Contact us now!
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <PostComponent />
        </motion.div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Eliminate Pests from Your Property?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get professional pest control services with 100% satisfaction guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91-98765-43210
            </a>
            <Link
              href="/#contact"
              className="bg-dark-900 text-white font-semibold py-3 px-8 rounded-lg hover:bg-dark-800 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">
            More Pest Control Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, post]) => (
                <Link
                  key={key}
                  href={`/blog/${key}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-dark-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">{post.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
