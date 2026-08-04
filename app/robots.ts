import type { MetadataRoute } from "next"

import { absoluteUrl, SITE_URL } from "@/lib/seo/site"

/**
 * Replaces the previous static `public/robots.txt`, which pointed at the
 * non-canonical bare host. Generating it keeps the sitemap URL tied to
 * `siteConfig` so the two can never drift apart.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // API routes return JSON and have no search value.
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  }
}
