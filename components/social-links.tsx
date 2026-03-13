"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, url: siteConfig.socialLinks.facebook, label: "Facebook" },
    { icon: <Instagram className="h-4 w-4" />, url: siteConfig.socialLinks.instagram, label: "Instagram" },
    { icon: <Linkedin className="h-4 w-4" />, url: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
  ].filter((link) => Boolean(link.url))

  if (socialLinks.length === 0) return null

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col space-y-3">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-navy-900 text-white p-2 rounded-full shadow-lg hover:bg-gold-600 transition-all duration-300"
          aria-label={link.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
