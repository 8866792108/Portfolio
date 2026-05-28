'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronRight, Sparkles, Monitor, RefreshCw } from 'lucide-react'
import { useSmoothScroll } from '@/components/providers/smooth-scroll-provider'

const projects = [
  {
    id: 1,
    title: 'EdinAI',
    subtitle: 'AI-Powered Educational Platform',
    description: 'A comprehensive AI-powered learning platform delivering personalized recommendations and adaptive content delivery to students.',
    longDescription: 'Architected and developed a comprehensive AI-powered learning platform using React.js frontend and FastAPI backend. Integrated machine learning models and NLP pipelines to deliver personalized learning recommendations and adaptive content delivery.',
    image: '/api/placeholder/800/600',
    tech: ['React.js', 'FastAPI', 'LangChain', 'NLP', 'Python', 'MongoDB'],
    features: [
      'Personalized learning recommendations',
      'Adaptive content delivery system',
      'NLP-powered content analysis',
      'Real-time progress tracking',
    ],
    status: 'Completed',
    category: 'AI/ML',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'VoltHub - EV Charging',
    subtitle: 'Full-Stack Web Application',
    description: 'A full-stack application for locating and booking EV charging stations with real-time availability tracking.',
    longDescription: 'Developed a full-stack web application for locating and booking EV charging stations with real-time availability tracking. Implemented secure RESTful APIs using Node.js and MongoDB for user authentication, booking management, and payment processing.',
    image: '/api/placeholder/800/600',
    tech: ['Node.js', 'MongoDB', 'React.js', 'Express.js', 'REST API'],
    features: [
      'Real-time station availability',
      'Secure booking system',
      'Payment processing integration',
      'User authentication',
    ],
    status: 'Live Project',
    category: 'Full Stack',
    link: 'https://volthub.netlify.app/',
    github: 'https://github.com/8866792108/EVcharger',
  },
  {
    id: 3,
    title: 'MDL Coaching Management',
    subtitle: 'MERN Stack Application',
    description: 'A complete MERN stack application to streamline coaching center operations including attendance and fee management.',
    longDescription: 'Built a complete MERN stack application to streamline coaching center operations including attendance tracking, fee management, and student performance analytics. Deployed the application with live demo capability, implementing responsive design for mobile and desktop access.',
    image: '/api/placeholder/800/600',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    features: [
      'Attendance tracking system',
      'Fee management dashboard',
      'Student performance analytics',
      'Responsive design',
    ],
    status: 'Live Project',
    category: 'Full Stack',
    link: 'https://mdl-coaching-management.onrender.com/',
    github: 'https://github.com/Dudam-Laxmikant/MDL_Coaching',
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [iframeKey, setIframeKey] = useState(0)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const { stop, start } = useSmoothScroll()

  // Stop/start Lenis when modal opens/closes
  useEffect(() => {
    if (selectedProject) {
      stop()
      document.body.style.overflow = 'hidden'
      setIframeLoaded(false)
      setIframeKey(k => k + 1)
    } else {
      start()
      document.body.style.overflow = ''
    }
    return () => {
      start()
      document.body.style.overflow = ''
    }
  }, [selectedProject, stop, start])

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in building 
            scalable applications and AI-powered solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative glass rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
              >
                {/* Image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-violet-500/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-500/30 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  </div>
                  
                  {/* Project icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Sparkles className="w-12 h-12 text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Live Project' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-zinc-500/20 text-zinc-400 border border-zinc-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-zinc-400 bg-zinc-800/50 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800/50 rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View more */}
                  <div className="flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>View Details</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            style={{ touchAction: 'none' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-zinc-900/95 border border-zinc-800 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden"
              style={{ maxHeight: 'calc(100vh - 2rem)' }}
            >
              {/* Close button - fixed position */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 transition-all hover:scale-110"
              >
                <X size={18} className="text-zinc-300" />
              </button>

              {/* Scrollable content container */}
              <div 
                className="overflow-y-auto overscroll-contain"
                style={{ maxHeight: 'calc(100vh - 2rem)' }}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {/* Header image */}
                <div className="relative h-56 md:h-72 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black overflow-hidden">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-[80px] animate-pulse" />
                    <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-cyan-500/20 blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1/4 left-1/2 w-56 h-56 rounded-full bg-violet-500/15 blur-[70px] animate-pulse" style={{ animationDelay: '2s' }} />
                  </div>
                  
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }} />
                  
                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-900/95 to-transparent" />
                  
                  {/* Project icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-xl" />
                      <div className="relative w-20 h-20 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center backdrop-blur-sm">
                        <Sparkles className="w-10 h-10 text-blue-400" />
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Title section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-zinc-400">{selectedProject.subtitle}</p>
                    </div>
                    <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full shrink-0 ${
                      selectedProject.status === 'Live Project'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        selectedProject.status === 'Live Project' ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-400'
                      }`} />
                      {selectedProject.status}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-zinc-300 leading-relaxed text-base">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, i) => (
                        <div 
                          key={i} 
                          className="flex items-center gap-3 p-3 bg-zinc-800/30 rounded-xl border border-zinc-800/50"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                            <ChevronRight size={16} className="text-blue-400" />
                          </div>
                          <span className="text-zinc-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm text-zinc-200 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                    {selectedProject.link && selectedProject.link !== '#' && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.github && selectedProject.github !== '#' && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-800 text-white font-medium rounded-xl border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all"
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
