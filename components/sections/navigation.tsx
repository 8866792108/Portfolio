'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
            isScrolled ? 'glass px-6 py-3' : ''
          }`}>
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-lg font-bold text-white">SM</span>
              </div>
              <span className="text-lg font-semibold text-white hidden sm:block">
                Sanjay Madta
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0a0a0a] border-l border-zinc-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-white bg-white/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-zinc-800">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-white text-black text-center font-medium rounded-xl hover:bg-zinc-200 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
