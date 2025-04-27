"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"

const stats = [
  { value: 200, label: "Projects Completed", suffix: "+" },
  { value: 10, label: "Years of Experience", suffix: "+" },
  { value: 100, label: "Satisfied Clients", suffix: "%" },
]

const StatsSection = () => {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-navy-50 to-gold-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-navy-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-center text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-2"
                >
                  <div className="text-5xl md:text-6xl font-bold text-navy-900 flex items-center justify-center">
                    <CountUp end={isInView ? stat.value : 0} duration={2} />
                    <span className="text-gold-600">{stat.suffix}</span>
                  </div>
                </motion.div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-lg text-gray-600 font-medium"
                >
                  {stat.label}
                </motion.p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

// Simple CountUp component
type CountUpProps = { end: number; duration: number };
const CountUp = (props: CountUpProps) => {
  const { end, duration } = props;
  const [count, setCount] = useState(0)
  const countRef = useRef<number | null>(null)

  useEffect(() => {
    if (end === 0) return

    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    countRef.current = requestAnimationFrame(function updateCount() {
      const now = Date.now()
      const progress = Math.min(1, (now - startTime) / (endTime - startTime))
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        countRef.current = requestAnimationFrame(updateCount)
      }
    })

    return () => {
      if (typeof countRef.current === 'number') {
        cancelAnimationFrame(countRef.current)
      }
    }
  }, [end, duration])

  return <>{count}</>
}

export default StatsSection
