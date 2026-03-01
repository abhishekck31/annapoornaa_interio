import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { blogPosts } from "@/data/blog-data"
import { Calendar, ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: 'Interior Design Blog Bangalore | Tips & Trends - Annapoornaa Interio',
  description: 'Expert interior design tips, trends, and home improvement advice from the top interior designers in Bangalore. Read our blog for fresh inspiration.',
  keywords: 'interior design blog, home decor tips Bangalore, construction trends, modular kitchen ideas, office design blog',
  alternates: {
    canonical: 'https://annapoornaainterio.com/blog',
  },
}

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900"></div>
          <img src="/Serviceimages/home interiors.jpg" alt="Blog background" className="w-full h-full object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">OUR KNOWLEDGE BASE</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Interior Design <span className="text-gold-500">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert insights, latest trends, and comprehensive guides curated by Bangalore's finest designers.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-gold-600" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gold-600" />
                      5 min read
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-navy-900 mb-4 leading-tight group-hover:text-gold-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-8 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-navy-900 font-bold hover:text-gold-600 transition-colors group/link"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
