"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket, ChevronDown } from "lucide-react"

const jobTitles = ["Fullstack Developer", "Backend Developer", "Frontend Developer"]

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedTitle, setDisplayedTitle] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [cycleCount, setCycleCount] = useState(0)

  useEffect(() => {
    if (cycleCount >= 3) {
      setDisplayedTitle("Fullstack Developer")
      return
    }

    const currentTitle = jobTitles[currentTitleIndex]

    if (isTyping) {
      if (displayedTitle.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedTitle(currentTitle.slice(0, displayedTitle.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedTitle.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedTitle(displayedTitle.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const nextIndex = (currentTitleIndex + 1) % jobTitles.length
        setCurrentTitleIndex(nextIndex)
        setIsTyping(true)
        if (nextIndex === 0) {
          setCycleCount((prev) => prev + 1)
        }
      }
    }
  }, [displayedTitle, isTyping, currentTitleIndex, cycleCount])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 240)
      gradient.addColorStop(0, "rgba(94, 234, 212, 0.4)")
      gradient.addColorStop(0.5, "rgba(94, 234, 212, 0.2)")
      gradient.addColorStop(1, "rgba(94, 234, 212, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center px-6 flex-1 flex items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Zahra Ardaneh
          </motion.h1>

          <div className="relative h-12 mb-8">
            <p className="text-2xl md:text-3xl text-primary font-mono">
              {displayedTitle}
              {cycleCount < 3 && <span className="animate-pulse">|</span>}
            </p>
          </div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-8 mix-blend-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting code that feels as good as it works
          </motion.p>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2 bg-[#D6A99D]"
            >
              <Rocket className="w-5 h-5" />
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
