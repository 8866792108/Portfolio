'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const technologies = [
  { name: 'HTML', category: 'Frontend', color: '#e34c26' },
  { name: 'CSS', category: 'Frontend', color: '#264de4' },
  { name: 'JavaScript', category: 'Language', color: '#f7df1e' },
  { name: 'Next.js', category: 'Frontend', color: '#fff' },
  { name: 'React', category: 'Frontend', color: '#61dafb' },
  { name: 'Python', category: 'Language', color: '#3776ab' },
  { name: 'FastAPI', category: 'Backend', color: '#009688' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'LangChain', category: 'AI/ML', color: '#1c3c3c' },
  { name: 'LangGraph', category: 'AI/ML', color: '#f59e0b' },
  { name: 'MCP', category: 'AI/ML', color: '#8b5cf6' },
  { name: 'Hugging Face', category: 'AI/ML', color: '#ffcc00' },
  { name: 'MongoDB', category: 'Database', color: '#47a248' },
  { name: 'PostgreSQL', category: 'Database', color: '#4169e1' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#06b6d4' },
]

const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Database', 'Language']

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTech = activeCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section
      ref={ref}
      id="tech"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Tools I </span>
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A carefully curated arsenal of modern technologies for building 
            scalable AI-powered applications.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'glass text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/5">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20" />
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />

                <div className="relative z-10">
                  {/* Tech icon placeholder - you can replace with actual icons */}
                  <div 
                    className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center text-xl font-bold"
                    style={{ 
                      backgroundColor: `${tech.color}15`,
                      color: tech.color 
                    }}
                  >
                    {tech.name.slice(0, 2)}
                  </div>
                  
                  <h3 className="text-white font-medium mb-1">{tech.name}</h3>
                  <span className="text-xs text-zinc-500">{tech.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 overflow-hidden"
        >
          <div className="relative flex items-center">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
            
            <div className="flex animate-marquee">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-2 px-6 py-3 mx-4 glass rounded-full whitespace-nowrap"
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="text-zinc-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
