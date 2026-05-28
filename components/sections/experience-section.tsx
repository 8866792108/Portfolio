'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Full-Stack & AI/ML Engineer',
    company: 'Inaiverse Private Limited',
    location: 'Surat, Gujarat',
    period: '2025 – 2026',
    description: 'Developed and deployed AI-powered features for the EdinAI educational platform, serving personalized learning experiences to students.',
    highlights: [
      'Building full-stack applications using React.js and FastAPI',
      'Implementing NLP pipelines and ML models for content recommendation',
      'Automating data collection with Selenium and BeautifulSoup',
      'Reducing manual data entry by 80% through automation',
    ],
    tech: ['React.js', 'FastAPI', 'LangChain', 'Python', 'NLP'],
    current: false,
  },
  {
    title: 'Full-Stack Developer',
    company: 'Academic Projects',
    location: 'Surat, Gujarat',
    period: '2023 – 2025',
    description: 'Designed and developed responsive user interfaces and robust backend systems for various academic and personal projects.',
    highlights: [
      'Built responsive UIs with React.js and Tailwind CSS',
      'Developed RESTful APIs with Node.js and Express.js',
      'Managed databases using MongoDB and PostgreSQL',
      'Implemented secure data handling practices',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    current: false,
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">My </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A timeline of my professional growth and the impact I have made along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)]'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2">
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${exp.current ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div className="ml-20 md:ml-0">
                <div className="glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-400">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
