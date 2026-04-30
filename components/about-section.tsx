"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";
import { Award, CheckCircle, TrendingUp, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <ScrollAnimation className="relative">
  {/* Ammanavaru image and text */}
  <div className="flex flex-col items-center mb-8">
    <img
      src="/ammanavaru.png"
      alt="ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಅಮ್ಮನವರು"
      className="w-[350px] rounded-xl shadow-lg"
      style={{ background: "#fff" }}
    />
    <div className="mt-3 text-xl font-bold text-gold-700 text-center">
      ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಅಮ್ಮನವರು
    </div>
  </div>

  {/* CEO image and overlay */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="relative"
  >
    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-200 rounded-tl-3xl z-0"></div>
    <div className="relative rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
      <img
        src="/CEOimage.jpg"
        alt="About ACIPLr & Construction Company"
        className="w-full h-[400px] object-cover"
      />
      {/* CEO Information Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Raghu Lakshmipathi
          </h3>
          <p className="text-gold-400 text-lg">CEO & Director</p>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-navy-200 rounded-br-3xl z-0"></div>
  </motion.div>
</ScrollAnimation>

          <ScrollAnimation>
            <div className="inline-flex items-center justify-start mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 heading-glow-scroll">
              About <span className="text-gold-600">Annapoorneshwari Constructions Interiors Private Limited</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 mb-6 text-glow-scroll">
              Annapoorneshwari Constructions Interiors Private Limited is a premier interior design and construction
              company dedicated to transforming spaces into functional and
              aesthetically pleasing environments. With years of experience in
              the industry, we have established ourselves as a trusted name for
              quality craftsmanship and innovative design solutions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg heading-glow-scroll">
                    Premium Quality Materials
                  </h3>
                  <p className="text-gray-600 text-glow-scroll">
                    We use only the highest quality materials for all our
                    projects
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg heading-glow-scroll">
                    Expert Design & Execution Team
                  </h3>
                  <p className="text-gray-600 text-glow-scroll">
                    Our team of designers brings creativity and expertise to
                    every project
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg heading-glow-scroll">
                    Timely Project Completion
                  </h3>
                  <p className="text-gray-600 text-glow-scroll">
                    We value your time and ensure projects are completed in stipulated timeline
                  </p>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" scroll={false}>
                <Button className="bg-gold-600 hover:bg-gold-700 text-navy-900 px-8 py-4 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
