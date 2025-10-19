"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { label: "Years Experience", value: "2+", color: "from-primary/20 to-primary/40" },
  { label: "Projects Completed", value: "15+", color: "from-[#D6A99D]/30 to-[#D6A99D]/50" },
  { label: "Technologies", value: "10+", color: "from-primary/20 to-primary/40" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">About Me</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`relative p-6 rounded-lg bg-gradient-to-br ${stat.color} border border-primary/20 backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate fullstack developer with a love for creating seamless, performant web experiences. My
              journey in web development started with a curiosity about how things work under the hood, and has evolved
              into a career focused on building elegant solutions to complex problems.
            </p>

            <p>
              I specialize in modern JavaScript frameworks and have a strong foundation in both frontend and backend
              technologies. I believe in writing clean, maintainable code and staying up-to-date with the latest
              industry trends and best practices.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
