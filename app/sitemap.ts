import type { MetadataRoute } from "next"

import { allRoutes } from "@/lib/seo/routes"
import { absoluteUrl } from "@/lib/seo/site"

/**
 * Generated from the route registry so new landing pages appear automatically.
 * URLs use the canonical `www` host — the bare host 307-redirects, and a
 * sitemap full of redirects wastes crawl budget.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return allRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
