'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function TypewriterText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterTextProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    if (!isDeleting) {
      if (displayText !== currentText) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseTime)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText !== '') {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <div className="inline-flex items-center text-lg md:text-xl text-zinc-400 font-mono">
      <span className="text-blue-400 mr-2">{'>'}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="min-w-0"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-0.5 w-0.5 h-5 md:h-6 bg-blue-400"
      />
    </div>
  )
}
