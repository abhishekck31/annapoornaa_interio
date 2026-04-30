"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import LeadLink from "@/components/lead-link"
import { siteConfig, whatsappUrl } from "@/lib/site-config"
import { trackEvent } from "@/lib/tracking"

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, url: siteConfig.socialLinks.facebook, label: "Facebook" },
    { icon: <Instagram className="h-4 w-4" />, url: siteConfig.socialLinks.instagram, label: "Instagram" },
    { icon: <Linkedin className="h-4 w-4" />, url: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
  ].filter((link) => Boolean(link.url))

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 rounded-t-xl" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <div className="mb-6">
              <div className="bg-white p-1 rounded-md inline-block">
                <Image
                  src="/images/logo.png"
                  alt="ACIPL Logo - Interior Designers and Construction Company in Yelahanka Bangalore"
                  width={220}
                  height={62}
                  className="h-16 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Interior design, renovation, and construction experts based in Yelahanka, serving all major Bangalore neighborhoods.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex space-x-4 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300 hover:text-gold-400 transition-colors p-2 bg-navy-800 rounded-full"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-gold-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2 transform transition-transform duration-300 group-hover:scale-150"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-gold-500 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/home-interiors" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group"><span className="w-2 h-2 bg-gold-400 rounded-full mr-2 group-hover:scale-150"></span>Home Interiors</Link></li>
              <li><Link href="/services/office-corporate-interiors" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group"><span className="w-2 h-2 bg-gold-400 rounded-full mr-2 group-hover:scale-150"></span>Office Interiors</Link></li>
              <li><Link href="/services/residential-commercial-construction" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group"><span className="w-2 h-2 bg-gold-400 rounded-full mr-2 group-hover:scale-150"></span>Construction</Link></li>
              <li><Link href="/services/renovation-services" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group"><span className="w-2 h-2 bg-gold-400 rounded-full mr-2 group-hover:scale-150"></span>Renovation</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group"><span className="w-2 h-2 bg-gold-400 rounded-full mr-2 group-hover:scale-150"></span>Products</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center justify-center sm:justify-start group"><span className="w-2 h-2 bg-gold-400 rounded-full mr-2 group-hover:scale-150"></span>Blog</Link></li>
            </ul>
          </div>

          {/* Locations We Serve */}
          <div className="text-center sm:text-left lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-gold-500 pb-2 inline-block whitespace-nowrap">Locations We Serve</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {[
                { name: "Yelahanka", path: "/bangalore-yelahanka" },
                { name: "Indiranagar", path: "/bangalore/indiranagar" },
                { name: "Whitefield", path: "/bangalore/whitefield" },
                { name: "Koramangala", path: "/bangalore/koramangala" },
                { name: "HSR Layout", path: "/bangalore/hsr-layout" },
                { name: "Hebbal", path: "/bangalore/hebbal" },
                { name: "Jayanagar", path: "/bangalore/jayanagar" },
                { name: "JP Nagar", path: "/bangalore/jp-nagar" },
                { name: "Electronic City", path: "/bangalore/electronic-city" },
                { name: "Malleshwaram", path: "/bangalore/malleshwaram" },
                { name: "Marathahalli", path: "/bangalore/marathahalli" },
                { name: "Banashankari", path: "/bangalore/banashankari" },
                { name: "Rajajinagar", path: "/bangalore/rajajinagar" },
                { name: "BTM Layout", path: "/bangalore/btm-layout" }
              ].map((loc, i) => (
                <Link key={i} href={loc.path} className="text-gray-400 hover:text-gold-400 transition-colors">
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-gold-500 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center sm:justify-start group">
                <MapPin className="h-6 w-6 text-gold-500 mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <span className="text-gray-300">
                  1st floor, #395, 8th 'B' Main, 14th 'B' cross, 2nd stage, 'B' sector, Yelahanka New Town, Bangalore - 560064
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start group">
                <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <div className="flex flex-col">
                  <a href="tel:+919900094942" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => trackEvent("lead_call_click", { sourcePage: "footer", phone: siteConfig.phones[0] })}>+91 99000 94942</a>
                  <a href="tel:+918073141413" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => trackEvent("lead_call_click", { sourcePage: "footer", phone: siteConfig.phones[1] })}>+91 80731 41413</a>
                </div>
              </li>
              <li className="flex items-center justify-center sm:justify-start group">
                <Mail className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@ac-ipl.in" className="text-gray-300 hover:text-gold-400 transition-colors" onClick={() => trackEvent("lead_email_click", { sourcePage: "footer" })}>
                  info@ac-ipl.in
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start group">
                <MessageCircle className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <LeadLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="lead_whatsapp_click"
                  eventParams={{ sourcePage: "footer" }}
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  WhatsApp quick inquiry
                </LeadLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
              <a href="https://www.rera.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400">RERA Karnataka</a>
              <a href="https://www.iia.org.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">Indian Institute of Architects</a>
              <a href="https://www.cpwd.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">CPWD Guidelines</a>
              <a href="https://www.bis.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">Bureau of Indian Standards</a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ACIPL. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
