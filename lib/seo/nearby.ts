import { nearbyPages } from "./nearby-pages"

interface Link {
  label: string
  href: string
}

/**
 * A page's hand-picked related links, followed by its nearest same-service
 * pages (lib/seo/nearby-pages.ts) that are not already in the list.
 */
export function withNearby(slug: string, related: readonly Link[]): Link[] {
  const seen = new Set([`/${slug}`, ...related.map((link) => link.href)])
  const extra = (nearbyPages[slug] ?? []).filter((link) => {
    if (seen.has(link.href)) return false
    seen.add(link.href)
    return true
  })
  return [...related, ...extra]
}
