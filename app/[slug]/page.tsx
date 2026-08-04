import type { Metadata } from "next"
import { notFound } from "next/navigation"

import LandingPageTemplate from "@/components/seo/landing-page"
import { landingPageBySlug, landingPageSlugs } from "@/lib/seo/landing-pages"
import { buildMetadata } from "@/lib/seo/metadata"

/**
 * Statically generates every `/[service]-in-[location]` landing page from the
 * registry in `lib/seo/landing-pages.ts`.
 *
 * `dynamicParams = false` means only registered slugs render — anything else
 * 404s, so this route never shadows an unknown path. Existing static routes
 * (e.g. /about, /products) always take precedence over this dynamic segment.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return landingPageSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = landingPageBySlug.get(slug)

  if (!page) return {}

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
    image: page.image,
    imageAlt: page.imageAlt,
    keywords: [
      `${page.service} in ${page.location}`,
      `${page.service} ${page.location} Bangalore`,
      `best ${page.service.toLowerCase()} ${page.location}`,
      `${page.service} contractors Bangalore`,
    ],
  })
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = landingPageBySlug.get(slug)

  if (!page) notFound()

  return <LandingPageTemplate page={page} />
}
