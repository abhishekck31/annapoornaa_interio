import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: "Interior Design & Construction Services in Bangalore | ACIPL" },
  description: 'Home interiors, office design, residential & commercial construction, renovation and PMC services in Yelahanka, Hebbal & all of Bangalore. Expert team, premium materials.',
  alternates: { canonical: 'https://www.ac-ipl.in/services' }
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
      "name": "Services",
      "item": "https://www.ac-ipl.in/services"
    }
  ]
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="schema-breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
