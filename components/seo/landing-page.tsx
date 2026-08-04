import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Star,
} from "lucide-react"

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
import type { LandingPage } from "@/lib/seo/landing-pages"
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/seo/schema"
import { siteConfig, whatsappLink } from "@/lib/seo/site"

/**
 * Shared template for `/[service]-in-[location]` landing pages.
 *
 * Renders exactly one <h1>, a single H2-per-section heading hierarchy, and the
 * Service / FAQPage / BreadcrumbList JSON-LD for the page. All copy comes from
 * the entry in `lib/seo/landing-pages.ts`.
 */
const LandingPageTemplate = ({ page }: { page: LandingPage }) => {
  const path = `/${page.slug}`
  const enquiry = `Hi, I'd like a quote for ${page.service.toLowerCase()} in ${page.location}.`

  return (
    <>
      <JsonLd
        id={`schema-service-${page.slug}`}
        data={serviceSchema({
          name: `${page.service} in ${page.location}`,
          description: page.description,
          path,
          areaServed: `${page.location}, Bangalore`,
          serviceType: page.service,
        })}
      />
      <JsonLd id={`schema-faq-${page.slug}`} data={faqPageSchema(page.faqs)} />
      <JsonLd
        id={`schema-breadcrumb-${page.slug}`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: `${page.service} in ${page.location}`, path },
        ])}
      />

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
                <li>
                  <Link href="/" className="hover:text-gold-400">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-gold-400">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gold-400">
                  {page.service} in {page.location}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gold-300">
                <MapPin className="mr-2 h-4 w-4" />
                Serving {page.location} and all of Bangalore
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
                {page.service} in {page.location}, done properly
              </h2>
              <div className="mb-10 h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-5 text-lg leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}

              <h3 className="mb-4 mt-10 text-2xl font-bold text-navy-900">
                {page.localContext.heading}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">{page.localContext.body}</p>
            </div>

            {/* Sticky enquiry card */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-gray-200 bg-slate-50 p-6 shadow-md">
                <h3 className="mb-2 text-xl font-bold text-navy-900">
                  Talk to us about your {page.location} project
                </h3>
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
                    <a href={whatsappLink(enquiry)} target="_blank" rel="noopener noreferrer">
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

        {/* What's included -------------------------------------------------- */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">
              What&apos;s included
            </h2>
            <div className="mb-12 h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
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
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">How we work</h2>
            <div className="mb-12 h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why {page.location} clients choose us
            </h2>
            <div className="mb-12 h-1.5 w-20 rounded-full bg-gold-500" />

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-8 lg:col-span-2">
                <Quote className="mb-4 h-10 w-10 text-gold-400" />
                <blockquote className="mb-6 text-xl leading-relaxed text-gray-100">
                  “{page.testimonial.quote}”
                </blockquote>
                <div className="flex items-center gap-1" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mt-3 font-semibold">{page.testimonial.name}</p>
                <p className="text-sm text-gray-400">{page.testimonial.project}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-gold-400">10+</p>
                  <p className="text-gray-300">Years delivering across Bangalore</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold-400">250+</p>
                  <p className="text-gray-300">Residential and commercial projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gold-400">In-house</p>
                  <p className="text-gray-300">Design, execution and product supply</p>
                </div>
                <Button asChild variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Link href="/featured-projects">
                    See our work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ -------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl">
              {page.service} in {page.location}: common questions
            </h2>
            <div className="mb-12 h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
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
            <div className="mb-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.related.map((link) => (
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to start your {page.location} project?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Book a free site visit. We&apos;ll measure, talk through options, and send an
              itemised quote you can actually compare.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-gold-600 text-navy-900 hover:bg-gold-700">
                <a href={`tel:${siteConfig.telephone}`}>
                  <Phone className="mr-2 h-5 w-5" /> Call {siteConfig.telephoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href={whatsappLink(enquiry)} target="_blank" rel="noopener noreferrer">
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

export default LandingPageTemplate
