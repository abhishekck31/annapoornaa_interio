import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowRight, Building2, CalendarDays, CheckCircle2, Clock, Lightbulb, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredPost = {
  title: "How to Plan a Stress-Free Interior Project in Bangalore",
  excerpt:
    "A clear brief, practical budget, site-ready measurements, and early material decisions can keep your home or office interior project moving smoothly.",
  image: "/updated-homein.jpg",
  category: "Interior Planning",
  date: "May 6, 2026",
  readTime: "5 min read",
}

const posts = [
  {
    title: "Home Interior Decisions That Make Daily Living Easier",
    excerpt:
      "From storage planning to lighting layers, here are the choices that make a home feel easier to use after the handover.",
    image: "/Homeinterior.png",
    category: "Home Interiors",
    date: "Apr 28, 2026",
    readTime: "4 min read",
    icon: Ruler,
  },
  {
    title: "What a Productive Office Interior Needs Before Design Starts",
    excerpt:
      "Good office planning begins with teams, movement, acoustics, storage, and brand experience before finishes are selected.",
    image: "/Updated-officein-services.jpg",
    category: "Office Interiors",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    icon: Building2,
  },
  {
    title: "Construction Planning Checks Before Site Work Begins",
    excerpt:
      "A practical checklist for drawings, approvals, materials, timelines, and communication before construction starts.",
    image: "/Const1.png",
    category: "Construction",
    date: "Apr 8, 2026",
    readTime: "5 min read",
    icon: CheckCircle2,
  },
]

const topics = [
  "Home interiors",
  "Office interiors",
  "Renovation",
  "Construction",
  "UPVC windows and doors",
  "False ceilings",
  "Workstations",
  "Project management",
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-16 bg-gradient-to-b from-navy-50 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
              <div>
                <span className="text-sm md:text-base text-secondary uppercase tracking-wider font-semibold">
                  ACIPL Blog
                </span>
                <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-primary">
                  Ideas for Better Interiors, Construction, and Renovation
                </h1>
                <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                  Practical notes from Annapoorneshwari Constructions Interiors Private Limited on planning, material
                  choices, execution, and the details that make finished spaces work well.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="bg-navy-900 hover:bg-navy-800 text-white rounded-md px-6 py-3 shadow-md">
                      Talk to Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/featured-projects">
                    <Button
                      variant="outline"
                      className="border-secondary text-primary hover:bg-secondary/10 rounded-md px-6 py-3"
                    >
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>

              <article className="bg-white rounded-lg border border-gray-100 shadow-xl overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="font-semibold text-secondary">{featuredPost.category}</span>
                    <span className="flex items-center">
                      <CalendarDays className="mr-1.5 h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1.5 h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-700">{featuredPost.excerpt}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-secondary uppercase tracking-wider font-semibold">Latest Articles</span>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">Design and Build Notes</h2>
              </div>
              <p className="text-gray-600 max-w-xl">
                Short, useful reads for homeowners, office teams, builders, and property owners preparing their next
                project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => {
                const Icon = post.icon

                return (
                  <article
                    key={post.title}
                    className="bg-white rounded-lg border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-56">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-flex items-center text-sm font-semibold text-secondary">
                          <Icon className="mr-2 h-4 w-4" />
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-5">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div>
                <span className="inline-flex items-center text-secondary uppercase tracking-wider font-semibold">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Topics We Cover
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">Guidance Across the Full Project</h2>
                <p className="mt-4 text-gray-700">
                  The blog is built around the questions clients ask before design, during execution, and after a
                  project is handed over.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {topics.map((topic) => (
                  <div
                    key={topic}
                    className="bg-white rounded-md border border-gray-100 px-4 py-3 text-center text-sm font-medium text-primary shadow-sm"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
