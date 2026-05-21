import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Interior Design & Construction Blog | ACIPL Bangalore',
  description: 'Read ACIPL\'s blog for interior design tips, construction guides, renovation ideas and local insights for homeowners and businesses in Yelahanka, Hebbal & Bangalore.',
  alternates: { canonical: 'https://www.ac-ipl.in/blog' }
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
      "name": "Blog",
      "item": "https://www.ac-ipl.in/blog"
    }
  ]
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        id="schema-breadcrumb-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
