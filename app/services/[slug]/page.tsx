import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, MapPin, Phone, Sparkles } from "lucide-react";

import StickyMobileCta from "@/components/sticky-mobile-cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LeadLink from "@/components/lead-link";
import { services } from "@/data/services-data";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found | ACIPL",
      description: "The requested service page could not be found.",
      path: "/services",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
    image: service.image,
  });
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-white pb-20 md:pb-0">
        <Navbar />

        <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 text-white">
          <div className="absolute inset-0 opacity-20">
            <Image src={service.image} alt={service.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-navy-900/80" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gold-400">
              <Link href="/services" className="hover:text-gold-300">
                Services
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>{service.title}</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">{service.title}</h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <LeadLink
                  href="/contact"
                  eventName="lead_quote_request"
                  eventParams={{ sourcePage: `/services/${service.slug}`, service: service.slug }}
                  className="rounded-xl bg-gold-500 px-6 py-4 font-semibold text-navy-900 shadow-lg transition hover:bg-gold-400"
                >
                  Request a Quote
                </LeadLink>
                <LeadLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="lead_whatsapp_click"
                  eventParams={{ sourcePage: `/services/${service.slug}`, service: service.slug }}
                  className="rounded-xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Consultation
                </LeadLink>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
            <div className="space-y-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-gold-500" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-navy-900">Pricing and planning</h2>
                <p className="mb-4 text-gray-700">{service.pricingGuide}</p>
                <p className="text-gray-700">{service.timeline}</p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-navy-900">Why clients choose this service</h2>
                <ul className="space-y-3">
                  {service.proofPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700">
                      <Sparkles className="mt-0.5 h-5 w-5 text-gold-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-navy-900">Areas we serve</h2>
                <div className="flex flex-wrap gap-3">
                  {service.serviceAreas.map((location) => (
                    <span
                      key={location}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-navy-900">Frequently asked questions</h2>
                <div className="space-y-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="mb-2 text-lg font-semibold text-navy-900">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={service.image}
                  alt={`${service.title} in Bangalore`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </div>

              <div className="rounded-3xl bg-navy-900 p-8 text-white shadow-xl">
                <h2 className="mb-4 text-2xl font-bold">Talk to our team</h2>
                <p className="mb-6 text-gray-300">
                  Need help with pricing, scope, materials, or timelines for {service.title.toLowerCase()}?
                </p>
                <div className="space-y-4">
                  <a
                    href={siteConfig.primaryPhoneHref}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 text-sm font-medium hover:bg-white/15"
                  >
                    <Phone className="h-4 w-4 text-gold-400" />
                    {siteConfig.phones[0]}
                  </a>
                  <LeadLink
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="lead_consultation_booking"
                    eventParams={{ sourcePage: `/services/${service.slug}`, service: service.slug }}
                    className="block rounded-2xl bg-gold-500 px-4 py-4 text-center font-semibold text-navy-900 transition hover:bg-gold-400"
                  >
                    Book a WhatsApp Consultation
                  </LeadLink>
                  <LeadLink
                    href="/contact"
                    eventName="lead_quote_request"
                    eventParams={{ sourcePage: `/services/${service.slug}`, service: service.slug }}
                    className="block rounded-2xl border border-white/20 px-4 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                  >
                    Request a Detailed Quote
                  </LeadLink>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                <h2 className="mb-4 text-xl font-bold text-navy-900">Service coverage</h2>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-gold-500" />
                    <span>Focused on Yelahanka and major Bangalore neighborhoods with on-site coordination support.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 text-gold-500" />
                    <span>Suitable for both new projects and scope-driven upgrades where execution quality matters.</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Footer />
      </main>
      <StickyMobileCta sourcePage={`/services/${service.slug}`} service={service.slug} />
    </>
  );
}
