import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About ACIPL | Interior & Construction Company in Yelahanka, Bangalore',
  description: 'Learn about Annapoorneshwari Constructions Interiors Pvt Ltd — Bangalore\'s trusted interior design & construction company led by CEO Raghu Lakshmipathi. Based in Yelahanka New Town.',
  alternates: { canonical: 'https://www.ac-ipl.in/about' }
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
      "name": "About",
      "item": "https://www.ac-ipl.in/about"
    }
  ]
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="schema-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
