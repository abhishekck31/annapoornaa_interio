import type { Metadata } from "next"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

/**
 * Without an explicit not-found page, the 404 inherited the root layout's
 * metadata — including a canonical pointing at the homepage.
 */
export const metadata: Metadata = {
  title: { absolute: "Page Not Found | ACIPL Bangalore" },
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-6xl font-bold text-gold-500">404</p>
        <h1 className="mb-6 text-3xl font-bold text-navy-900 md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mb-10 text-lg text-gray-600">
          The page may have moved. Try our services, project gallery, or get in touch and
          we&apos;ll point you the right way.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-navy-900 hover:bg-navy-800">
            <Link href="/services">Browse Services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/gallery">View Our Work</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
