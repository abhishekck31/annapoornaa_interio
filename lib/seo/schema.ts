/**
 * JSON-LD builders. All of them read from `siteConfig`, so the business name,
 * phone, address, logo and social profiles can never drift apart between pages.
 *
 * The organisation is emitted ONCE per page from the root layout under a stable
 * `@id`, and every other schema on the page references that `@id` rather than
 * re-declaring the business. That is what keeps Google from seeing several
 * competing entities for the same company.
 */

import { absoluteUrl, siteConfig } from "./site"

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`
export const WEBSITE_ID = `${siteConfig.url}/#website`

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.streetAddress,
  addressLocality: siteConfig.address.addressLocality,
  addressRegion: siteConfig.address.addressRegion,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.addressCountry,
}

/**
 * The single canonical business entity. `HomeAndConstructionBusiness` is a
 * LocalBusiness subtype, so this covers both the Organization and LocalBusiness
 * requirements without declaring two overlapping entities.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: [...siteConfig.alternateNames],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: siteConfig.logo,
    },
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    foundingDate: siteConfig.foundingYear,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      "Bangalore",
      "Yelahanka",
      "Hebbal",
      "Whitefield",
      "Koramangala",
      "HSR Layout",
      "Electronic City",
      "JP Nagar",
      "Marathahalli",
      "Thanisandra",
      "Jakkur",
    ].map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...siteConfig.openingHours.days],
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    sameAs: [...siteConfig.socials],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.ratingValue,
      reviewCount: siteConfig.rating.reviewCount,
      bestRating: siteConfig.rating.bestRating,
    },
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-IN",
  }
}

export interface ServiceSchemaOptions {
  name: string
  description: string
  /** Root-relative path of the page this service is described on. */
  path: string
  /** e.g. "Whitefield, Bangalore" */
  areaServed?: string
  serviceType?: string
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed = "Bangalore",
  serviceType,
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "City", name: areaServed },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.telephone,
        contactType: "sales",
      },
    },
  }
}

export interface FaqItem {
  question: string
  answer: string
}

export function faqPageSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export interface BreadcrumbItem {
  name: string
  path: string
}

export function breadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
