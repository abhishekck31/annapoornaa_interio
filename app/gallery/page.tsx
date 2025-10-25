"use client"

import { Metadata } from 'next'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GallerySection from "@/components/gallery-section"

export const metadata: Metadata = {
  title: 'Gallery | Interior Design Projects - Annapoornaa Interio Bangalore',
  description: 'View our interior design gallery showcasing completed projects in Bangalore. Home interiors, office spaces, construction work.',
}

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
