/**
 * The list of indexable routes, used to generate the sitemap.
 *
 * Keep this in sync with the `app/` directory. Landing pages are appended
 * automatically from the landing page registry, so adding a location page never
 * requires touching the sitemap.
 */

import type { MetadataRoute } from "next"

import { landingPageSlugs } from "./landing-pages"
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

export const allRoutes: SiteRoute[] = [...staticRoutes, ...landingRoutes, ...newPageRoutes]
