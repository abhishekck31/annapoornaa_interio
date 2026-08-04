import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: { absolute: "Featured Interior & Construction Projects in Bangalore | ACIPL" },
  description: 'Browse ACIPL\'s featured projects — office interiors (Ulsoor, Hebbal), home designs and construction work across Yelahanka and Bangalore. View completed case studies.',
  alternates: { canonical: 'https://www.ac-ipl.in/featured-projects' }
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
      "name": "Featured Projects",
      "item": "https://www.ac-ipl.in/featured-projects"
    }
  ]
}

export default function FeaturedProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="schema-breadcrumb-featured-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
