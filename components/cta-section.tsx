"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-navy-600 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-400 mr-2" />
              <span className="text-lg text-gold-300 uppercase tracking-wider font-medium">Start Your Journey</span>
              <Sparkles className="h-6 w-6 text-gold-400 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Looking for the best interior company near you? Let's create something extraordinary together. As Yelahanka's premier interior design and construction company, we serve all Bangalore neighborhoods with innovative designs and quality craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" scroll={false}>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                    Contact us Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/gallery">
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    View Our Portfolio
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ScrollAnimation delay={100}>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-navy-800/50 backdrop-blur-sm p-8 rounded-xl border border-navy-700 text-center"
            >
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Guarantee</h3>
              <p className="text-gray-300">
                We stand behind our work with a satisfaction guarantee on all our services.
              </p>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-navy-800/50 backdrop-blur-sm p-8 rounded-xl border border-navy-700 text-center"
            >
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Timely Delivery</h3>
              <p className="text-gray-300">We respect your time and ensure projects are completed in stipulated time.</p>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-navy-800/50 backdrop-blur-sm p-8 rounded-xl border border-navy-700 text-center"
            >
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">Our seasoned experts bring decades of combined experience to every build and design.</p>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default CTASection
