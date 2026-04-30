import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { blogPosts } from "@/data/blog-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design and Construction Blog Bangalore | ACIPL",
  description:
    "Guides on interior costs, renovation planning, office fit-outs, and construction decisions for Bangalore homes and businesses.",
  path: "/blog",
  keywords: [
    "interior design blog Bangalore",
    "construction blog Bangalore",
    "renovation tips Bangalore",
    "modular kitchen guide Bangalore",
    "home interiors Bangalore",
    "office renovation Bangalore",
    "interior cost guide Bangalore",
    "turnkey construction Bangalore",
  ],
});

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Knowledge Base
          </span>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Essential Planning <span className="text-gold-500">Guides</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Content built around the real questions clients ask before starting interior, renovation, office, and construction work in Bangalore.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6">
                  <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
                    {post.category}
                  </span>
                </div>
                <div className="mb-4 flex items-center gap-4 text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gold-600" />
                    {post.publishedAt}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold-600" />5 min read
                  </div>
                </div>

                <h2 className="mb-4 text-2xl font-bold leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>

                <div className="mb-8 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                  Best next step:{" "}
                  <Link href={post.ctaHref} className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">
                    {post.ctaLabel}
                  </Link>
                </div>

                <div className="mt-auto border-t border-gray-100 pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-bold text-navy-900 transition-colors hover:text-gold-600"
                  >
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
