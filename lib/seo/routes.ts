/**
 * The list of indexable routes, used to generate the sitemap.
 *
 * Keep this in sync with the `app/` directory. Landing pages are appended
 * automatically from the landing page registry, so adding a location page never
 * requires touching the sitemap.
 */

import type { MetadataRoute } from "next"

import { areaPages } from "@/content/area-pages"

import { landingPageSlugs } from "./landing-pages"
import { nearbyPages } from "./nearby-pages"
import { publishedNewPageLinks } from "./service-area-links"

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>

export interface SiteRoute {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

/** Routes that exist as their own files under `app/`. */
export const staticRoutes: SiteRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },

  // Core pages
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/featured-projects", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },

  // Expertise
  { path: "/expertise/interior", changeFrequency: "monthly", priority: 0.8 },
  { path: "/expertise/construction", changeFrequency: "monthly", priority: 0.8 },

  // Products
  { path: "/products", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/upvc-windows-doors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/aluminum-doors-windows", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/fire-doors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/system-railings", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/pvc-false-ceilings", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/workstations", changeFrequency: "monthly", priority: 0.7 },

  // Established location pages (hand-built, kept as-is)
  { path: "/bangalore-yelahanka", changeFrequency: "monthly", priority: 0.8 },
  { path: "/interior-designers-in-yelahanka", changeFrequency: "weekly", priority: 0.9 },
  { path: "/home-construction-services-in-yelahanka", changeFrequency: "weekly", priority: 0.9 },
  { path: "/interior-designers-in-hsr-layout-bangalore", changeFrequency: "weekly", priority: 0.9 },
  { path: "/interior-designers-in-indiranagar-bangalore", changeFrequency: "weekly", priority: 0.9 },
  { path: "/interior-designers-in-jayanagar-bangalore", changeFrequency: "weekly", priority: 0.9 },
  { path: "/interior-designers-in-whitefield-bangalore", changeFrequency: "weekly", priority: 0.9 },

  // Hub for the November 2026 area pages
  { path: "/areas-we-serve", changeFrequency: "weekly", priority: 0.8 },

  // Legal
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
]

/** Landing pages generated from the registry by `app/[slug]/page.tsx`. */
export const landingRoutes: SiteRoute[] = landingPageSlugs.map((slug) => ({
  path: `/${slug}`,
  changeFrequency: "weekly" as const,
  priority: 0.9,
}))

/** The October 2026 pages — only those switched to `published`. */
export const newPageRoutes: SiteRoute[] = publishedNewPageLinks.map((link) => ({
  path: `/${link.slug}`,
  changeFrequency: "weekly" as const,
  priority: link.slug.endsWith("-in-bangalore") ? 0.9 : 0.8,
}))

/** The November 2026 area pages (content/area-pages). */
export const areaRoutes: SiteRoute[] = areaPages.map((page) => ({
  path: `/${page.slug}`,
  changeFrequency: "weekly" as const,
  priority: page.kind === "pillar" ? 0.9 : 0.8,
}))

export const allRoutes: SiteRoute[] = [...staticRoutes, ...landingRoutes, ...newPageRoutes, ...areaRoutes]

// Every internal link on an area page must point at a live, indexable route —
// fail the build rather than ship a link to a 404.
{
  const live = new Set(allRoutes.map((route) => route.path))
  const paths = new Set<string>()
  for (const page of areaPages) {
    if (paths.has(page.slug)) throw new Error(`Duplicate route /${page.slug}`)
    paths.add(page.slug)
    const links = [...page.related.map((link) => link.href), ...(page.parent ? [page.parent.path] : [])]
    for (const href of links) {
      if (!live.has(href)) throw new Error(`Area page /${page.slug} links to ${href}, which is not a live route`)
    }
  }
  for (const [slug, links] of Object.entries(nearbyPages)) {
    for (const link of links) {
      if (!live.has(link.href)) throw new Error(`nearby-pages: /${slug} links to ${link.href}, which is not a live route`)
    }
  }
  const counts = new Map<string, number>()
  for (const route of allRoutes) counts.set(route.path, (counts.get(route.path) ?? 0) + 1)
  for (const [path, n] of counts) if (n > 1) throw new Error(`Route ${path} is registered ${n} times`)
}
