"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = container.getBoundingClientRect()
      const x = (clientX - left - width / 2) / 25
      const y = (clientY - top - height / 2) / 25

      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.18 180) 0%, transparent 70%)",
            top: "10%",
            left: "20%",
            transform: "translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))",
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.15 200) 0%, transparent 70%)",
            bottom: "20%",
            right: "15%",
            transform: "translate(calc(var(--mouse-x, 0) * 0.5), calc(var(--mouse-y, 0) * 0.5))",
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary">Available for opportunities</span>
        </div>

        {/* Profile Photo */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/60 to-primary/30 blur-md" />
            <div className="relative w-40 h-48 md:w-48 md:h-56 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
              <img
                src="/images/mansi-profile.png"
                alt="Mansi Pandey"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow text-balance"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Mansi Pandey
        </h1>

        <p className="text-xl md:text-2xl text-primary mb-4">
          AI/ML Engineer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
          Building intelligent systems and solving real-world problems using AI and data-driven approaches.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 box-glow"
          >
            <a
              href="https://github.com/Pandey-Mansi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-primary/50 hover:bg-primary/10"
          >
            <a
              href="https://www.linkedin.com/in/pandeymansi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-primary/50 hover:bg-primary/10"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <a
          href="#story"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
