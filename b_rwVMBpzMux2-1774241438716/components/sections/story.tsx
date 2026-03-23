"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Cpu, Brain, Rocket, Target } from "lucide-react"

const storySteps = [
  {
    icon: Code,
    title: "Beginning",
    description: "Started learning programming and problem solving using C and Python.",
    color: "oklch(0.75 0.18 180)",
  },
  {
    icon: Cpu,
    title: "Exploration",
    description: "Explored data structures, algorithms, and core software development concepts.",
    color: "oklch(0.7 0.15 200)",
  },
  {
    icon: Brain,
    title: "Discovery",
    description: "Discovered machine learning, deep learning, and data analysis.",
    color: "oklch(0.65 0.12 220)",
  },
  {
    icon: Rocket,
    title: "Building",
    description: "Built projects combining AI models, real-time systems, and web applications.",
    color: "oklch(0.8 0.16 160)",
  },
  {
    icon: Target,
    title: "Future",
    description: "Aiming to build scalable AI systems and contribute to impactful real-world solutions.",
    color: "oklch(0.72 0.14 190)",
  },
]

export function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    )

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="story" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse at center, ${storySteps[activeIndex].color}10 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            My Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A narrative through my career, where each milestone represents growth and discovery.
          </p>
        </div>

        <div ref={sectionRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

          {/* Progress indicator */}
          <div
            className="absolute left-1/2 top-0 w-px bg-primary hidden md:block transition-all duration-500"
            style={{
              height: `${((activeIndex + 1) / storySteps.length) * 100}%`,
              boxShadow: `0 0 20px ${storySteps[activeIndex].color}`,
            }}
          />

          <div className="space-y-24">
            {storySteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index <= activeIndex

              return (
                <div
                  key={step.title}
                  ref={(el) => { stepsRef.current[index] = el }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col transition-all duration-700`}
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    transform: isActive ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`}>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        color: isActive ? step.color : "inherit",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>

                  {/* Icon node */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500"
                    style={{
                      borderColor: isActive ? step.color : "var(--border)",
                      backgroundColor: isActive ? `${step.color}20` : "var(--card)",
                      boxShadow: isActive ? `0 0 30px ${step.color}40` : "none",
                    }}
                  >
                    <Icon
                      className="w-7 h-7 transition-colors duration-500"
                      style={{ color: isActive ? step.color : "var(--muted-foreground)" }}
                    />
                  </div>

                  {/* Placeholder for symmetry */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
