"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  const whatsappMessage = "Hello! I'm interested in learning more about Annapoornaa Interio's services. Could you please provide more information?"
  const whatsappLink = `https://wa.me/918073141413?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 rounded-t-xl" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="bg-white p-1 rounded-md inline-block">
  <Image
    src="/images/logo.png"
    alt="Annapoornaa Interio Logo"
    width={220}
    height={62}
    className="h-16 w-auto"
  />
</div>
            </div>
            <p className="text-gray-300 mb-6">
              Smart Designs. Seamless Execution
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-gold-400 transition-colors p-2 bg-navy-800 rounded-full"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-gold-400 transition-colors p-2 bg-navy-800 rounded-full"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 hover:text-gold-400 transition-colors p-2 bg-navy-800 rounded-full"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Clock className="h-5 w-5 text-gold-400 mr-2" />
              Open Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="font-medium">Monday - Saturday</p>
                  <p className="text-gray-300">10:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">

              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-300">Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#home-interior"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Home Interiors
                </Link>
              </li>
              <li>
                <Link
                  href="/services#office-interior"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Office/Corporate Interiors
                </Link>
              </li>
              <li>
                <Link
                  href="/services#construction"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Residential & Commercial Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#renovation"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center group"
                >
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              <Link href="/contact">Contact us</Link>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5 group-hover:bg-gold-500/40 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-gold-400" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-0">
                1st floor,  #395,  8th 'B' Main,  14th 'B' cross, 2nd stage,  'B' sector,  Yelahanka New Town,  Bangalore - 560064.
                </p>
              </li>
              <li className="flex items-center group">
                <div className="bg-gold-500/20 p-1.5 rounded-full mr-3 group-hover:bg-gold-500/40 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-gold-400" />
                </div>
                <a
                  href="mailto:info@annapoornainterio.com"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  info@annapoornainterio.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-gold-500/20 p-1.5 rounded-full mr-3 group-hover:bg-gold-500/40 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-gold-400" />
                </div>
                <a href="tel:+919900094942" className="text-gray-300 hover:text-gold-400 transition-colors">
                  +91 99000 94942
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-gold-500/20 p-1.5 rounded-full mr-3 group-hover:bg-gold-500/40 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-gold-400" />
                </div>
                <a href="tel:+918073141413" className="text-gray-300 hover:text-gold-400 transition-colors">
                  +91 80731 41413
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-green-500/20 p-1.5 rounded-full mr-3 group-hover:bg-green-500/40 transition-colors duration-300">
                  <FaWhatsapp size={20} color="rgb(74 222 128)" />
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8">
          {/* External Authority Links */}
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a href="https://www.rera.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
              RERA Karnataka
            </a>
            <a href="https://www.iia.org.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
              Indian Institute of Architects
            </a>
            <a href="https://www.cpwd.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
              CPWD Guidelines
            </a>
            <a href="https://www.bis.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">
              Bureau of Indian Standards
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Annapoornaa Interio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
