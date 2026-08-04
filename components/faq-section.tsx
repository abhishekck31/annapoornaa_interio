"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { homepageFaqs as faqs } from "@/lib/seo/homepage-faqs"

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">FAQ</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and more
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="mb-6">
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-navy-900 text-white shadow-lg"
                      : "bg-gray-50 text-navy-900 hover:bg-gray-100"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`h-5 w-5 ${activeIndex === index ? "text-gold-400" : "text-navy-900"}`} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50 rounded-b-xl border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
