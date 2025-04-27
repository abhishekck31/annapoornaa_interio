"use client"

import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ScrollNavigation = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed right-6 bottom-6 z-50 flex flex-col gap-3"
        >
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="bg-white hover:bg-gold-50 border-2 border-gold-500 text-navy-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ y: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            className="bg-white hover:bg-gold-50 border-2 border-gold-500 text-navy-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollNavigation
