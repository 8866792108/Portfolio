'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const duration = 2500
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps

    let currentProgress = 0
    const timer = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        setProgress(100)
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
          setTimeout(onComplete, 800)
        }, 300)
      } else {
        setProgress(Math.min(currentProgress, 100))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 grid-background opacity-30" />

          {/* Gradient orbs */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
              top: '60%',
              left: '60%',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Logo mark */}
            <motion.div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(59, 130, 246, 0.4)',
                    '0 0 60px rgba(59, 130, 246, 0.6)',
                    '0 0 30px rgba(59, 130, 246, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-3xl font-bold text-white">SM</span>
              </motion.div>
              
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-cyan-400"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  className="absolute w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    transform: 'translate(-50%, -50%) translateX(50px)',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div className="text-center">
              <motion.h1
                className="text-2xl font-semibold tracking-tight text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Sanjay Madta
              </motion.h1>
              <motion.p
                className="text-sm text-zinc-500 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                AI/ML Engineer
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 h-0.5 bg-zinc-800 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Progress text */}
            <motion.span
              className="text-xs text-zinc-600 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
