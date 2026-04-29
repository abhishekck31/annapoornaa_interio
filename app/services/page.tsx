import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { services } from "@/data/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design and Construction Services in Bangalore | ACIPL",
  description:
    "Explore home interiors, office interiors, construction, renovation, PMC, and design services delivered across Bangalore.",
  path: "/services",
  keywords: [
    "interior services Bangalore",
    "construction services Bangalore",
    "renovation services Bangalore",
    "office interiors Bangalore",
    "home interiors Bangalore",
  ],
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mt-24 border-t border-gray-200 bg-gray-50 pb-20">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h1 className="mb-6 flex items-center justify-center gap-3 text-4xl font-bold text-navy-900 md:text-5xl">
              <Sparkles className="h-8 w-8 text-gold-500" />
              Our Services
              <Sparkles className="h-8 w-8 text-gold-500" />
            </h1>
            <div className="mx-auto mb-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Explore our most important service pages for Bangalore homeowners, businesses, and construction clients.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col items-center gap-12 lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 space-y-8">
                  <div>
                    <h2 className="mb-4 text-3xl font-bold text-navy-900">{service.title}</h2>
                    <p className="text-lg leading-relaxed text-gray-700">{service.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.proofPoints.map((point) => (
                      <div key={point} className="rounded-2xl border border-gray-100 bg-white p-4 text-sm text-gray-700 shadow-sm">
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-lg font-semibold text-navy-900">Planning snapshot</h3>
                    <p className="mb-3 text-sm text-gray-700">{service.pricingGuide}</p>
                    <p className="text-sm text-gray-700">{service.timeline}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-4 font-bold text-white transition hover:bg-navy-800"
                    >
                      Explore full service page
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-navy-900 px-6 py-4 font-bold text-navy-900 transition hover:bg-navy-50"
                    >
                      Request a quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="w-full flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} in Bangalore`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
