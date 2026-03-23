"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Server, Brain, Database, ArrowRight } from "lucide-react"

const architectures = [
  {
    title: "Emotion Detection Pipeline",
    nodes: [
      { icon: Monitor, label: "Camera Input" },
      { icon: Brain, label: "Emotion Detection" },
      { icon: Server, label: "Recommendation Engine" },
      { icon: Monitor, label: "Frontend Display" },
    ],
  },
  {
    title: "NLP Processing Pipeline",
    nodes: [
      { icon: Database, label: "Text Data" },
      { icon: Server, label: "NLP Preprocessing" },
      { icon: Brain, label: "Model Prediction" },
      { icon: Monitor, label: "Results" },
    ],
  },
]

export function ArchitectureSection() {
  const [activeArch, setActiveArch] = useState(0)
  const [visibleNodes, setVisibleNodes] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate nodes one by one
          architectures[activeArch].nodes.forEach((_, index) => {
            setTimeout(() => {
              setVisibleNodes((prev) => [...prev, index])
            }, index * 300)
          })
        } else {
          setVisibleNodes([])
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [activeArch])

  useEffect(() => {
    setVisibleNodes([])
    const timeout = setTimeout(() => {
      architectures[activeArch].nodes.forEach((_, index) => {
        setTimeout(() => {
          setVisibleNodes((prev) => [...prev, index])
        }, index * 300)
      })
    }, 100)
    return () => clearTimeout(timeout)
  }, [activeArch])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            System Architecture
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visual representation of how my AI systems are built and connected.
          </p>
        </div>

        {/* Architecture tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {architectures.map((arch, index) => (
            <button
              key={arch.title}
              onClick={() => setActiveArch(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeArch === index
                  ? "bg-primary text-primary-foreground box-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {arch.title}
            </button>
          ))}
        </div>

        {/* Architecture diagram */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {architectures[activeArch].nodes.map((node, index) => {
            const Icon = node.icon
            const isVisible = visibleNodes.includes(index)
            const isLast = index === architectures[activeArch].nodes.length - 1

            return (
              <div key={node.label} className="flex items-center gap-4 md:gap-8">
                <div
                  className="flex flex-col items-center gap-3 transition-all duration-500"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
                  }}
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                      isVisible
                        ? "border-primary bg-primary/10 box-glow"
                        : "border-border bg-card"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500 ${
                        isVisible ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-medium text-center transition-colors duration-500 ${
                      isVisible ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {node.label}
                  </span>
                </div>

                {!isLast && (
                  <div
                    className="transition-all duration-500"
                    style={{
                      opacity: visibleNodes.includes(index + 1) ? 1 : 0,
                      transform: visibleNodes.includes(index + 1)
                        ? "translateX(0)"
                        : "translateX(-10px)",
                    }}
                  >
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Connection lines animation */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                4+
              </div>
              <div className="text-sm text-muted-foreground">AI Models Built</div>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                82%
              </div>
              <div className="text-sm text-muted-foreground">Accuracy Achieved</div>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                5+
              </div>
              <div className="text-sm text-muted-foreground">Tech Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
