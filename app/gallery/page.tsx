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
          <GallerySection />
        </div>
      </main>
      <Footer />
    </>
  )
}
