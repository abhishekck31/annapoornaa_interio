import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ChevronRight, Clock } from "lucide-react";
import { notFound } from "next/navigation";

import Footer from "@/components/footer";
import LeadLink from "@/components/lead-link";
import Navbar from "@/components/navbar";
import { blogPosts } from "@/data/blog-data";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Blog Post Not Found | ACIPL",
      description: "The requested blog post could not be found.",
      path: "/blog",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: post.image,
    type: "article",
  });
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-24" />

      <article className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm text-gray-500">
            <Link href="/" className="hover:text-gold-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-gold-600">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="truncate font-medium text-navy-900">{post.title}</span>
          </nav>

          <Link href="/blog" className="mb-6 inline-flex items-center font-medium text-gold-600 hover:text-gold-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-10">
            <span className="mb-4 inline-flex rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
              {post.category}
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-navy-900 md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-200 py-4 text-gray-600">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4 text-gold-600" />
                {post.publishedAt}
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-gold-600" />5 min read
              </div>
              <div className="text-sm font-medium">By {post.author}</div>
            </div>
          </header>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
            <div
              className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.faqs.length > 0 && (
              <section className="mt-14 border-t border-gray-100 pt-8">
                <h2 className="mb-6 text-2xl font-bold text-navy-900">Frequently asked questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="mb-2 text-lg font-semibold text-navy-900">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-14 rounded-3xl bg-navy-900 p-8 text-white">
              <h2 className="mb-3 text-2xl font-bold">Need help with a similar project?</h2>
              <p className="mb-6 text-gray-300">
                Move from research to action with a practical consultation for your Bangalore project.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <LeadLink
                  href={post.ctaHref}
                  eventName="lead_consultation_booking"
                  eventParams={{ sourcePage: `/blog/${post.slug}`, service: post.primaryServiceSlug }}
                  className="rounded-xl bg-gold-500 px-6 py-4 text-center font-semibold text-navy-900 transition hover:bg-gold-400"
                >
                  {post.ctaLabel}
                </LeadLink>
                <LeadLink
                  href={`/${post.primaryLocationSlug}`}
                  eventName="lead_quote_request"
                  eventParams={{ sourcePage: `/blog/${post.slug}`, location: post.primaryLocationSlug }}
                  className="rounded-xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Related Location Page
                </LeadLink>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
