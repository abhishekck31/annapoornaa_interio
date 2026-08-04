"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/**
 * Hero images are served as pre-compressed WebP (≈130–340KB) rather than the
 * original 4–6MB PNGs, and rendered through next/image so the first slide is
 * preloaded and served at the right size for the device. Previously these were
 * CSS background-images, which the browser's preload scanner cannot discover —
 * that made the largest asset on the page also the last one requested.
 */
const slides = [
  {
    image: "/hero/hero-1.webp",
    alt: "Modern living room interior designed and executed by ACIPL in Bangalore",
    title: "Transform Your Space",
    description: "Professional interior design solutions for homes and offices",
  },
  {
    image: "/hero/hero-2.webp",
    alt: "Residential construction project delivered by ACIPL in Bangalore",
    title: "Build Your Dream Home",
    description: "Expert construction services with attention to detail",
  },
  {
    image: "/hero/hero-3.webp",
    alt: "Renovated home interior completed by ACIPL in Bangalore",
    title: "Renovate With Confidence",
    description: "Breathe new life into your existing spaces",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    slideInterval.current = setInterval(() => {
      setDirection(-1); // Set to -1 to slide from left to right
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    startSlideTimer();

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const handleSlideChange = (index: number) => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }

    // Determine the direction based on the current and target slide
    setDirection(index > currentSlide ? -1 : 1); // Reversed to ensure correct direction
    setCurrentSlide(index);
    startSlideTimer();
  };

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden mt-20">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.8, ease: "easeInOut" },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover"
            />
            {/* Darkening scrim, previously baked into the background gradient. */}
            <div className="absolute inset-0 bg-[rgba(0,0,20,0.45)]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <motion.p
                  key={`eyebrow-${currentSlide}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-2xl font-semibold mb-4 drop-shadow-lg"
                >
                  <span className="text-gradient-animate">
                    {slides[currentSlide].title}
                  </span>
                </motion.p>

                {/*
                  A single, stable H1. It previously rotated with the carousel,
                  so the page's only H1 changed every five seconds and carried
                  no keyword at all.
                */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                  Interior Designers &amp; Construction Company in Bangalore
                </h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/contact">
                    <Button className="bg-gold-600 hover:bg-gold-700 text-navy-900 font-semibold px-8 py-6 rounded-md text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gold-500 hover-3d">
                      Get in Touch <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gold-500 w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
