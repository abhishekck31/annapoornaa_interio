"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GallerySection from "@/components/gallery-section"

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="pt-20">
          {/* The page needs its own H1 — GallerySection opens at H2. */}
          <div className="bg-gray-50 pt-16 text-center">
            <div className="container mx-auto px-4">
              <h1 className="mb-4 text-3xl font-bold text-navy-900 md:text-4xl lg:text-5xl">
                Interior Design &amp; Construction Project Gallery
              </h1>
              <p className="mx-auto max-w-2xl text-gray-600">
                Completed home interiors, office fit-outs, construction projects and product
                installations from across Bangalore.
              </p>
            </div>
          </div>
          <GallerySection />
        </div>
      </main>
      <Footer />
    </>
  )
}
