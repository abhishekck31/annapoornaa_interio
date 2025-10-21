import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Top 10 Interior Design Trends in Bangalore 2025 | Annapoornaa Interio',
  description: 'Discover the top interior design trends transforming Bangalore homes in 2025. From sustainable materials to smart home technology, stay ahead with expert insights.',
  keywords: 'interior design trends Bangalore, home decor 2025, sustainable interiors, smart home design, Bangalore interior trends',
  openGraph: {
    title: 'Top 10 Interior Design Trends in Bangalore 2025',
    description: 'Discover the top interior design trends transforming Bangalore homes in 2025.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
  },
}

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Top 10 Interior Design Trends in Bangalore for 2025",
    "image": "https://annapoornaainterio.com/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "Annapoornaa Interio"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Annapoornaa Interio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://annapoornaainterio.com/images/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "description": "Discover the top interior design trends transforming Bangalore homes in 2025. From sustainable materials to smart home technology."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-gold-600 hover:text-gold-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Top 10 Interior Design Trends in Bangalore for 2025
            </h1>
            <div className="flex items-center text-gray-600 text-sm">
              <time>January 15, 2025</time>
              <span className="mx-2">•</span>
              <span>By Annapoornaa Interio</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Bangalore's interior design landscape is evolving rapidly. As we move into 2025, homeowners are embracing innovative design concepts that blend aesthetics with functionality. Here are the top 10 trends shaping interior design in Bangalore.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Sustainable and Eco-Friendly Materials</h2>
            <p className="text-gray-700 mb-4">
              Bangaloreans are increasingly conscious about environmental impact. Sustainable materials like bamboo, reclaimed wood, and recycled metals are becoming popular choices for both residential and commercial projects.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Smart Home Integration</h2>
            <p className="text-gray-700 mb-4">
              With Bangalore being India's tech capital, smart home technology is no longer a luxury but an expectation. From automated lighting to smart climate control, technology integration is a key trend.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Biophilic Design</h2>
            <p className="text-gray-700 mb-4">
              Bringing nature indoors through indoor plants, natural light, and organic materials is trending. This design philosophy improves air quality and creates a calming atmosphere.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Multifunctional Spaces</h2>
            <p className="text-gray-700 mb-4">
              With many Bangaloreans working from home, spaces that serve multiple purposes are in high demand. Home offices that convert to guest rooms or dining areas that double as workspaces are increasingly common.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">5. Bold Color Palettes</h2>
            <p className="text-gray-700 mb-4">
              While neutral tones remain popular, there's a growing trend toward bold, vibrant colors. Deep blues, emerald greens, and terracotta are making statements in Bangalore homes.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">6. Minimalist Aesthetics</h2>
            <p className="text-gray-700 mb-4">
              The "less is more" philosophy continues to influence Bangalore's interior design scene. Clean lines, clutter-free spaces, and functional furniture define this trend.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">7. Local Artisan Crafts</h2>
            <p className="text-gray-700 mb-4">
              Supporting local artisans and incorporating handcrafted elements adds unique character to interiors while promoting traditional crafts.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">8. Modular Furniture</h2>
            <p className="text-gray-700 mb-4">
              Flexible, space-saving modular furniture is perfect for Bangalore's urban apartments. These pieces adapt to changing needs and lifestyles.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">9. Statement Lighting</h2>
            <p className="text-gray-700 mb-4">
              Lighting is no longer just functional—it's a design statement. Unique chandeliers, pendant lights, and LED installations create ambiance and focal points.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">10. Wellness-Focused Design</h2>
            <p className="text-gray-700 mb-4">
              Post-pandemic, there's increased focus on creating spaces that promote physical and mental well-being. This includes dedicated meditation corners, home gyms, and air-purifying elements.
            </p>

            <div className="bg-gold-50 border-l-4 border-gold-600 p-6 my-8">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to Transform Your Space?</h3>
              <p className="text-gray-700 mb-4">
                At Annapoornaa Interio, we stay ahead of design trends to create beautiful, functional spaces that reflect your style and meet Bangalore's unique requirements.
              </p>
              <Link href="/contact" className="inline-block bg-gold-600 text-white px-6 py-3 rounded-lg hover:bg-gold-700 transition-colors">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
