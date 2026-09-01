import { Metadata } from 'next'

import JsonLd from '@/components/seo/json-ld'
import { breadcrumbSchema, servicesOfferedSchema } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: { absolute: "Interior Design & Construction Services in Bangalore | ACIPL" },
  description: 'Home interiors, office design, residential & commercial construction, renovation and PMC services in Yelahanka, Hebbal & all of Bangalore. Expert team, premium materials.',
  alternates: { canonical: 'https://www.ac-ipl.in/services' }
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* One Service node per offering, plus the breadcrumb. The business
          (LocalBusiness) entity is emitted site-wide from the root layout; each
          Service here references it by @id as its provider. */}
      <JsonLd id="schema-services-offered" data={servicesOfferedSchema()} />
      <JsonLd
        id="schema-breadcrumb-services"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      {children}
    </>
  )
}
