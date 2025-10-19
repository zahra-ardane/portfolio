"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Layers, Database, Plug, Zap } from "lucide-react"

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks",
    icon: Code2,
    color: "from-[#D6A99D]/20 to-[#D6A99D]/5",
    borderColor: "border-[#D6A99D]/30 hover:border-[#D6A99D]",
    iconBg: "bg-[#D6A99D]/20 group-hover:bg-[#D6A99D]/30",
    iconColor: "text-[#D6A99D]",
    textColor: "group-hover:text-[#D6A99D]",
  },
  {
    title: "Backend Development",
    description: "Creating robust APIs and server-side logic with Node.js, Express, and database integration",
    icon: Server,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 group-hover:bg-primary/30",
    iconColor: "text-primary",
    textColor: "group-hover:text-primary",
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end web application development from concept to deployment",
    icon: Layers,
    color: "from-[#D6A99D]/20 to-[#D6A99D]/5",
    borderColor: "border-[#D6A99D]/30 hover:border-[#D6A99D]",
    iconBg: "bg-[#D6A99D]/20 group-hover:bg-[#D6A99D]/30",
    iconColor: "text-[#D6A99D]",
    textColor: "group-hover:text-[#D6A99D]",
  },
  {
    title: "Database Design",
    description: "Designing and implementing efficient database schemas with PostgreSQL and other SQL databases",
    icon: Database,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 group-hover:bg-primary/30",
    iconColor: "text-primary",
    textColor: "group-hover:text-primary",
  },
  {
    title: "API Integration",
    description: "Integrating third-party services and building RESTful APIs for seamless data flow",
    icon: Plug,
    color: "from-[#D6A99D]/15 to-[#D6A99D]/5",
    borderColor: "border-[#D6A99D]/30 hover:border-[#D6A99D]",
    iconBg: "bg-[#D6A99D]/20 group-hover:bg-[#D6A99D]/30",
    iconColor: "text-[#D6A99D]",
    textColor: "group-hover:text-[#D6A99D]",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web applications for speed, SEO, and user experience",
    icon: Zap,
    color: "from-primary/15 to-primary/5",
    borderColor: "border-primary/30 hover:border-primary",
    iconBg: "bg-primary/20 group-hover:bg-primary/30",
    iconColor: "text-primary",
    textColor: "group-hover:text-primary",
  },
]

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
