import Link from "next/link";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold-500">404</p>
        <h1 className="mb-6 text-4xl font-bold text-navy-900 md:text-5xl">This page could not be found</h1>
        <p className="mb-10 max-w-2xl text-lg text-gray-600">
          The page may have moved, the link may be outdated, or the URL may not exist anymore. Use the main services and contact links below to continue.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/services" className="rounded-xl bg-navy-900 px-6 py-4 font-semibold text-white transition hover:bg-navy-800">
            Explore Services
          </Link>
          <Link href="/contact" className="rounded-xl border border-navy-900 px-6 py-4 font-semibold text-navy-900 transition hover:bg-navy-50">
            Contact the Team
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
