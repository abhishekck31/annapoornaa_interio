import type { Metadata } from "next"

import { newLandingPageBySlug } from "@/content/new-pages"
import type { NewLandingPage } from "@/content/new-pages/types"
import { hasPlaceholder } from "@/lib/business"

import { buildMetadata } from "./metadata"
import { newPageLinks, type NewPageSlug } from "./service-area-links"

/** Local preview of unpublished pages: `SHOW_DRAFT_PAGES=1 next build`. */
const showDrafts = process.env.SHOW_DRAFT_PAGES === "1"

/**
 * Returns the page if it should render, or null if it should 404.
 *
 * Throws at build time if a page marked `published` still contains a
 * `{{CONFIRM: ...}}` placeholder, so unconfirmed facts can never go live.
 */
export function getNewPage(slug: NewPageSlug): NewLandingPage | null {
  const page = newLandingPageBySlug.get(slug)
  const link = newPageLinks.find((entry) => entry.slug === slug)
  if (!page || !link) throw new Error(`New landing page "${slug}" is not registered`)

  if (link.published && hasPlaceholder(JSON.stringify(page))) {
    throw new Error(
      `"${slug}" is marked published but still contains {{CONFIRM}} placeholders. ` +
        "Fill them in (see NEW_PAGES_PLACEHOLDERS.md) or set published: false.",
    )
  }

  return link.published || showDrafts ? page : null
}

export function newPageMetadata(slug: NewPageSlug): Metadata {
  const page = getNewPage(slug)
  if (!page) return {}

  const published = newPageLinks.some((entry) => entry.slug === slug && entry.published)

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
    image: page.image,
    imageAlt: page.imageAlt,
    keywords: [page.primaryKeyword],
    // Drafts previewed with SHOW_DRAFT_PAGES are never indexable.
    index: published,
  })
}
