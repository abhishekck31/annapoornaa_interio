import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: "Contact ACIPL | Interior Designers in Yelahanka New Town, Bangalore" },
  description: 'Get in touch with ACIPL for interior design, construction & renovation in Yelahanka, Hebbal & Bangalore. Call +91 99000 94942. Free consultation available.',
  alternates: { canonical: 'https://www.ac-ipl.in/contact' }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ac-ipl.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://www.ac-ipl.in/contact"
    }
  ]
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
