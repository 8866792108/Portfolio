'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Brain, Zap, Globe } from 'lucide-react'

const stats = [
  { label: 'Months Experience', value: '6', icon: Code2 },
  { label: 'Projects Completed', value: '10+', icon: Zap },
  { label: 'ML Datasets Deployed', value: '5+', icon: Brain },
  { label: 'Technologies', value: '15+', icon: Globe },
]

const highlights = [
  'Built AI-powered educational platforms at Inaiverse',
  'Specializing in LangChain, LangGraph, and NLP pipelines',
  'Full Stack development with React, FastAPI, and Node.js',
  'Passionate about creating scalable intelligent systems',
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Crafting the </span>
            <span className="gradient-text">Future</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Results-driven Full-Stack Developer and AI/ML Engineer with hands-on experience
            in building scalable web applications and integrating machine learning solutions.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                    <p className="text-zinc-300 leading-relaxed">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-zinc-500 text-sm">
                  Previously at <span className="text-blue-400">Inaiverse Private Limited</span>,{' '}
                  building the future of AI-powered education.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400">
              <span className="text-white text-2xl font-serif">&ldquo;</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-zinc-300 italic leading-relaxed max-w-3xl mx-auto">
              I believe in building technology that enhances human potential. 
              Every line of code should serve a purpose, every AI model should solve a real problem.
            </blockquote>
            <cite className="block mt-6 text-zinc-500 not-italic">
              &mdash; Sanjay Madta
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
