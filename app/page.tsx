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
  alternates: { canonical: 'https://www.ac-ipl.in/' }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACIPL offers home interiors, office & corporate interiors, residential & commercial construction, renovation, PMC (project management & consultancy), and design & drawings services across Bangalore, Yelahanka and Hebbal."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, ACIPL provides free initial consultations. Contact us at +91 99000 94942 or visit our office in Yelahanka New Town, Bangalore."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary by scope. We ensure all projects are delivered within the agreed timeline. Home interiors typically take 45–90 days; construction projects are scoped individually."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle permits and regulations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our PMC team handles all necessary permits, BBMP approvals and regulatory compliance for construction projects in Bangalore."
      }
    }
  ]
};

export default function Home() {
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
