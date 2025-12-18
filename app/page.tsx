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

// SEO: Enhanced comprehensive metadata for the homepage with location-specific keywords
export const metadata: Metadata = {
  title: 'Top Interior Designers in Yelahanka, Bangalore | Annapoornaa Interio',
  description: 'Searching for the best interior designers in Yelahanka, Bangalore? Annapoornaa Interio offers premium home interiors, modular kitchens & turnkey construction. Book a free consultation!',
  keywords: [
    // High Priority - Yelahanka Specific
    'Interior Designers in Yelahanka',
    'Interior Designers Near Me Yelahanka',
    'Best Interior Designers Yelahanka New Town',
    'Home Interiors Yelahanka',
    'Turnkey Interiors Yelahanka',
    'Office Interiors Yelahanka',
    'Budget Interior Designers Yelahanka',
    'Luxury Interior Designers Yelahanka',
    'Interior Decorators Yelahanka',
    'Residential Interior Designers Yelahanka',
    'Interior Designers Near Me', // General "Near Me" for local capture

    // Broader Bangalore Terms
    'interior designers Bangalore',
    'best interior company Bangalore',
    'home interior design Bangalore',
    'office interior design Bangalore',
    'house contractors Bangalore',
    'home construction Bangalore',
    'house construction Bangalore',
    'interior decorators Bangalore',
    'construction company Bangalore',
    'renovation company Bangalore',
    'interior designers Whitefield',
    'interior designers Koramangala',
    'interior designers HSR Layout',
    'interior designers Indiranagar',
    'interior designers Malleshwaram',
    'interior designers Rajajinagar',
    'interior designers Banashankari',
    'interior designers Marathahalli',
    'interior designers Hebbal',
    'interior designers Electronic City',
    'interior designers JP Nagar',
    'interior designers BTM Layout',
    'home interiors Bangalore',
    'office interiors Bangalore',
    'modular kitchen Bangalore',
    'renovation Bangalore',
    'construction Bangalore',
    'PMC services Bangalore',
    'design and drawings Bangalore',
    'top interior designers Bangalore',
    'interior design company Bangalore',
    'Annapoornaa Interio',
    'Annapoorna Interio',
    'luxury interior design Bangalore',
    'affordable interior designers Bangalore',
    'low cost interior designers Bangalore',
    '3bhk interior cost Bangalore',
    '2bhk interior cost Bangalore',
    'villa interior design Bangalore',
    'turnkey construction cost Bangalore'
  ],
  metadataBase: new URL('https://annapoornaainterio.com'),
  alternates: {
    canonical: 'https://annapoornaainterio.com',
  },
  openGraph: {
    title: 'Best Interior Designers in Yelahanka, Bangalore | Luxury & Affordable',
    description: 'Top Interior Designers in Yelahanka, Bangalore. Luxury Home Interiors, Modular Kitchens & Turnkey Construction. Visit our Yelahanka studio!',
    url: 'https://annapoornaainterio.com',
    siteName: 'Annapoornaa Interio',
    images: [
      {
        url: 'https://annapoornaainterio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Annapoornaa Interio - Best Interior Designers in Yelahanka, Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designers in Yelahanka, Bangalore | Luxury & Affordable',
    description: 'Top Interior Designers in Yelahanka, Bangalore. Luxury Home Interiors, Modular Kitchens & Turnkey Construction. Visit our Yelahanka studio!',
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
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
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
    '@type': 'InteriorDesignBusiness', // More specific than LocalBusiness
    'name': 'Annapoornaa Interio',
    'image': 'https://www.annapoornainterio.com/logo.png', // Replace with your logo URL
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
      'latitude': 13.1006, // Approx. Latitude for Yelahanka New Town
      'longitude': 77.5963 // Approx. Longitude for Yelahanka New Town
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Yelahanka'
      },
      {
        '@type': 'City',
        'name': 'Bangalore'
      }
    ],
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