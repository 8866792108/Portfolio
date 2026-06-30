'use client'

import dynamic from 'next/dynamic'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { CustomCursor } from '@/components/effects/custom-cursor'
import { ScrollProgress } from '@/components/effects/scroll-progress'
import { Navigation } from '@/components/sections/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { TerminalSection } from '@/components/sections/terminal-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/sections/footer'

// Dynamically import 3D background to avoid SSR issues
const Background3D = dynamic(
  () => import('@/components/effects/background-3d').then((mod) => mod.Background3D),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SmoothScrollProvider>
        {/* Custom cursor */}
        <CustomCursor />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* 3D Background */}
        <Background3D />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <TerminalSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </SmoothScrollProvider>
    </div>
  )
}
