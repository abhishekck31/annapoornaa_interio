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

// SEO: Added comprehensive metadata for the homepage.
export const metadata: Metadata = {
  title: 'Annapoorna Interio | Top Interior Designers in Bangalore',
  description: 'Annapoorna Interio offers bespoke interior design services in Yelahanka, Bangalore. From residential to commercial projects, we craft beautiful and functional spaces. Contact us for a free consultation.',
  keywords: ['interior designers Bangalore', 'home interiors Yelahanka', 'commercial interior design', 'Annapoorna Interio', 'best interior designers', 'modular kitchen Bangalore'],
  metadataBase: new URL('https://www.ac-ipl.in'), 
  openGraph: {
    title: 'Annapoorna Interio | Top Interior Designers in Bangalore',
    description: 'Bespoke interior design services for residential and commercial spaces in Bangalore.',
    url: 'https://www.ac-ipl.in', 
    siteName: 'Annapoorna Interio',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
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
    '@type': 'LocalBusiness',
    'name': 'ACIPL',
    'image': 'https://www.annapoornainterio.com/logo.png', // Replace with your logo URL
    '@id': '',
    'url': 'https://www.annapoornainterio.com', // Replace with your actual domain
    'telephone': contactDetails.phone1,
    'email': contactDetails.email,
    'address': {
      '@type': 'PostalAddress',
      ...contactDetails.address
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 13.1006, // Approx. Latitude for Yelahanka New Town
      'longitude': 77.5963 // Approx. Longitude for Yelahanka New Town
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