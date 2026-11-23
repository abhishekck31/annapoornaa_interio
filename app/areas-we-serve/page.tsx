import Link from "next/link"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import JsonLd from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"
import { areaPages } from "@/content/area-pages"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema } from "@/lib/seo/schema"
import { publishedNewPageLinks, serviceAreaLinks } from "@/lib/seo/service-area-links"
import { siteConfig, whatsappLink } from "@/lib/seo/site"

/**
 * Hub that links every location and service landing page, so each one is
 * reachable by crawlers within two clicks of a sitemap entry. Not linked from
 * the navbar or footer, so the existing site is unchanged.
 */

export const metadata = buildMetadata({
  title: "Areas We Serve in Bangalore | Interiors & Construction | ACIPL",
  description:
    "Interior design, modular kitchens, renovation and house construction across Bangalore — find ACIPL's page for your area, from Yelahanka and Hebbal to Electronic City.",
  path: "/areas-we-serve",
  keywords: ["interior designers in bangalore areas", "house construction bangalore areas", "ACIPL areas we serve"],
})

const handBuilt = [
  { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
  { label: "Home Construction Services in Yelahanka", href: "/home-construction-services-in-yelahanka" },
  { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
  { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
  { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
  { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
]

const allLinks = [
  ...areaPages.map((page) => ({ label: page.breadcrumbLabel, href: `/${page.slug}` })),
  ...serviceAreaLinks.map((link) => ({ label: link.label, href: `/${link.slug}` })),
  ...publishedNewPageLinks.map((link) => ({ label: link.label, href: `/${link.slug}` })),
  ...handBuilt,
]

const groups: { heading: string; test: (label: string) => boolean }[] = [
  { heading: "Bangalore-wide services", test: (l) => /in (North )?Bangalore$/.test(l) },
  { heading: "Interior designers by area", test: (l) => /Interior Design/.test(l) && !/Office/.test(l) },
  { heading: "Modular kitchens by area", test: (l) => /Kitchen/.test(l) },
  { heading: "House construction by area", test: (l) => /Construction/.test(l) },
  { heading: "Home renovation by area", test: (l) => /Renovation/.test(l) },
  { heading: "Office interiors and more", test: () => true },
]

function grouped() {
  const used = new Set<string>()
  return groups.map((group) => {
    const links = allLinks
      .filter((link) => !used.has(link.href) && group.test(link.label))
      .sort((a, b) => a.label.localeCompare(b.label))
    links.forEach((link) => used.add(link.href))
    return { heading: group.heading, links }
  })
}

export default function AreasWeServePage() {
  const sections = grouped().filter((section) => section.links.length > 0)

  return (
    <>
      <JsonLd
        id="schema-breadcrumb-areas"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve" },
        ])}
      />
      <main className="min-h-screen">
        <Navbar />

        <section className="mt-20 bg-navy-900 text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Areas We Serve in Bangalore</h1>
            <p className="mb-8 max-w-3xl text-lg text-gray-200">
              ACIPL is a design-and-build firm based in Yelahanka New Town. We take up home
              interiors, modular kitchens, renovation, house construction and office fit-outs across
              Bangalore. Find the page for your area below, or call us for a free site visit.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-gold-600 text-navy-900 hover:bg-gold-700">
                <a href={`tel:${siteConfig.telephone}`}>
                  <Phone className="mr-2 h-5 w-5" /> Call {siteConfig.telephoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href={whatsappLink("Hi, I'd like a free site visit and quote from ACIPL.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {sections.map((section, i) => (
          <section key={section.heading} className={`${i % 2 ? "bg-slate-50" : "bg-white"} py-14`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-4 text-2xl font-bold text-navy-900 md:text-3xl">{section.heading}</h2>
              <div className="mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-gold-400"
                    >
                      <span className="font-medium text-navy-900">{link.label}</span>
                      <ArrowRight className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <Footer />
      </main>
    </>
  )
}
