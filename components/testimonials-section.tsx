"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"
import { Testimonial } from "@/types/testimonial"

const testimonials: Testimonial[] = [
  {
    name: "Darhini B S",
    testimonial: "I would like to extend my sincere appreciation for the outstanding interior work done by Annapoornaa Interio. From the initial design, concepts to the final execution, every detail has been handled with exceptional professionalism and creativity.Mr. Raghu the proprietor takes the effort to personally inspect the works regularly and the team works tirelessly to ensure the work is top-notch. From the initial design, concepts to the final execution, every detail has been handled with exceptional professionalism and creativity.Mr. Raghu the proprietor takes the effort to personally inspect the works regularly and the team works tirelessly to ensure the work is top-notch.The craftsmanship, choice of materials, and attention to detail truly reflect a high standard of excellence. The space has been transformed beautifully, balancing aesthetics with functionality. The team’s dedication, timely delivery, and willingness to accommodate our preferences made the entire experience seamless and enjoyable.Thank you for your hard work and commitment to quality. I highly recommend Annapoornaa Interio to anyone looking for superior interior design and execution.",
    rating: 5,
    isGoogleReview: true
  },
  {
    name: "Satish Krishnan",
    testimonial: "Good work done by Annapoornaa Interio. I got their reference from a known friends circle. My house was 15+ years old and there was good amount of renovation need to be done. Ragu and team did a fabulous job in understanding the issues, consulting design specialists and executing seamlessly. What we liked the most is the professional approach, constant communication with owners, taking efforts to execute as per plan and also suggesting measures for improvement. Overall delighted with their work and would recommend anyone who is planning for their new home design or renovation. Kudos to their entire team !",
    rating: 5,
    isGoogleReview: true
  },
  {
    name: "Rashmitha Alva",
    testimonial: "Very good interior company. No where less than the any top brands in market. Completed our project on time and looks exactly the same as we dreamed. Quality of the materials is also good. entire team is very patient and helpful. Definitely the budget friendly interior. I would love to refer to our friends and family.",
    rating: 5,
    isGoogleReview: true
  },
  {
    name: "Deepa Nagarajan",
    testimonial: "I had a great experience with the team of Annapoornaa Interiors. They executed a wide range of works for us like UPVC windows, all doors including gates, HPL cladding for the exterior elevation, exterior false ceiling works, balcony railings, skylights, shower enclosures, wooden flooring, waterproofing etc Mr. Raghu the owner takes the effort to personally inspect the works regularly and do a quality check. Name the work and he got it done for us. His team of site supervisors also oversee the work. Special thanks to Thangavelu for being responsive. There is no compromise on quality. Highly appreciate and thank Annapoornaa Interiors for making our house a lovely home!",
    rating: 5,
    isGoogleReview: true
  },
  {
    name: "Satish Kumar",
    testimonial: "I am Satish, working as an Admin Manager at SMEC India Pvt. Ltd., a Singapore-based company. We recently engaged Annapoornaa Interio for our office interior work, and I am extremely pleased with the outcome. The team delivered high-quality work within the committed timeline, showcasing exceptional professionalism and responsiveness throughout the project. Their attention to detail, efficient project management, and commitment to excellence truly set them apart. I highly recommend Annapoornaa for any office interior projects.",
    rating: 5,
    isGoogleReview: true
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">
              Client Testimonials
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gold-600">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center"
            >
              <div className="flex justify-center mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-6 w-6 ${
                        i < testimonials[currentIndex].rating
                          ? "text-gold-500 fill-gold-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].testimonial}"
                </p>
                <div className="flex flex-col items-center space-y-3">
                  <h4 className="text-xl font-bold text-navy-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  {testimonials[currentIndex].isGoogleReview && (
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                        <img 
                          src="/google-icon.svg" 
                          alt="Google icon representing verified review" 
                        className="h-4 w-4" 
                      />
                      <span className="text-sm text-gray-600">Verified Review</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none px-4">
            <button
              onClick={previousTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 text-navy-900 hover:text-gold-600 pointer-events-auto transform hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 text-navy-900 hover:text-gold-600 pointer-events-auto transform hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-gold-500" 
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
