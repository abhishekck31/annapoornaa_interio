import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interior Design Blog | Tips & Trends - Annapoornaa Interio',
  description: 'Explore expert interior design tips, construction advice, and latest trends in home and office interiors from Annapoornaa Interio Bangalore.',
  keywords: 'interior design blog, home decor tips, construction advice Bangalore, interior trends, modular kitchen ideas',
}

const blogPosts = [
  {
    slug: 'top-10-interior-design-trends-bangalore-2025',
    title: 'Top 10 Interior Design Trends in Bangalore for 2025',
    excerpt: 'Discover the latest interior design trends taking Bangalore by storm. From sustainable materials to smart home integration.',
    date: '2025-01-15',
    category: 'Trends',
  },
  {
    slug: 'modular-kitchen-design-guide-bangalore',
    title: 'Complete Guide to Modular Kitchen Design in Bangalore',
    excerpt: 'Everything you need to know about designing the perfect modular kitchen for your Bangalore home.',
    date: '2025-02-01',
    category: 'Kitchen Design',
  },
  {
    slug: 'office-interior-design-productivity',
    title: 'How Office Interior Design Impacts Productivity',
    excerpt: 'Learn how thoughtful office interior design can boost employee productivity and create a positive work environment.',
    date: '2025-02-15',
    category: 'Commercial',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">
          Interior Design Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Expert tips, trends, and insights from Annapoornaa Interio
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-gold-600 font-semibold mb-2">
                  {post.category}
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-gold-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gold-600 hover:text-gold-700 font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
