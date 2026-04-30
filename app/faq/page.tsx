import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { siteFaqs } from "@/data/faq-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs – Interior Design & Construction in Bangalore | ACIPL",
  description:
    "Answers to the most common questions about interior design costs, modular kitchen pricing, construction timelines, and services in Bangalore by ACIPL.",
  path: "/faq",
  keywords: [
    "interior design cost Bangalore",
    "modular kitchen cost Bangalore",
    "3BHK interior cost Bangalore",
    "construction company Bangalore FAQ",
    "home renovation cost Bangalore",
    "interior designers Bangalore questions",
    "ACIPL FAQ",
  ],
});

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-24" />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-navy-900">FAQs</span>
          </nav>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-navy-900 md:text-5xl">
              Frequently Asked Questions
            </h1>
            <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-navy-900 to-gold-500" />
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Common questions about interior design costs, construction timelines, and services
              across Bangalore answered by ACIPL.
            </p>
          </div>

          {/* FAQ list */}
          <div className="space-y-6">
            {siteFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="mb-3 text-lg font-semibold text-navy-900">{faq.question}</h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl bg-navy-900 p-8 text-center text-white">
            <h2 className="mb-3 text-2xl font-bold">Still have questions?</h2>
            <p className="mb-6 text-gray-300">
              Call or WhatsApp our team for a free consultation on your Bangalore interior or
              construction project.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-gold-500 px-6 py-4 font-semibold text-navy-900 transition hover:bg-gold-400"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Internal links to related content */}
          <div className="mt-12">
            <h2 className="mb-6 text-xl font-bold text-navy-900">Related guides</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/blog/cost-of-3bhk-interior-design-bangalore"
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-navy-900 shadow-sm transition hover:border-gold-400 hover:shadow-md"
              >
                3BHK Interior Cost in Bangalore
                <ChevronRight className="h-4 w-4 text-gold-600" />
              </Link>
              <Link
                href="/blog/modular-kitchen-cost-bangalore"
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-navy-900 shadow-sm transition hover:border-gold-400 hover:shadow-md"
              >
                Modular Kitchen Cost in Bangalore
                <ChevronRight className="h-4 w-4 text-gold-600" />
              </Link>
              <Link
                href="/blog/home-interior-design-cost-bangalore"
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-navy-900 shadow-sm transition hover:border-gold-400 hover:shadow-md"
              >
                Home Interior Design Cost Guide
                <ChevronRight className="h-4 w-4 text-gold-600" />
              </Link>
              <Link
                href="/blog/home-renovation-cost-bangalore"
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-navy-900 shadow-sm transition hover:border-gold-400 hover:shadow-md"
              >
                Home Renovation Cost in Bangalore
                <ChevronRight className="h-4 w-4 text-gold-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
