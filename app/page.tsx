import { Metadata } from 'next'
import JsonLd from '@/components/seo/json-ld'
import { faqPageSchema, ORGANIZATION_ID } from '@/lib/seo/schema'
import { absoluteUrl, siteConfig } from '@/lib/seo/site'
import { homepageFaqs } from '@/lib/seo/homepage-faqs'
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

export const metadata: Metadata = {
  title: { absolute: 'Interior Designers in Bangalore | Interiors & Construction | ACIPL' },
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
  // Canonical must use the www host — the bare host 307-redirects.
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title: 'Top Interior Designers in Bangalore | Turnkey Interiors & Decorators',
    description: 'Looking for the best interior designers in Bangalore? ACIPL offers expert residential and commercial interior solutions. Get a free quote today!',
    url: absoluteUrl('/'),
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'ACIPL - Premium Interior Design & Construction in Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Interior Designers in Bangalore | Turnkey Interiors & Decorators',
    description: 'ACIPL offers turnkey interior design and construction services across Bangalore. Transforming houses into beautiful homes.',
    images: [siteConfig.ogImage],
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
}


/**
 * The business entity itself is declared once in the root layout. This page
 * only adds what is specific to it: the service catalogue and the FAQ markup
 * for the FAQ section rendered below. Both reference the organisation by @id
 * rather than restating its name, address and phone.
 */
const serviceCatalogueSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Design and Construction Services',
  url: absoluteUrl('/services'),
  provider: { '@id': ORGANIZATION_ID },
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Home Interior Design',
        description: 'Premium home interiors, wardrobes, and modular kitchens in Bangalore.',
        provider: { '@id': ORGANIZATION_ID },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Turnkey Construction',
        description: 'Complete residential and commercial construction services from foundation to finish.',
        provider: { '@id': ORGANIZATION_ID },
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Office Interior Design & Renovation',
        description: 'Corporate office interior design, fit-out and renovation services across Bangalore.',
        provider: { '@id': ORGANIZATION_ID },
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <JsonLd id="schema-service-catalogue" data={serviceCatalogueSchema} />
      <JsonLd id="schema-homepage-faq" data={faqPageSchema(homepageFaqs)} />

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
