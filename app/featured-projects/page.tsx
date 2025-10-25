"use client"

import { Metadata } from 'next'
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, MapPin, Star, User, ChevronLeft, ChevronRight, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollAnimation from "@/components/scroll-animation"
import Link from "next/link"
import { projects } from "@/data/projects-data"
import { motion, AnimatePresence } from "framer-motion"
import VideoPlayer from "@/components/video-player" // Import the VideoPlayer component
import VimeoPlayer from "@/components/vimeo-player" // Import the VimeoPlayer component

export const metadata: Metadata = {
  title: 'Featured Projects | Interior Design Portfolio - Annapoornaa Interio',
  description: 'Explore our featured interior design projects in Bangalore. Residential, commercial, construction work with client testimonials.',
}

export default function FeaturedProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openProjectDetails = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  const getProjectById = (id: number) => {
    return projects.find((project) => project.id === id)
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

  // Add gallery popup functionality
  const [showGallery, setShowGallery] = useState(false)
  // Add video popup functionality
  const [showVideo, setShowVideo] = useState(false)

  const openGallery = (projectId: number) => {
    setSelectedProject(projectId)
    setShowGallery(true)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setShowGallery(false)
  }

  // Video functions
  const openVideo = (projectId: number) => {
    setSelectedProject(projectId)
    setShowVideo(true)
  }

  const closeVideo = () => {
    setShowVideo(false)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-96 mt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Our Portfolio</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Featured Projects</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our showcase of completed projects
            </p>
          </div>

          {/* Project Sections */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 100}>
                <div id={`project-${project.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-96">
                    <img
                      src={project.mainImage || "/Asmara-project/Asmara1.jpg"}
                      alt="Interior and Construction services in Yelahanka, Bangalore"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex flex-col justify-end p-8">
                      <div className="flex items-center mb-2">
                        <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center text-gold-300 text-sm mb-4">
  <MapPin className="h-4 w-4 mr-1" />
  <span>{project.location}</span>
</div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                      <div className="lg:col-span-5 space-y-4">
                        <div>
                          <h4 className="text-xl font-semibold text-navy-900 mb-2">Project Overview</h4>
                          <p className="text-gray-700">{project.description}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-navy-900 mb-2">Client Testimonial</h4>
                          <Card className="bg-gray-50 border-none">
                            <CardContent className="p-3">
                              <div className="flex items-center mb-2">
                                {[...Array(project.clientRating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
                                ))}
                              </div>
                              <blockquote className="text-gray-700 italic mb-2 text-sm">"{project.clientReview}"</blockquote>
                              <div className="flex items-center">
                                <User className="h-6 w-6 text-navy-900 bg-gray-200 rounded-full p-1" />
                                <div className="ml-2">
                                  <p className="font-medium text-navy-900 text-sm">{project.clientName}</p>
                                  <p className="text-xs text-gray-600">{project.location}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div className="lg:col-span-7">
                        <div className="flex flex-col gap-2 w-full sm:flex-row sm:gap-4 mb-4">
                          <Button
                            className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white text-sm px-4 py-2"
                            onClick={() => openGallery(project.id)}
                          >
                            View Full Gallery
                          </Button>
                          <Button
                            className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white text-sm px-4 py-2"
                            onClick={() => openVideo(project.id)}
                          >
                            View Walkthrough Video
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {project.images.slice(0, 2).map((image, index) => (
                            <div
                              key={index}
                              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                              onClick={() => {
                                openProjectDetails(project.id)
                                setCurrentImageIndex(index)
                              }}
                            >
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {showGallery && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {getProjectById(selectedProject) && (
                <>
                  <div className="relative h-[70vh]">
                    <img
                      src={getProjectById(selectedProject)?.images[currentImageIndex] || "/placeholder.svg"}
                      alt="Interior and Construction services in Yelahanka, Bangalore"
                      className="w-full h-full object-contain"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6 text-white" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6 text-white" />
                    </button>
                  </div>

                  <div className="mt-6 bg-navy-900/50 p-4 rounded-lg backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white">
                      {getProjectById(selectedProject)?.title} - Image {currentImageIndex + 1} of{" "}
                      {getProjectById(selectedProject)?.images.length}
                    </h3>

                    <div className="mt-4 grid grid-cols-6 gap-2">
                      {getProjectById(selectedProject)?.images.map((image, idx) => (
                        <div
                          key={idx}
                          className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                            idx === currentImageIndex ? "border-gold-500" : "border-transparent"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(idx)
                          }}
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-16 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {getProjectById(selectedProject) && (
                <div className="relative h-[70vh] flex items-center justify-center">
                  {getProjectById(selectedProject)?.embedCode ? (
                    <div
                      className="w-full max-w-4xl h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: getProjectById(selectedProject)?.embedCode || "" }}
                    />
                  ) : (
                    <video
                      src={getProjectById(selectedProject)?.video || "/placeholder.mp4"}
                      aria-label={`${getProjectById(selectedProject)?.title} video`}
                      className="w-full h-full object-contain"
                      controls
                      poster={getProjectById(selectedProject)?.mainImage}
                    />
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
