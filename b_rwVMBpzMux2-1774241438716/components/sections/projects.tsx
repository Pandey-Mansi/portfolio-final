"use client"

import { useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Emotion-Based Product Recommendation System",
    description:
      "Detects human emotions using computer vision and recommends products based on mood and user behavior. Achieved ~78% accuracy in emotion detection.",
    tech: ["Python", "OpenCV", "Machine Learning", "React", "Tailwind", "MySQL"],
    github: "https://colab.research.google.com/drive/15fY0uoUMYOPPuN8fov4WwooXTEgbmif8",
    gradient: "from-primary/20 to-chart-2/20",
  },
  {
    title: "Sentiment Analysis on Twitter Data",
    description:
      "Classifies tweets into positive, negative, or neutral sentiment using NLP preprocessing and machine learning models for real-time social media analysis.",
    tech: ["Python", "NLP", "Scikit-learn", "Pandas"],
    github: "https://colab.research.google.com/drive/1X_TpkGJwpThdHjSgqYP1y3N_66HT3ZWL",
    gradient: "from-chart-2/20 to-chart-3/20",
  },
  {
    title: "Real-Time System Monitoring Dashboard",
    description:
      "Tracks CPU, memory, and system activity in real-time. Generates alerts for abnormal behavior and improves system monitoring efficiency.",
    tech: ["Python", "psutil", "NumPy", "Pandas"],
    github: "https://github.com/Pandey-Mansi",
    gradient: "from-chart-3/20 to-chart-4/20",
  },
  {
    title: "Handwritten Digit Recognition using CNN",
    description:
      "Built deep learning model using Convolutional Neural Networks on MNIST dataset. Achieved high accuracy in digit classification.",
    tech: ["Python", "TensorFlow", "Keras"],
    github: "https://colab.research.google.com/drive/1ImGnVNfnhLZ-MCJ40YHmYIR951Zgw2b9",
    gradient: "from-chart-4/20 to-primary/20",
  },
]

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of AI and machine learning projects that solve real-world problems.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full p-8 rounded-2xl border border-border/50 bg-gradient-to-br ${project.gradient} backdrop-blur-sm transition-all duration-500 overflow-hidden`}
                style={{
                  transform:
                    hoveredIndex === index
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 25px 50px -12px oklch(0.75 0.18 180 / 0.25)"
                      : "none",
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(0.75 0.18 180 / 0.15) 0%, transparent 50%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="text-muted-foreground hover:text-primary"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: "oklch(0.75 0.18 180)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
