"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Layers, Database, Plug, Zap, TrendingUp, Users, Shield, Rocket } from "lucide-react"

const services = [
  {
    title: "Scalable Backend Architecture",
    description:
      "I shape backend systems that stay calm under pressure — built on Node.js, TypeScript, and Express. Each layer is structured to grow, recover, and keep performing long after launch.",
    icon: Server,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 group-hover:bg-primary/30",
    iconColor: "text-primary",
    textColor: "group-hover:text-primary",
  },
  {
    title: "Database & API Design",
    description:
      "I design data layers that don’t just work — they flow~ With MySQL and Redis under the hood, my REST APIs stay fast, predictable, and a pleasure to extend or debug.",
    icon: Database,
    color: "from-[#D6A99D]/20 to-[#D6A99D]/5",
    borderColor: "border-[#D6A99D]/30 hover:border-[#D6A99D]",
    iconBg: "bg-[#D6A99D]/20 group-hover:bg-[#D6A99D]/30",
    iconColor: "text-[#D6A99D]",
    textColor: "group-hover:text-[#D6A99D]",
  },
  {
    title: "High-Impact Frontend Development",
    description:
      "React and Next.js are where I bring ideas to life — fast, responsive, and intentional. Every component serves a purpose; every screen feels considered, not crowded.",
    icon: Code2,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 group-hover:bg-primary/30",
    iconColor: "text-primary",
    textColor: "group-hover:text-primary",
  },
  {
    title: "UI/UX Engineering",
    description:
      "Interfaces should feel effortless. I focus on clean layouts, clear flows, and the tiny interactions that quietly make users stay longer — not think harder.",
    icon: Users,
    color: "from-[#D6A99D]/20 to-[#D6A99D]/5",
    borderColor: "border-[#D6A99D]/30 hover:border-[#D6A99D]",
    iconBg: "bg-[#D6A99D]/20 group-hover:bg-[#D6A99D]/30",
    iconColor: "text-[#D6A99D]",
    textColor: "group-hover:text-[#D6A99D]",
  },
  {
    title: "Testing & Reliability",
    description:
      "I build with safety nets — Mocha, Chai, and thoughtful test design that keeps releases steady and edge cases handled before they reach production.",
    icon: Shield,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 group-hover:bg-primary/30",
    iconColor: "text-primary",
    textColor: "group-hover:text-primary",
  },
  {
    title: "Collaboration & Leadership",
    description:
      "Good code is shared code. I value clear discussions, practical reviews, and helping a team move in rhythm — from the first commit to the final deploy.",
    icon: Rocket,
    color: "from-[#D6A99D]/15 to-[#D6A99D]/5",
    borderColor: "border-[#D6A99D]/30 hover:border-[#D6A99D]",
    iconBg: "bg-[#D6A99D]/20 group-hover:bg-[#D6A99D]/30",
    iconColor: "text-[#D6A99D]",
    textColor: "group-hover:text-[#D6A99D]",
  },
];




export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-primary text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          What I Can Provide
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className={`relative p-6 rounded-lg bg-gradient-to-br ${service.color} border ${service.borderColor} backdrop-blur-sm overflow-hidden group`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.3,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`mb-4 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className={`text-xl font-bold mb-3 text-foreground ${service.textColor} transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
