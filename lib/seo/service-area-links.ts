/**
 * Lightweight link list for the footer's "Areas We Serve" hub.
 *
 * This is deliberately separate from `landing-pages.ts`. The footer is a client
 * component, and importing the full registry there would ship every landing
 * page's body copy and FAQs into the client bundle on every route.
 *
 * `landing-pages.ts` type-checks itself against these slugs, so adding a
 * landing page without adding it here (or vice versa) is a compile error.
 */
export const serviceAreaLinks = [
  { slug: "modular-kitchen-in-yelahanka", label: "Modular Kitchen in Yelahanka" },
  { slug: "false-ceiling-in-yelahanka", label: "False Ceiling in Yelahanka" },
  { slug: "turnkey-construction-in-yelahanka", label: "Turnkey Construction in Yelahanka" },
  { slug: "modular-kitchen-in-whitefield", label: "Modular Kitchen in Whitefield" },
  { slug: "office-interior-design-in-whitefield", label: "Office Interior Design in Whitefield" },
  { slug: "home-interior-design-in-hebbal", label: "Home Interior Design in Hebbal" },
  { slug: "turnkey-construction-in-hebbal", label: "Turnkey Construction in Hebbal" },
  { slug: "home-interior-design-in-koramangala", label: "Home Interior Design in Koramangala" },
  {
    slug: "office-interior-design-in-electronic-city",
    label: "Office Interior Design in Electronic City",
  },
  { slug: "home-renovation-in-jp-nagar", label: "Home Renovation in JP Nagar" },
  { slug: "home-renovation-in-hsr-layout", label: "Home Renovation in HSR Layout" },
  { slug: "modular-kitchen-in-marathahalli", label: "Modular Kitchen in Marathahalli" },
  { slug: "interior-designers-in-banashankari", label: "Interior Designers in Banashankari" },
  { slug: "interior-designers-in-btm-layout", label: "Interior Designers in BTM Layout" },
  { slug: "interior-designers-in-malleshwaram", label: "Interior Designers in Malleshwaram" },
  { slug: "interior-designers-in-rajajinagar", label: "Interior Designers in Rajajinagar" },
] as const

export type ServiceAreaSlug = (typeof serviceAreaLinks)[number]["slug"]

/**
 * The October 2026 landing pages (content in `content/new-pages/`).
 *
 * `published` is the single switch for each page. A published page is linked
 * from the footer, listed in the sitemap and indexable; an unpublished one 404s
 * in production builds and is linked from nowhere. Set `SHOW_DRAFT_PAGES=1` to
 * preview drafts locally.
 *
 * A page may only be published once it contains no `{{CONFIRM: ...}}`
 * placeholders — the route throws at build time otherwise.
 */
export const newPageLinks = [
  // Bangalore-wide pillars
  { slug: "house-construction-company-in-bangalore", label: "House Construction Company in Bangalore", published: false },
  { slug: "house-construction-cost-in-bangalore", label: "House Construction Cost in Bangalore", published: false },
  { slug: "commercial-construction-in-bangalore", label: "Commercial Construction in Bangalore", published: true },
  { slug: "office-interior-designers-in-bangalore", label: "Office Interior Designers in Bangalore", published: false },
  { slug: "modular-kitchen-in-bangalore", label: "Modular Kitchen in Bangalore", published: false },
  { slug: "home-renovation-in-bangalore", label: "Home Renovation in Bangalore", published: true },
  // Yelahanka and North Bengaluru
  { slug: "home-renovation-in-yelahanka", label: "Home Renovation in Yelahanka", published: true },
  { slug: "office-interior-designers-in-yelahanka", label: "Office Interior Designers in Yelahanka", published: true },
  { slug: "interior-designers-in-jakkur", label: "Interior Designers in Jakkur", published: true },
  { slug: "house-construction-in-thanisandra", label: "House Construction in Thanisandra", published: true },
  { slug: "interior-designers-in-sahakar-nagar", label: "Interior Designers in Sahakar Nagar", published: true },
  { slug: "house-construction-in-devanahalli", label: "House Construction in Devanahalli", published: true },
  { slug: "villa-construction-in-yelahanka", label: "Villa Construction in Yelahanka", published: true },
] as const

export type NewPageSlug = (typeof newPageLinks)[number]["slug"]

export const publishedNewPageLinks = newPageLinks.filter((link) => link.published)

/** Whether a root-relative href points at a new page that is not live yet. */
export function isUnpublishedNewPage(href: string): boolean {
  return newPageLinks.some((link) => !link.published && `/${link.slug}` === href)
}
