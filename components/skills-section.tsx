"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const skillRows = [
  [
    { name: "JavaScript", logo: "/javascript-logo.png" },
    { name: "TypeScript", logo: "/typescript-logo.png" },
    { name: "Node.js", logo: "/nodejs-logo.png" },
    { name: "Express", logo: "/generic-transport-logo.png" },
  ],
  [
    { name: "Next.js", logo: "/nextjs-logo.png" },
    { name: "React", logo: "/react-logo.png" },
    { name: "Tailwind CSS", logo: "/tailwind-css-logo.png" },
    { name: "PostgreSQL", logo: "/postgresql-logo.png" },
  ],
  [
    { name: "MongoDB", logo: "/mongodb-logo.png" },
    { name: "Git", logo: "/generic-transport-logo.png" },
    { name: "Docker", logo: "/generic-transport-logo.png" },
    { name: "REST APIs", logo: "/generic-transport-logo.png" },
  ],
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const row3Ref = useRef(null)

  const row1InView = useInView(row1Ref, { once: true, amount: 0.1 })
  const row2InView = useInView(row2Ref, { once: true, amount: 0.1 })
  const row3InView = useInView(row3Ref, { once: true, amount: 0.1 })

  const rowRefs = [row1Ref, row2Ref, row3Ref]
  const rowInViews = [row1InView, row2InView, row3InView]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-primary text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="space-y-8">
          {skillRows.map((row, rowIndex) => {
            const rowRef = rowRefs[rowIndex]
            const rowInView = rowInViews[rowIndex]

            return (
              <motion.div 
                key={rowIndex} 
                ref={rowRef} 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 80 }}
                animate={
                  rowInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : { opacity: 0, y: 80 }
                }
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  bounce: 0.3,
                  delay: rowIndex * 0.2,
                }}
              >
                {row.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                    initial={{ scale: 0.8 }}
                    animate={
                      rowInView
                        ? {
                            scale: 1,
                          }
                        : { scale: 0.8 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      bounce: 0.2,
                      delay: rowIndex * 0.2 + 0.1,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-center font-semibold group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
