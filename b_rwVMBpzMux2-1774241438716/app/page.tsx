"use client"

import { HeroSection } from "@/components/sections/hero"
import { StorySection } from "@/components/sections/story"
import { ProjectsSection } from "@/components/sections/projects"
import { ArchitectureSection } from "@/components/sections/architecture"
import { ExperimentLabSection } from "@/components/sections/experiment-lab"
import { SkillsSection } from "@/components/sections/skills"
import { EducationSection } from "@/components/sections/education"
import { CertificationsSection } from "@/components/sections/certifications"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <StorySection />
      <ProjectsSection />
      <ArchitectureSection />
      <ExperimentLabSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  )
}
