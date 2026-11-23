import type { Metadata } from "next"
import { notFound } from "next/navigation"

import LandingPageTemplate from "@/components/seo/landing-page"
import NewLandingPageTemplate from "@/components/seo/new-landing-page"
import { areaPageBySlug, areaPages } from "@/content/area-pages"
import { landingPageBySlug, landingPageSlugs } from "@/lib/seo/landing-pages"
import { buildMetadata } from "@/lib/seo/metadata"

/**
 * Statically generates every `/[service]-in-[location]` landing page from the
 * registry in `lib/seo/landing-pages.ts`, plus the November 2026 area pages from
 * `content/area-pages` (rendered with the newer template).
 *
 * `dynamicParams = false` means only registered slugs render — anything else
 * 404s, so this route never shadows an unknown path. Existing static routes
 * (e.g. /about, /products) always take precedence over this dynamic segment.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return [...landingPageSlugs, ...areaPages.map((page) => page.slug)].map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const area = areaPageBySlug.get(slug)
  if (area) {
    return buildMetadata({
      title: area.title,
      description: area.description,
      path: `/${slug}`,
      image: area.image,
      imageAlt: area.imageAlt,
      keywords: [area.primaryKeyword, `${area.service} ${area.location}`, `best ${area.primaryKeyword}`],
    })
  }

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

  const area = areaPageBySlug.get(slug)
  if (area) return <NewLandingPageTemplate page={area} />

  const page = landingPageBySlug.get(slug)

  if (!page) notFound()

  return <LandingPageTemplate page={page} />
}
