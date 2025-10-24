"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { label: "Years Experience", value: "3+", color: "from-primary/20 to-primary/40" },
  { label: "Projects Completed", value: "20+", color: "from-[#D6A99D]/30 to-[#D6A99D]/50" },
  { label: "Technologies", value: "15+", color: "from-primary/20 to-primary/40" },
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
            I believe great code should feel as good as it performs — clear, balanced, and quietly intelligent. 
            There’s something deeply satisfying about building systems that run smoothly and read like they were always meant to work that way. 
            For me, development isn’t just about functionality — it’s about crafting something that feels effortless to use and elegant to maintain.
          </p>

          <p>
            Over the past few years, I’ve worked across the full stack, shaping everything from refined user interfaces to scalable backend systems. 
            Each project has reinforced a simple truth: elegance in tech isn’t about cleverness — it’s about clarity, empathy, and thoughtful design. 
            I care about writing code that tells a clear story and designing systems that make sense long after they’re shipped.
          </p>

          <p>
            These days, I’m focused on creating reliable, modern web experiences with JavaScript and TypeScript — using Node.js, Next.js, MySQL, and Redis at the core. 
            What drives me most is curiosity — the constant urge to dig deeper into architecture, scalability, and performance, and to make every build a little cleaner, faster, and smarter than the last.
          </p>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
