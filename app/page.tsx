"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ProcessTimeline from "@/components/process-timeline"
import DifferenceSection from "@/components/difference-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import CTASection from "@/components/cta-section"
import StatsSection from "@/components/stats-section"
import FAQSection from "@/components/faq-section"
import ClientLogosSection from "@/components/client-logos-section"
import { Shield, Clock, Users, MapPin } from "lucide-react"

export default function Home() {
  // Initialize scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      const textGlowElements = document.querySelectorAll(".text-glow-scroll, .heading-glow-scroll")

      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85) {
          element.classList.add("animate-active")
        }
      })

      textGlowElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementPosition < windowHeight * 0.85 && elementPosition > 0) {
          element.classList.add("glow-active")
        } else {
          element.classList.remove("glow-active")
        }
      })
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ClientLogosSection />
      <ProcessTimeline />
      <DifferenceSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <section className="mt-32 pt-16 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Contact us</span>
              <Shield className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Get In Touch</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or ready to start your project? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* FORM CARD */}
            <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
            {/* CONTACT INFO CARD */}
            <div className="bg-navy-900 text-white p-8 rounded-xl shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-gold-400">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gold-300 mb-1">Email Us</h4>
                    <p className="text-gray-300">info@annapoornainterio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gold-300 mb-1">Call Us</h4>
                    <p className="text-gray-300">+91 99000 94942</p>
                    <p className="text-gray-300">+91 80731 41413</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gold-300 mb-1">Our Location</h4>
                    <p className="text-gray-300">1st floor, #395, 8th 'B' Main, 14th 'B' cross, 2nd stage, 'B' sector, Yelahanka New Town, Bangalore - 560064.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
