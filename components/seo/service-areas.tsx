import Link from "next/link"
import { MapPin } from "lucide-react"

import { serviceAreaLinks } from "@/lib/seo/service-area-links"

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
      Areas We Serve in Bangalore
    </h2>
    <p className="mb-6 text-sm text-gray-400">
      Interior design, modular kitchens, renovation and construction across Bangalore.
    </p>
    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {serviceAreaLinks.map((link) => (
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
  </div>
)

export default ServiceAreas
