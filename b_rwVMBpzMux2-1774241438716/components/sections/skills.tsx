"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Layers, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C", "C++", "Python", "Java"],
    color: "oklch(0.75 0.18 180)",
  },
  {
    icon: Layers,
    title: "Libraries & Frameworks",
    skills: ["React", "Tailwind CSS", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    color: "oklch(0.7 0.15 200)",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["GitHub", "VS Code", "Jupyter Notebook"],
    color: "oklch(0.65 0.12 220)",
  },
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-chart-2/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon

            return (
              <div
                key={category.title}
                className="relative group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${categoryIndex * 150}ms`,
                }}
              >
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm h-full transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: category.color }} />
                  </div>

                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 cursor-default"
                        style={{
                          backgroundColor:
                            hoveredSkill === skill
                              ? `${category.color}20`
                              : "var(--secondary)",
                          borderColor:
                            hoveredSkill === skill
                              ? category.color
                              : "transparent",
                          color:
                            hoveredSkill === skill
                              ? category.color
                              : "var(--secondary-foreground)",
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "scale(1)" : "scale(0.8)",
                          transition: `all 0.3s ease-out ${
                            categoryIndex * 150 + skillIndex * 50
                          }ms`,
                          boxShadow:
                            hoveredSkill === skill
                              ? `0 0 20px ${category.color}30`
                              : "none",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}20 0%, transparent 50%)`,
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
