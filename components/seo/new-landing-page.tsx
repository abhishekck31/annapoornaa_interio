import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MapPin, MessageCircle, Phone, Quote } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JsonLd from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { DetailSection, NewLandingPage } from "@/content/new-pages/types"
import { confirmedStats } from "@/lib/business"
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/seo/schema"
import { isUnpublishedNewPage } from "@/lib/seo/service-area-links"
import { siteConfig, whatsappLink } from "@/lib/seo/site"

/**
 * Template for the pages in `content/new-pages/`.
 *
 * Markup and classes mirror `components/seo/landing-page.tsx` section for
 * section, so these pages look the same as the original sixteen. Differences:
 * optional detail sections after the local context, a testimonial that only
 * renders once confirmed, stats from `lib/business.ts`, and links to new pages
 * that are not live yet are dropped rather than pointing at a 404.
 */

const SectionBar = ({ className = "mb-12" }: { className?: string }) => (
  <div className={`${className} h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500`} />
)

const Detail = ({ section, tinted }: { section: DetailSection; tinted: boolean }) => (
  <section className={`${tinted ? "bg-slate-50" : "bg-white"} py-16`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">{section.heading}</h2>
      <SectionBar className="mb-10" />
      <div className="max-w-4xl">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mb-5 text-lg leading-relaxed text-gray-700">
            {paragraph}
          </p>
        ))}
        {section.bullets && (
          <ul className="mb-5 space-y-3">
            {section.bullets.map((bullet) => (
              <li key={bullet.slice(0, 40)} className="flex gap-3 text-lg leading-relaxed text-gray-700">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {section.table && (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] text-left text-base">
            {section.table.caption && (
              <caption className="p-4 text-left text-sm text-gray-500">{section.table.caption}</caption>
            )}
            <thead className="bg-navy-900 text-white">
              <tr>
                {section.table.columns.map((column, i) => (
                  <th key={`${column}-${i}`} scope="col" className="px-4 py-3 font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row[0]} className="border-t border-gray-100 even:bg-slate-50">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="px-4 py-3 font-semibold text-navy-900">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="px-4 py-3 text-gray-700">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.note && <p className="mt-4 max-w-4xl text-sm text-gray-500">{section.note}</p>}
    </div>
  </section>
)

const NewLandingPageTemplate = ({ page }: { page: NewLandingPage }) => {
  const path = `/${page.slug}`
  const parent = page.parent && !isUnpublishedNewPage(page.parent.path) ? page.parent : undefined
  const related = page.related.filter((link) => !isUnpublishedNewPage(link.href))
  const testimonial = page.testimonial?.confirmed ? page.testimonial : undefined
  const details = page.details ?? []

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    ...(parent ? [parent] : []),
    { name: page.breadcrumbLabel, path },
  ]

  const stats = (
    <>
      {confirmedStats.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-bold text-gold-400">{stat.value}</p>
          <p className="text-gray-300">{stat.label}</p>
        </div>
      ))}
    </>
  )
  const workButton = (
    <Button
      asChild
      variant="outline"
      className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
    >
      <Link href="/featured-projects">
        See our work <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  )

  return (
    <>
      <JsonLd
        id={`schema-service-${page.slug}`}
        data={serviceSchema({
          name: page.breadcrumbLabel,
          description: page.description,
          path,
          areaServed: page.areaServed,
          serviceType: page.service,
        })}
      />
      <JsonLd id={`schema-faq-${page.slug}`} data={faqPageSchema(page.faqs)} />
      <JsonLd id={`schema-breadcrumb-${page.slug}`} data={breadcrumbSchema(crumbs)} />

      <main className="min-h-screen">
        <Navbar />

        {/* Hero ------------------------------------------------------------ */}
        <section className="relative mt-20 bg-navy-900 text-white">
          <div className="absolute inset-0">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-25"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
                {crumbs.slice(0, -1).map((crumb) => (
                  <li key={crumb.path} className="flex items-center gap-2">
                    <Link href={crumb.path} className="hover:text-gold-400">
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </li>
                ))}
                <li className="text-gold-400">{page.breadcrumbLabel}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gold-300">
                <MapPin className="mr-2 h-4 w-4" />
                {page.heroBadge}
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {page.h1}
              </h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl">{page.heroSubtitle}</p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-gold-600 text-navy-900 hover:bg-gold-700">
                  <Link href="/contact">
                    Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={`tel:${siteConfig.telephone}`}>
                    <Phone className="mr-2 h-5 w-5" /> {siteConfig.telephoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro + local context ------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold text-navy-900 md:text-4xl">
                {page.introHeading}
              </h2>
              <SectionBar className="mb-10" />
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-5 text-lg leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}

              <h3 className="mb-4 mt-10 text-2xl font-bold text-navy-900">
                {page.localContext.heading}
              </h3>
              {page.localContext.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-5 text-lg leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sticky enquiry card */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-gray-200 bg-slate-50 p-6 shadow-md">
                <h3 className="mb-2 text-xl font-bold text-navy-900">{page.enquiryCardHeading}</h3>
                <p className="mb-6 text-gray-600">
                  Free site visit and a written, itemised quote — no obligation.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-navy-900 hover:bg-navy-800">
                    <a href={`tel:${siteConfig.telephone}`}>
                      <Phone className="mr-2 h-4 w-4" /> Call {siteConfig.telephoneDisplay}
                    </a>
                  </Button>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href={whatsappLink(page.enquiryMessage)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Request a Callback</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Detail sections (tables, stage lists) ---------------------------- */}
        {details.map((section, i) => (
          <Detail key={section.heading} section={section} tinted={i % 2 === 0} />
        ))}

        {/* What's included -------------------------------------------------- */}
        <section className={`${details.length % 2 === 0 ? "bg-slate-50" : "bg-white"} py-16`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">
              {page.highlightsHeading ?? "What's included"}
            </h2>
            <SectionBar />
            <div className="grid gap-6 sm:grid-cols-2">
              {page.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <CheckCircle className="mb-4 h-8 w-8 text-gold-500" />
                  <h3 className="mb-2 text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process ---------------------------------------------------------- */}
        <section className={`${details.length % 2 === 0 ? "bg-white" : "bg-slate-50"} py-16`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">How we work</h2>
            <SectionBar />
            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {page.process.map((item, i) => (
                <li key={item.step} className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-gold-400">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-navy-900">{item.step}</h3>
                  <p className="leading-relaxed text-gray-600">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Trust ------------------------------------------------------------ */}
        <section className="bg-navy-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{page.trustHeading}</h2>
            <div className="mb-12 h-1.5 w-20 rounded-full bg-gold-500" />

            {testimonial ? (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-xl bg-white/5 p-8 lg:col-span-2">
                  <Quote className="mb-4 h-10 w-10 text-gold-400" />
                  <blockquote className="mb-6 text-xl leading-relaxed text-gray-100">
                    “{testimonial.quote}”
                  </blockquote>
                  <p className="mt-3 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.project}</p>
                </div>
                <div className="space-y-6">
                  {stats}
                  {workButton}
                </div>
              </div>
            ) : (
              <>
                <div className="grid gap-8 sm:grid-cols-3">{stats}</div>
                <div className="mt-10">{workButton}</div>
              </>
            )}
          </div>
        </section>

        {/* FAQ -------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">{page.faqHeading}</h2>
            <SectionBar />
            <Accordion type="single" collapsible className="w-full">
              {page.faqs.map((faq, i) => (
                <AccordionItem key={faq.question} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-navy-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Internal links --------------------------------------------------- */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-navy-900 md:text-3xl">
              Related services and areas
            </h2>
            <SectionBar className="mb-8" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((link) => (
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

        {/* Closing CTA ------------------------------------------------------ */}
        <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-16 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{page.closingHeading}</h2>
            <p className="mb-8 text-lg text-gray-300">
              Book a free site visit. We&apos;ll look at the site, talk through options, and send an
              itemised quote you can actually compare.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-gold-600 text-navy-900 hover:bg-gold-700">
                <a href={`tel:${siteConfig.telephone}`}>
                  <Phone className="mr-2 h-5 w-5" /> Call {siteConfig.telephoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href={whatsappLink(page.enquiryMessage)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact">Send an Enquiry</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default NewLandingPageTemplate
