"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush,
  Building2,
  ClipboardList,
  PencilRuler,
  Sparkles,
  Hammer,
  PaintBucket,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/scroll-animation";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  icon: keyof typeof icons;
  link: string;
  image?: string;
};

const services: Service[] = [
  {
    title: "Home Interior",
    description:
      "Transform your living spaces with our comprehensive interior design solutions, from concept to completion.",
    icon: "brush",
    link: "/services#home-interior",
    image: "/updated-homein.jpg",
  },
  {
    title: "Office/Corporate Interiors",
    description:
      "Create productive and stylish workspaces with our expert corporate interior design and implementation services.",
    icon: "briefcase",
    link: "/services#office-interior",
    image: "/Updated-officein.jpg",
  },
  {
    title: "Residential & Commercial Construction",
    description:
      "End-to-end construction services with expert architectural planning, structural engineering, and project management.",
    icon: "hammer",
    link: "/services#construction",
    image: "/Const1.png",
  },
  {
    title: "Renovation",
    description:
      "Revitalize your existing spaces with our comprehensive renovation services.",
    icon: "paint",
    link: "/services#renovation",
    image: "/Updated-renovation.png",
  },
  {
    title: "PMC - Project Management & Consultancy",
    description:
      "Expert project management and consultancy services to ensure your construction projects are delivered on time and within budget.",
    icon: "clipboard-list",
    link: "/services#pre-engineered-building",
    image: "/PMC1.png",
  },
  {
    title: "Design & Drawings",
    description:
      "Detailed architectural drawings and design documentation with precision engineering and creative excellence.",
    icon: "pencil-ruler",
    link: "/services#products",
    image: "/Updated-D&D.jpg",
  },
];

const icons = {
  brush: <Paintbrush className="h-8 w-8 text-gold-500" />,
  briefcase: <Briefcase className="h-8 w-8 text-gold-500" />,
  hammer: <Hammer className="h-8 w-8 text-gold-500" />,
  paint: <PaintBucket className="h-8 w-8 text-gold-500" />,
  "clipboard-list": <ClipboardList className="h-8 w-8 text-gold-500" />,
  "pencil-ruler": <PencilRuler className="h-8 w-8 text-gold-500" />,
} as const;

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = (link: string) => {
    router.push(link);
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">
                OUR SERVICES
              </span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">
              Comprehensive Design & Construction Solutions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gold-600 max-w-3xl mx-auto">
              We offer a complete range of interior design and construction
              services tailored to your specific needs
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full cursor-pointer"
                onClick={() => handleCardClick(service.link)}
              >
                <Card className="h-full transition-all duration-300 hover:border-gold-300 overflow-hidden rounded-xl bg-white shadow-lg">
                  <div className="relative">
                    {/* Image container */}
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>

                    {/* Icon container - positioned absolutely */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-20 h-20 flex items-center justify-center border-4 border-white shadow-lg z-20">
                      <motion.div
                        animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {icons[service.icon]}
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-4 text-center mt-12">
                    <h3 className="text-xl font-semibold mb-2 text-navy-900">
                      {service.title}
                    </h3>
                    <div className="text-gray-600 mb-3 text-sm">
                      <div dangerouslySetInnerHTML={{ __html: service.description }} />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gold-600 font-medium flex items-center justify-center group text-sm"
                    >
                      Learn More
                      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
