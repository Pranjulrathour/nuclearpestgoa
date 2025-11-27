'use client'

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nuclearpestgoa.in/#localbusiness",
    "name": "Nuclear Pest Control Goa",
    "alternateName": "Nuclear Pest Control",
    "description": "Best Pest Control Services in Goa. Professional termite control, cockroach control, bed bug treatment, rodent control, and mosquito control services across North Goa and South Goa.",
    "url": "https://nuclearpestgoa.in",
    "telephone": "+91-70200-62681",
    "email": "info@nuclearpestgoa.in",
    "priceRange": "₹₹",
    "image": "https://nuclearpestgoa.in/logo.png",
    "logo": "https://nuclearpestgoa.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "37/C, Indona, Davorlim, Behind Amul Icecream Shop, Salcete",
      "addressLocality": "Margao",
      "addressRegion": "Goa",
      "postalCode": "403601",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.2993",
      "longitude": "74.1240"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "North Goa"
      },
      {
        "@type": "City",
        "name": "South Goa"
      },
      {
        "@type": "City",
        "name": "Panjim"
      },
      {
        "@type": "City",
        "name": "Margao"
      },
      {
        "@type": "City",
        "name": "Calangute"
      },
      {
        "@type": "City",
        "name": "Candolim"
      },
      {
        "@type": "City",
        "name": "Baga"
      },
      {
        "@type": "City",
        "name": "Anjuna"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/nuclearpestgoa",
      "https://www.instagram.com/nuclearpestgoa",
      "https://www.linkedin.com/company/nuclearpestgoa"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pest Control Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Termite Control Services in Goa",
            "description": "Professional termite control and termite treatment services across Goa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cockroach Control Services in Goa",
            "description": "Complete cockroach extermination and prevention services in Goa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bed Bug Treatment Services in Goa",
            "description": "Effective bed bug removal and treatment for homes and hotels in Goa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rodent Control Services in Goa",
            "description": "Professional rat and mice control services in Goa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mosquito Control Services in Goa",
            "description": "Mosquito fogging and prevention services across Goa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ant Control Services in Goa",
            "description": "Ant extermination and prevention services in Goa"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best pest control services in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuclear Pest Control is the #1 rated pest control service in Goa, offering professional termite control, cockroach control, bed bug treatment, rodent control, and mosquito control services across North Goa, South Goa, Panjim, and Margao. We serve over 10,000+ satisfied customers with eco-safe solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you respond to pest emergencies in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide 24-48 hour response time for pest control emergencies across Goa. For urgent pest control needs in North Goa or South Goa, we offer same-day service. Contact us via WhatsApp at +91-70200-62681 for immediate assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Are your pest control chemicals safe for children and pets in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nuclear Pest Control uses only eco-friendly, government-approved, and certified pest control chemicals that are safe for children and pets. Our pest control treatments in Goa follow strict safety protocols and use non-toxic solutions for residential and commercial properties."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Goa do you provide pest control services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive pest control services across all of Goa including North Goa (Calangute, Candolim, Baga, Anjuna, Mapusa, Vagator), South Goa (Margao, Colva, Benaulim, Palolem, Vasco), and Panjim. Our pest control experts cover both residential and commercial areas throughout Goa."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of pest control services in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pest control service costs in Goa vary based on property size, pest type, and treatment required. We offer affordable and competitive pricing for termite control, cockroach control, bed bug treatment, and rodent control in Goa. Contact us for a free inspection and quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer warranty on pest control services in Goa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide warranty on all our pest control services in Goa. Termite control comes with a 5-year warranty, cockroach treatment with 3 months warranty, and other services vary. We also offer free follow-up visits if pests return within the warranty period."
        }
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nuclear Pest Control Goa",
    "url": "https://nuclearpestgoa.in",
    "logo": "https://nuclearpestgoa.in/logo.png",
    "description": "Leading pest control company in Goa providing professional pest management services",
    "founder": {
      "@type": "Person",
      "name": "Monali Jadhav"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-70200-62681",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Konkani", "Marathi"]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nuclearpestgoa.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pest Control Services Goa",
        "item": "https://nuclearpestgoa.in/#services"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
