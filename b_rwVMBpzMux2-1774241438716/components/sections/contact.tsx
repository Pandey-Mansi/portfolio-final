"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Pandey-Mansi",
    color: "oklch(0.75 0.18 180)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pandeymansi/",
    color: "oklch(0.7 0.15 200)",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mp8646020@gmail.com",
    color: "oklch(0.65 0.12 220)",
  },
]

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="relative py-32">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-20"
          style={{ background: "oklch(0.75 0.18 180)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          className="text-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {"Let's Build Something"}
            <br />
            <span className="text-primary">Amazing Together</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
          </p>

          {/* Email CTA */}
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-6 text-lg box-glow mb-16"
          >
            <a href="mailto:mp8646020@gmail.com">
              <Send className="w-5 h-5 mr-2" />
              mp8646020@gmail.com
            </a>
          </Button>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: link.color }}
                  />
                  <span className="text-sm font-medium">{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${link.color}15 0%, transparent 70%)`,
                    }}
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-24 pt-8 border-t border-border/30 text-center transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "600ms",
          }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mansi Pandey. Built with passion and code.
          </p>
        </div>
      </div>
    </section>
  )
}
