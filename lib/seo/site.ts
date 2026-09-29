/**
 * Single source of truth for site-wide SEO facts.
 *
 * Every canonical URL, JSON-LD entity and OpenGraph tag is derived from here so
 * that NAP (name / address / phone) stays consistent across the whole site.
 *
 * NOTE ON HOST: `ac-ipl.in` issues a 307 redirect to `www.ac-ipl.in`, so `www`
 * is the canonical host. Never emit a bare-host URL in a canonical or sitemap.
 */

export const SITE_URL = "https://www.ac-ipl.in"

/** Builds an absolute canonical URL from a root-relative path. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path
  const clean = path.startsWith("/") ? path : `/${path}`
  // Keep the root as "/" but strip trailing slashes everywhere else so we never
  // create two indexable variants of the same page.
  const normalised = clean === "/" ? "/" : clean.replace(/\/+$/, "")
  return `${SITE_URL}${normalised}`
}

export const siteConfig = {
  name: "ACIPL",
  legalName: "Annapoorneshwari Constructions Interiors Pvt Ltd",
  alternateNames: ["Annapoornaa Interio", "Annapoorneshwari Constructions Interiors"],
  url: SITE_URL,
  logo: `${SITE_URL}/ac-ipllogo.png`,
  ogImage: `${SITE_URL}/og-image.jpg`,
  description:
    "Interior designers and construction contractors in Yelahanka, Hebbal and across Bangalore. Home interiors, office interiors, renovation and turnkey construction.",
  email: "raghu@ac-ipl.in",
  telephone: "+919900094942",
  telephoneDisplay: "+91 99000 94942",
  telephoneAlt: "+918073141413",
  telephoneAltDisplay: "+91 80731 41413",
  whatsapp: "918073141413",
  priceRange: "₹₹-₹₹₹",
  foundingYear: "2014",
  address: {
    streetAddress:
      "1st Floor, #395, 8th 'B' Main, 14th 'B' Cross, 2nd Stage, 'B' Sector, Yelahanka New Town",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  geo: {
    latitude: 13.1007,
    longitude: 77.5963,
  },
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  /** Canonical social profiles — these become schema.org `sameAs`. */
  socials: [
    "https://www.facebook.com/Annapoornainterio/",
    "https://www.instagram.com/annapoornaa_interio/",
  ],
} as const

/** Pre-built WhatsApp deep link used by landing page CTAs. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
}
