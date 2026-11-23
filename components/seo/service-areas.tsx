import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

import { publishedNewPageLinks, serviceAreaLinks } from "@/lib/seo/service-area-links"

/**
 * Internal linking hub for the location landing pages.
 *
 * Without this, the `/[service]-in-[location]` pages would be reachable only
 * from the sitemap and from each other. Rendered inside the footer so every
 * page on the site links to them.
 */
const ServiceAreas = () => (
  <div className="border-t border-navy-800 pt-10">
    <h2 className="mb-2 flex items-center text-xl font-semibold">
      <MapPin className="mr-2 h-5 w-5 text-gold-400" />
      <Link href="/areas-we-serve" className="transition-colors hover:text-gold-400">
        Areas We Serve in Bangalore
      </Link>
    </h2>
    <p className="mb-6 text-sm text-gray-400">
      We serve throughout Bangalore — North, South, East, West and Central — for interior
      design, modular kitchens, renovation and construction.
    </p>
    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {[...serviceAreaLinks, ...publishedNewPageLinks].map((link) => (
        <li key={link.slug}>
          <Link
            href={`/${link.slug}`}
            className="text-sm text-gray-300 transition-colors hover:text-gold-400"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
    <Link
      href="/areas-we-serve"
      className="mt-6 inline-flex items-center text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
    >
      View all areas we serve across Bangalore <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </div>
)

export default ServiceAreas
