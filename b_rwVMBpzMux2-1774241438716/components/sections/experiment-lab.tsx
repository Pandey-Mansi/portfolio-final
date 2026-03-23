"use client"

import { useEffect, useRef, useState } from "react"
import { FlaskConical, Eye, Brain, Activity, TrendingUp } from "lucide-react"

const experiments = [
  {
    icon: FlaskConical,
    title: "NLP Experiments",
    description: "Sentiment classification and text analysis using advanced NLP techniques.",
    metrics: { accuracy: 82, samples: "10K+" },
    color: "oklch(0.75 0.18 180)",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Emotion detection and facial recognition using OpenCV and deep learning.",
    metrics: { accuracy: 78, samples: "5K+" },
    color: "oklch(0.7 0.15 200)",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description: "CNN models for image classification with high accuracy results.",
    metrics: { accuracy: 85, samples: "60K" },
    color: "oklch(0.65 0.12 220)",
  },
  {
    icon: Activity,
    title: "System Monitoring",
    description: "Real-time data analysis and anomaly detection in system metrics.",
    metrics: { accuracy: 84, samples: "Real-time" },
    color: "oklch(0.8 0.16 160)",
  },
]

export function ExperimentLabSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.findIndex((ref) => ref === entry.target)
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => [...new Set([...prev, index])])
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Research & Development</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Experiment Lab
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI experiments and research work pushing the boundaries of machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={experiment.title}
                ref={(el) => { cardsRef.current[index] = el }}
                className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-primary/50"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${experiment.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: experiment.color }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {experiment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {experiment.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                          <span className="text-primary font-semibold">
                            {experiment.metrics.accuracy}%
                          </span>{" "}
                          <span className="text-muted-foreground">accuracy</span>
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {experiment.metrics.samples} samples
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${experiment.metrics.accuracy}%` : "0%",
                          backgroundColor: experiment.color,
                          boxShadow: `0 0 10px ${experiment.color}`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${experiment.color}10 0%, transparent 70%)`,
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
