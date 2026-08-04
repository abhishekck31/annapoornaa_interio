import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: "Project Gallery | Interior & Construction Portfolio Bangalore | ACIPL" },
  description: 'Explore ACIPL\'s project gallery — completed home interiors, office designs and construction projects in Yelahanka, Hebbal and across Bangalore.',
  alternates: { canonical: 'https://www.ac-ipl.in/gallery' }
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
      "name": "Gallery",
      "item": "https://www.ac-ipl.in/gallery"
    }
  ]
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="schema-breadcrumb-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
