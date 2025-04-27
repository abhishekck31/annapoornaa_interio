"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"
import { Sparkles } from "lucide-react"

const partners = [
  { name: "Partner 1", logo: "/images/partner1.png" },
  { name: "Partner 2", logo: "/images/partner2.png" },
  { name: "Partner 3", logo: "/images/partner3.png" },
  { name: "Partner 4", logo: "/images/partner4.png" },
  { name: "Partner 5", logo: "/images/partner5.png" },
  { name: "Partner 6", logo: "/images/partner6.png" },
]

const PartnersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-secondary mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Partners</span>
              <Sparkles className="h-6 w-6 text-secondary ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Trusted Partners & Clients</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional quality and service
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30"></div>
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
                />
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-8 py-3 rounded-full inline-flex items-center shadow-lg hover:shadow-xl hover:bg-secondary/90 transition-all duration-300"
            >
              Become Our Partner
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default PartnersSection
