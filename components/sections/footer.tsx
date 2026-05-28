'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/8866792108',
    label: 'GitHub',
    color: 'hover:text-white hover:border-white/30',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sanjay-madta-2187082b6',
    label: 'LinkedIn',
    color: 'hover:text-blue-400 hover:border-blue-400/30',
  },
  {
    icon: Mail,
    href: 'mailto:sanjaychilgani119@gmail.com',
    label: 'Email',
    color: 'hover:text-cyan-400 hover:border-cyan-400/30',
  },
]

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden border-t border-zinc-800/60">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] rounded-full bg-cyan-500/4 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Main top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <a href="#hero" className="flex items-center gap-3 group w-fit">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                <span className="text-lg font-bold text-white">SM</span>
              </div>
              <span className="text-xl font-semibold text-white">Sanjay Madta</span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Full-stack developer crafting clean, performant, and delightful digital experiences.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className={`w-10 h-10 rounded-xl border border-zinc-700/60 bg-zinc-900/60 flex items-center justify-center text-zinc-500 transition-all duration-200 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact / CTA column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Get In Touch
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Open to new opportunities, collaborations, and interesting projects.
            </p>
            <a
              href="mailto:sanjaychilgani119@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors w-fit"
            >
              <Mail size={14} className="text-blue-400" />
              sanjaychilgani119@gmail.com
            </a>
            <a
              href="#contact"
              className="mt-2 w-fit px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Say Hello →
            </a>
          </motion.div>
        </div>

        {/* Divider with glow */}
        <div className="relative h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-zinc-600"
          >
            &copy; {new Date().getFullYear()} Sanjay Madta. All rights reserved.
          </motion.p>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="group flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg border border-zinc-700/60 bg-zinc-900/60 flex items-center justify-center group-hover:border-zinc-500 group-hover:bg-white/5 transition-all">
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.button>
        </div>

      </div>
    </footer>
  )
}
