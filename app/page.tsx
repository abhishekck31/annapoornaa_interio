import { Metadata } from 'next'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import AboutSection from '@/components/about-section'
import ProcessTimeline from '@/components/process-timeline'
import DifferenceSection from '@/components/difference-section'
import TestimonialsSection from '@/components/testimonials-section'
import ProjectsSection from '@/components/projects-section'
import Footer from '@/components/footer'
import CTASection from '@/components/cta-section'
import StatsSection from '@/components/stats-section'
import FAQSection from '@/components/faq-section'
import ClientLogosSection from '@/components/client-logos-section'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Interior Designers in Bangalore | Construction & Interiors Yelahanka | Annapoornaa Interio',
  description: 'Looking for the best interior designers in Bangalore? Annapoornaa Interio provides premium home interiors, turnkey construction, and office renovation in Yelahanka & Bangalore. 10+ Years Exp.',
  keywords: [
    'Interior Designers in Bangalore',
    'Interior Designers in Yelahanka',
    'Best Interior Designers Bangalore',
    'Construction Company Bangalore',
    'House Construction in Bangalore',
    'Turnkey Interior Solutions',
    'Modular Kitchen Bangalore',
    'Home Renovation Services Bangalore',
    'Office Interior Designers Bangalore',
    'Civil Contractors Bangalore',
    'Annapoornaa Interio',
    'Annapoorneshwari Constructions'
  ],
  metadataBase: new URL('https://annapoornaainterio.com'),
  alternates: {
    canonical: 'https://annapoornaainterio.com',
  },
  openGraph: {
    title: 'Best Interior Designers & Construction Company Bangalore | Annapoornaa Interio',
    description: 'Transform your space with Bangalore\'s most trusted interior design and construction experts. Specializing in home interiors, villas, and turnkey projects in Yelahanka & Bangalore.',
    url: 'https://annapoornaainterio.com',
    siteName: 'Annapoornaa Interio',
    images: [
      {
        url: 'https://annapoornaainterio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Annapoornaa Interio - Premium Interior Design & Construction',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Interior Designers in Bangalore | Annapoornaa Interio',
    description: 'Expert interior design and construction services in Bangalore. Transforming homes and offices with 10+ years of experience.',
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

  // SEO: Comprehensive JSON-LD Structured Data for Local Dominance & Entity Building
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    'name': 'Annapoornaa Interio',
    'alternateName': ['Annapoorneshwari Constructions Interiors Pvt Ltd', 'Annapoornaa Interiors'],
    'image': 'https://www.annapoornaainterio.com/images/logo.png',
    '@id': 'https://annapoornaainterio.com',
    'url': 'https://annapoornaainterio.com',
    'telephone': contactDetails.phone1,
    'email': contactDetails.email,
    'priceRange': '₹₹-₹₹₹',
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
      { '@type': 'City', 'name': 'North Bangalore' },
      { '@type': 'City', 'name': 'Whitefield' },
      { '@type': 'City', 'name': 'Hebbal' }
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:00',
      'closes': '20:00'
    },
    'sameAs': [
      "https://www.facebook.com/annapoornaainterio",
      "https://www.instagram.com/annapoornaainterio",
      "https://www.linkedin.com/company/annapoornaainterio"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design and Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Interior Design",
            "description": "Premium home interiors, wardrobes, and modular kitchens in Bangalore."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey Construction",
            "description": "Complete residential and commercial construction services from foundation to finish."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Renovation",
            "description": "Corporate office interior design and renovation services."
          }
        }
      ]
    }
  };


  return (
    <>
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
