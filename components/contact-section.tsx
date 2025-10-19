"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Check, Linkedin, Github, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const email = "zahraardane2001@gmail.com"
  const phone = "+989123456789"
  const linkedinUrl = "https://linkedin.com/in/zahra-ardaneh"
  const githubUrl = "https://github.com/zahra-ardane"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const copyPhone = () => {
    navigator.clipboard.writeText(phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-primary text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={12}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4">
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card/50 border border-blue-500/30 rounded-lg hover:border-blue-500 hover:bg-card transition-all group"
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-sm text-muted-foreground">Connect professionally</div>
                </div>
              </motion.a>

              <motion.button
                onClick={copyEmail}
                className="w-full flex items-center gap-4 p-4 bg-card/50 border border-primary/30 rounded-lg hover:border-primary hover:bg-card transition-all group"
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</div>
                  <div className="text-sm text-muted-foreground truncate">{email}</div>
                </div>
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                )}
              </motion.button>

              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card/50 border border-[#D6A99D]/30 rounded-lg hover:border-[#D6A99D] hover:bg-card transition-all group"
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#D6A99D]/20 rounded-lg group-hover:bg-[#D6A99D]/30 transition-colors">
                  <Github className="w-6 h-6 text-[#D6A99D]" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground group-hover:text-[#D6A99D] transition-colors">
                    GitHub
                  </div>
                  <div className="text-sm text-muted-foreground">View my code</div>
                </div>
              </motion.a>

              <motion.button
                onClick={copyPhone}
                className="w-full flex items-center gap-4 p-4 bg-card/50 border border-primary/30 rounded-lg hover:border-primary hover:bg-card transition-all group"
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Phone</div>
                  <div className="text-sm text-muted-foreground">{phone}</div>
                </div>
                {copiedPhone ? (
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
