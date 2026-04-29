"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

const faqs = [
  {
    question: "Is ACIPL the best interior designer in Bangalore?",
    answer:
      "ACIPL is a top-rated interior design and construction company in Bangalore with 4.9/5 stars. We specialize in:",
    bullets: [
      "End-to-end Turnkey Construction",
      "Premium Home Interiors (Villas & Apartments)",
      "Commercial & Office Renovations",
      "10+ Years Experience with 200+ Completed Projects"
    ]
  },
  {
    question: "What interior design services do you offer in Yelahanka?",
    answer:
      "We provide comprehensive interior solutions in Yelahanka and North Bangalore:",
    bullets: [
      "Modular Kitchens & Wardrobes",
      "False Ceiling & Lighting Design",
      "Complete Civil Renovations",
      "Custom Furniture Manufacturing",
      "UPVC Windows & Fire Doors"
    ]
  },
  {
    question: "What is the cost of interior design in Bangalore per sq ft?",
    answer:
      "Interior design costs in Bangalore typically range from ₹800 to ₹1,500+ per sq ft depending on materials and finishes. We offer:",
    bullets: [
      "Budget Series: Economical yet durable",
      "Premium Series: High-gloss laminates & acrylics",
      "Luxury Series: Veneers, PU polish, and premium hardware",
      "Free detailed cost estimation provided upfront."
    ]
  },
  {
    question: "Do you handle turnkey house construction in Bangalore?",
    answer:
      'Yes, we are "A to Z" civil contractors. We handle everything from mud-to-mud:',
    bullets: [
      "Architectural Design & Approval Plan",
      "Structural Construction (Civil Work)",
      "Plumbing, Electrical & Flooring",
      "Final Interior Finishing & Handover"
    ]
  },
  {
    question: "How long does a home interior project take?",
    answer:
      "We value your time. Typical timelines are:",
    bullets: [
      "2BHK/3BHK Interiors: 35-45 Days (Execution)",
      "Modular Kitchens: 20-25 Days",
      "Full Home Renovation: 60-90 Days",
      "New Construction: 12-18 Months depending on built-up area."
    ]
  },
  {
    question: "Why choose ACIPL over other designers?",
    answer:
      "We are one of the few company in Bangalore offering both Civil Construction + Interiors under one roof.",
    bullets: [
      "No sub-contracting hassles",
      "Single point of contact",
      "Own manufacturing unit for quality control",
      "5-Year Warrenty on Modular Interiors"
    ]
  }
]

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
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all duration-300 ${activeIndex === index
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
                        <p className="text-gray-700 mb-3">{faq.answer}</p>
                        {/* @ts-ignore */}
                        {faq.bullets && (
                          <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {/* @ts-ignore */}
                            {faq.bullets.map((bullet: string, i: number) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        )}
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
