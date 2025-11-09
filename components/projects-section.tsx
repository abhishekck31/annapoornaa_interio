"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, MapPin, ArrowRight, X } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import VideoPlayer from "./video-player" // Import the VideoPlayer component
import VimeoPlayer from "./vimeo-player" // Import the VimeoPlayer component

// Only export the first 2 projects for the home page
import { homePageProjects } from "@/data/projects-data"
import { Project } from "@/types/project"

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openProjectDetails = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  const getProjectById = (id: number) => {
    return homePageProjects.find((project) => project.id === id)
  }

  const nextImage = () => {
    if (selectedProject) {
      const project = getProjectById(selectedProject)
      if (project) {
        setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
      }
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      const project = getProjectById(selectedProject)
      if (project) {
        setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
      }
    }
  }

  return (
    <section className="py-20 bg-white mt-8" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Projects</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Featured Projects in Bangalore</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our showcase of completed projects across Bangalore
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Projects Grid View - Only 2 projects */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-16 w-full overflow-x-hidden">
          {/* Project Card */}
          <div className="md:w-1/2 w-full flex items-stretch justify-center">
            {homePageProjects.filter(project => project.id === 1).map((project, index) => (
              <ScrollAnimation key={project.id}>
                <motion.div
                  className="group w-full max-w-md md:max-w-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="shadow-lg transition-transform duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 w-full mb-16 md:mb-0">
                    <div className="relative w-full h-auto">
                      <img
                        src={project.mainImage}
                        alt="Interior and Construction services in Yelahanka, Bangalore"
                        className="object-cover w-full h-auto rounded-t-lg"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 bg-white pb-28 sm:pb-6">
                      <div className="flex flex-col space-y-2 text-left mb-6">
                        <div className="flex items-center justify-start">
                          <span className="inline-block bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded-full font-semibold">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-navy-900 break-words whitespace-normal mt-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-gold-600 text-sm sm:text-base mt-1">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-1 flex-shrink-0" />
                          <span className="break-words whitespace-normal">{project.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base break-words whitespace-normal mt-1">
                          {project.description}
                        </p>
                        <Link 
                          href="/featured-projects" 
                          scroll={true} 
                          className="text-gold-600 font-medium flex items-center text-sm sm:text-base mt-2"
                        >
                          View Details <ArrowRight className="ml-1 h-4 w-4 sm:h-4 sm:w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
          {/* Enhanced Clients Section */}
          <div className="md:w-1/2 w-full flex items-stretch justify-center mt-6 md:mt-0">
            <div className="w-full max-w-md md:max-w-none bg-gradient-to-br from-gold-50 to-white border border-gold-100 rounded-xl shadow-md p-4 sm:p-8 text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 flex items-center justify-center md:justify-start">
                <Sparkles className="mr-2 text-gold-500" />Our Esteemed Clients
              </h4>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Annapoornaa Interio has had the privilege of working with a wide range of reputed and prestigious clients across various industries. Our portfolio includes collaborations with leading corporates, innovative startups, and established institutions. We take pride in delivering tailored interior solutions that reflect our clients' unique visions and requirements.
              </p>
              <div className="mb-4">
                <h5 className="font-semibold text-navy-800 mb-2 text-base">Notable Clients:</h5>
                <ul className="list-disc pl-5 columns-1 sm:columns-2 gap-x-8">
                  <li>Asmara Apparels</li>
                  <li>Emudhra Limited</li>
                  <li>Surbana Jurong - SMEC</li>
                  <li>Gokaldas Chambers</li>
                  <li>TSS India Private Limited</li>
                  <li>Hengst Filtration</li>
                  <li>Aron Universal Limited</li>
                  <li>Ingex Lab Private Limited</li>
                </ul>
              </div>
              <div className="mb-4">
                <h5 className="font-semibold text-navy-800 mb-2 text-base">Our Approach:</h5>
                <p className="text-gray-600 text-sm sm:text-base">
                  We believe in a collaborative process, working closely with our clients from concept to completion. Our team ensures every project is delivered on time, within budget, and with the highest standards of quality and innovation.
                </p>
              </div>
              <Link href="/contact">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded shadow-lg mt-2 text-sm sm:text-base">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 items-center sm:flex-row sm:gap-4 sm:justify-center">
  <Link href="/featured-projects" className="w-full sm:w-auto">
    <Button className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
      View All Projects
    </Button>
  </Link>
</div>
    </section>
  );
}

export default ProjectsSection;
