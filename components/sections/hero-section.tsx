'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TypewriterText } from './typewriter-text'
import { MagneticButton } from './magnetic-button'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/8866792108', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjay-madta-2187082b6', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sanjaychilgani119@gmail.com', label: 'Email' },
]

const roles = [
  'Building AI-powered experiences',
  'Full Stack AI Engineer',
  'Creating futuristic digital products',
  'LangChain + FastAPI + React Expert',
]

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spotlight gradient following content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-white">Sanjay</span>
          <span className="block gradient-text text-glow">Madta</span>
        </motion.h1>

        {/* Role title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="text-xl md:text-2xl font-medium text-zinc-300">
            AI/ML Engineer & Full Stack Developer
          </span>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-8 md:h-10 mb-10"
        >
          <TypewriterText texts={roles} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 glass font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </MagneticButton>

        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link) => (
            <MagneticButton key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/10 transition-all"
                aria-label={link.label}
              >
                <link.icon
                  size={20}
                  className="text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all"
                />
              </a>
            </MagneticButton>
          ))}
          
          {/* Hugging Face */}
          <MagneticButton>
            <a
              href="https://huggingface.co/sanjaykz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/10 transition-all"
              aria-label="Hugging Face"
            >
              <svg
                className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zM8.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7 14s1.5 3 5 3 5-3 5-3H7z" />
              </svg>
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — fades out as soon as user starts scrolling */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.04], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <span className="text-xs text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">Scroll</span>
          <ArrowDown size={16} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
        </motion.button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden lg:block" />
    </section>
  )
}
