"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Home, Building2, Building, Sparkles } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import { useRouter } from "next/navigation"

const features = [
  {
    title: "We Build Your Dream House",
    description: "Turn your vision into reality with our expert home construction services.",
    icon: <Home className="h-12 w-12 text-secondary" />,
    image: "/images/interior3.jpg",
    link: "/expertise/interior",
  },
  {
    title: "Villa Constructions",
    description: "Luxury villa construction with premium materials and craftsmanship.",
    icon: <Building2 className="h-12 w-12 text-secondary" />,
    image: "/images/construction1.jpg",
    link: "/expertise/construction",
  },
  {
    title: "Commercial Constructions",
    description: "Professional commercial building solutions for businesses of all sizes.",
    icon: <Building className="h-12 w-12 text-secondary" />,
    image: "/images/office2.jpg",
    link: "/services#commercial",
  },
]

const ImageLayoutSection = () => {
  const router = useRouter()

  const handleCardClick = (link: string) => {
    router.push(link)
    window.scrollTo(0, 0)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-secondary mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Expertise</span>
              <Sparkles className="h-6 w-6 text-secondary ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Exceptional Construction & Design</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and design solutions for residential and commercial projects
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 200} className="h-full">
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full cursor-pointer"
                onClick={() => handleCardClick(feature.link)}
              >
                <Card className="h-full overflow-hidden hover:border-secondary rounded-xl">
                  <div className="relative h-80 overflow-hidden group">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt="Interior and Construction services in Yelahanka, Bangalore"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 flex items-center justify-center">
                      <div className="text-white p-6 text-center transform transition-transform duration-500 group-hover:scale-110">
                        <motion.div className="inline-block mb-4">{feature.icon}</motion.div>
                        <h3 className="text-2xl font-bold mt-2 mb-2">{feature.title}</h3>
                        <div className="w-12 h-1 bg-secondary mx-auto mb-4"></div>
                        <p className="text-white/90">{feature.description}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 px-6 py-2 bg-secondary text-white rounded-full inline-flex items-center"
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push("/featured-projects")
                            window.scrollTo(0, 0)
                          }}
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageLayoutSection
