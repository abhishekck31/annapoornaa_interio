/**
 * Shape of the 13 landing pages added in the October 2026 SEO batch.
 *
 * These are rendered by `components/seo/new-landing-page.tsx`, which mirrors the
 * markup of the original `/[service]-in-[location]` template but adds:
 *   - optional detail sections (tables, stage lists) between the local context
 *     and "What's included"
 *   - a testimonial that renders only once the client has confirmed it
 *   - stats read from `lib/business.ts` instead of hard-coded numbers
 *   - FAQ answers kept in the server-rendered HTML
 *
 * Any string containing `{{CONFIRM: ...}}` is a fact the client has to supply or
 * confirm before the page goes live. See NEW_PAGES_PLACEHOLDERS.md.
 */

import type { FaqItem } from "@/lib/seo/schema"

export interface DetailTable {
  caption?: string
  columns: string[]
  rows: string[][]
}

export interface DetailSection {
  /** Rendered as an H2 in the same style as the other section headings. */
  heading: string
  paragraphs?: string[]
  table?: DetailTable
  bullets?: string[]
  /** Small print under the table or list. */
  note?: string
}

export interface NewLandingPage {
  slug: string
  kind: "pillar" | "locality"
  /** The query this page exists to rank for. Used for QA, not rendered. */
  primaryKeyword: string
  /** schema.org serviceType, e.g. "House Construction". */
  service: string
  /** "Bangalore" for pillars, the locality for locality pages. */
  location: string
  /** schema.org areaServed, e.g. "Yelahanka, Bengaluru". */
  areaServed: string
  /** Last breadcrumb item. */
  breadcrumbLabel: string
  /** Optional middle breadcrumb — a locality page's Bangalore-wide pillar. */
  parent?: { name: string; path: string }

  title: string
  description: string
  h1: string
  heroBadge: string
  heroSubtitle: string
  /** Root-relative path of an existing project photo in /public. */
  image: string
  imageAlt: string

  /** H2 of the intro section — carries the primary keyword. */
  introHeading: string
  intro: string[]
  localContext: { heading: string; body: string[] }
  details?: DetailSection[]

  highlightsHeading?: string
  highlights: { title: string; body: string }[]
  process: { step: string; body: string }[]

  trustHeading: string
  /**
   * Rendered only when `confirmed` is true. Leave `confirmed: false` until the
   * client confirms the quote is real and may be published.
   */
  testimonial?: { quote: string; name: string; project: string; confirmed: boolean }

  faqHeading: string
  faqs: FaqItem[]
  related: { label: string; href: string }[]

  enquiryCardHeading: string
  /** Pre-filled WhatsApp message — names the service and the locality. */
  enquiryMessage: string
  closingHeading: string
}
