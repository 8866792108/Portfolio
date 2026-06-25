'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sanjaychilgani119@gmail.com',
    href: 'mailto:sanjaychilgani119@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Surat, Gujarat, India',
    href: null,
  },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/sanjaykz237', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjay-madta-2187082b6', label: 'LinkedIn' },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
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
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all peer"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 px-1 text-sm text-zinc-500 bg-[#0a0a0a] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    Name
                  </label>
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all peer"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 px-1 text-sm text-zinc-500 bg-[#0a0a0a] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    Email
                  </label>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none peer"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 px-1 text-sm text-zinc-500 bg-[#0a0a0a] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                  >
                    Message
                  </label>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="block glass rounded-2xl p-6 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <span className="text-sm text-zinc-500">{info.label}</span>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <span className="text-sm text-zinc-500">{info.label}</span>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm text-zinc-500 mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
                {/* Hugging Face */}
                <a
                  href="https://huggingface.co/sanjaykz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
                  aria-label="Hugging Face"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zM8.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7 14s1.5 3 5 3 5-3 5-3H7z" />
                  </svg>
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
