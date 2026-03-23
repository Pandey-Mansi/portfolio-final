"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic foundation in Computer Science and AI/ML.
          </p>
        </div>

        <div
          className="relative p-8 md:p-12 rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 to-chart-2/5 backdrop-blur-sm overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "oklch(0.75 0.18 180)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-15"
            style={{ background: "oklch(0.7 0.15 200)" }}
          />

          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 box-glow"
                style={{ backgroundColor: "oklch(0.75 0.18 180 / 0.2)" }}
              >
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              <div className="flex-1">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2 text-glow"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Lovely Professional University
                </h3>

                <p className="text-xl text-primary mb-4">
                  B.Tech Computer Science (AI & ML)
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2023 – Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Punjab, India</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-sm text-muted-foreground">CGPA</span>
                  <span className="text-lg font-bold text-primary">7.6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
