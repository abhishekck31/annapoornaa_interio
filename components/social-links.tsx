"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram } from "lucide-react"

const SocialLinks = () => {
  const socialLinks = [
    { icon: <Facebook className="h-4 w-4" />, url: "https://www.facebook.com/Annapoornainterio/", label: "Facebook" },
    { icon: <Instagram className="h-4 w-4" />, url: "https://www.instagram.com/annapoornaa_interio/", label: "Instagram" },
  ]

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
