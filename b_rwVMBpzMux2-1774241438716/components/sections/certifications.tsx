"use client"

import { useEffect, useRef, useState } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Generative AI & ChatGPT",
    issuer: "GeeksforGeeks",
    year: "2024",
    color: "oklch(0.75 0.18 180)",
  },
  {
    title: "Soft Skills Training",
    issuer: "GeeksforGeeks",
    year: "2024",
    color: "oklch(0.7 0.15 200)",
  },
  {
    title: "Computer Networking",
    issuer: "Coursera",
    year: "2024",
    color: "oklch(0.65 0.12 220)",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Infosys",
    year: "2024",
    color: "oklch(0.8 0.16 160)",
  },
]

export function CertificationsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.findIndex((ref) => ref === entry.target)
          if (entry.isIntersecting && index !== -1) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }, index * 100)
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chart-3/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and continuous learning achievements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={cert.title}
                ref={(el) => { cardsRef.current[index] = el }}
                className="group relative"
              >
                <div
                  className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0) rotateX(0)"
                      : "translateY(30px) rotateX(10deg)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${cert.color}15` }}
                  >
                    <Award className="w-6 h-6" style={{ color: cert.color }} />
                  </div>

                  <h3
                    className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="text-primary">{cert.year}</span>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Glow */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${cert.color}20 0%, transparent 70%)`,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
