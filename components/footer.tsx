"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <motion.div
        className="container mx-auto text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-[#D6A99D]">Zahra Ardaneh</span>. Built with Next.js &
          Tailwind CSS.
        </p>
      </motion.div>
    </footer>
  )
}
