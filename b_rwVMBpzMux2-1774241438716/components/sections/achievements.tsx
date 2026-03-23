"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Code, Trophy, Users } from "lucide-react"

const achievements = [
  {
    icon: Star,
    title: "4★ in C & Python",
    description: "HackerRank certified proficiency",
    color: "oklch(0.8 0.16 80)",
  },
  {
    icon: Code,
    title: "200+ Problems Solved",
    description: "Competitive programming achievements",
    color: "oklch(0.75 0.18 180)",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    description: "Active in coding competitions",
    color: "oklch(0.7 0.15 200)",
  },
  {
    icon: Users,
    title: "Top 5 in AI Training",
    description: "Excellence in AI program",
    color: "oklch(0.65 0.12 220)",
  },
]

export function AchievementsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemsRef.current.findIndex((ref) => ref === entry.target)
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    itemsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and milestones in my coding journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={achievement.title}
                ref={(el) => { itemsRef.current[index] = el }}
                className="group relative text-center"
              >
                <div
                  className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700 hover:border-primary/50"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Badge icon */}
                  <div
                    className="relative w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${achievement.color}15`,
                      boxShadow: isVisible ? `0 0 30px ${achievement.color}30` : "none",
                    }}
                  >
                    <Icon
                      className="w-9 h-9 transition-colors duration-300"
                      style={{ color: achievement.color }}
                    />
                    {/* Rotating ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed opacity-30 group-hover:animate-spin"
                      style={{
                        borderColor: achievement.color,
                        animationDuration: "8s",
                      }}
                    />
                  </div>

                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
