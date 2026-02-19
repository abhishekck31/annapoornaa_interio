import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import AboutSection from '@/components/about-section'
import Footer from '@/components/footer'
import CTASection from '@/components/cta-section'
import StatsSection from '@/components/stats-section'

// Dynamically import heavy components to reduce initial bundle size
const ProcessTimeline = dynamic(() => import('@/components/process-timeline'), {
  loading: () => <div className="py-16 bg-white" />
})
const DifferenceSection = dynamic(() => import('@/components/difference-section'), {
  loading: () => <div className="py-16 bg-white" />
})
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'), {
  loading: () => <div className="py-16 bg-white" />
})
const ProjectsSection = dynamic(() => import('@/components/projects-section'), {
  loading: () => <div className="py-16 bg-white" />
})
const FAQSection = dynamic(() => import('@/components/faq-section'), {
  loading: () => <div className="py-16 bg-white" />
})
const ClientLogosSection = dynamic(() => import('@/components/client-logos-section'), {
  loading: () => <div className="py-16 bg-white" />
})

// SEO: Enhanced comprehensive metadata for the homepage with high-intent keywords
export const metadata: Metadata = {
  title: 'Best Interior Company Near Me | Yelahanka Interior Design',
  description: 'Top-rated interior design & construction company near you in Yelahanka, Bangalore. Award-winning designs, modular kitchens & turnkey construction. Free quote!',
  keywords: [
    'Best Interior Company near me',
    'Interior Design near me',
    'Construction company near me',
    'Yelahanka best interior',
    'Interior Designers in Yelahanka',
    'Construction Company Yelahanka',
    'Best Interior Designers Bangalore',
    'Modular Kitchen designers Bangalore',
    'Annapoornaa Interio'
  ],
  metadataBase: new URL('https://annapoornaainterio.com'),
  alternates: {
    canonical: 'https://annapoornaainterio.com',
  },
  openGraph: {
    title: 'Best Interior Company Near Me | Yelahanka Interior Design',
    description: 'Top-rated interior design & construction company near you in Yelahanka, Bangalore. Award-winning designs, modular kitchens & turnkey construction.','
    url: 'https://annapoornaainterio.com',
    siteName: 'Annapoornaa Interio',
    images: [
      {
        url: 'https://annapoornaainterio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Annapoornaa Interio - Best Interior Designers in Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Company Near Me | Yelahanka Bangalore',
    description: 'Yelahanka\'s best interior design & construction company. Serving Whitefield, HSR Layout, JP Nagar, Koramangala & all Bangalore. Free consultation!',
    images: ['https://annapoornaainterio.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}


// BEST PRACTICE: Define contact info once to avoid repetition and errors.
const contactDetails = {
  email: "info@annapoornainterio.com",
  phone1: "+91 99000 94942",
  phone2: "+91 80731 41413",
  address: {
    streetAddress: "1st floor, #395, 8th 'B' Main, 14th 'B' cross, 2nd stage, 'B' sector",
    addressLocality: "Yelahanka New Town",
    addressRegion: "Bangalore",
    postalCode: "560064",
    addressCountry: "IN"
  }
}

export default function Home() {

  // SEO: JSON-LD Structured Data for Local Business. This is crucial for local search visibility.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignBusiness',
    'name': 'Annapoornaa Interio',
    'image': 'https://www.annapoornainterio.com/logo.png',
    '@id': 'https://annapoornaainterio.com',
    'url': 'https://annapoornaainterio.com',
    'telephone': contactDetails.phone1,
    'email': contactDetails.email,
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      ...contactDetails.address
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 13.1006,
      'longitude': 77.5963
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Yelahanka' },
      { '@type': 'City', 'name': 'Bangalore' },
      { '@type': 'City', 'name': 'Whitefield' },
      { '@type': 'City', 'name': 'HSR Layout' },
      { '@type': 'City', 'name': 'JP Nagar' },
      { '@type': 'City', 'name': 'Koramangala' }
    ],
    'serviceArea': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': 13.1006,
        'longitude': 77.5963
      },
      'geoRadius': '30000'
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Interior Design and Construction Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Interior Design Services',
            'description': 'Home and office interior design near Yelahanka, Bangalore'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Construction Services',
            'description': 'Residential and commercial construction company near Yelahanka'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Modular Kitchen Design',
            'description': 'Custom modular kitchen design and installation in Bangalore'
          }
        }
      ]
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': '127'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '09:00',
      'closes': '20:00'
    },
  };


  return (
    <>
      {/* PERFORMANCE: ScrollAnimator removed due to missing module */}
      {/* <ScrollAnimator /> */}

      {/* SEO: Adding structured data to the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ClientLogosSection />
        <ProcessTimeline />
        <DifferenceSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}