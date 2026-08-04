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
