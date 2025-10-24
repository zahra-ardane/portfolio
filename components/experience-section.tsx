"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    year: "2022",
    title: "Joined Team-X as Full-Stack Developer",
    description: [
      "Started shaping real-world products where reliability meets design. Quickly took ownership of key features and found a rhythm between front-end detail and back-end depth.",
      "Learned how to build for users, not just for code — balancing clean architecture with practical delivery.",
    ],
  },
  {
    year: "2023",
    title: "Building and Scaling with Purpose",
    description: [
      "Began leading major features from concept to production, translating complex ideas into simple, elegant solutions.",
      "Worked across the full stack — refining APIs, optimizing performance, and shaping systems that scaled smoothly as products grew.",
    ],
  },
  {
    year: "2024",
    title: "Owning Craft and Collaboration",
    description: [
      "Focused on technical clarity, maintainability, and shared standards across the team.",
      "Helped guide architectural improvements and initiated team sessions to strengthen collaboration and code quality.",
    ],
  },
  {
    year: "2025",
    title: "Mastering Impactful Systems",
    description: [
      "Delivering features that just work — fast, reliable, and elegant — where every detail counts.",
      "Building systems that anticipate user needs, scale seamlessly, and feel effortless to interact with.",
      "Driven by curiosity and craft, constantly refining processes and solutions to make the next product even better."
    ],
  }
  
]


export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="relative" ref={containerRef}>
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-[#D6A99D]/40 to-primary origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 items-start md:items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div
                  className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}
                >
                  <span className="text-2xl font-bold font-mono text-[#D6A99D]">{exp.year}</span>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background shadow-[0_0_15px_rgba(94,234,212,0.5)]" />

                <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:order-2 md:pl-12" : "md:pr-12"}`}>
                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
