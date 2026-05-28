'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Side scroll indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
        <motion.div 
          className="w-[2px] h-32 bg-zinc-800 rounded-full overflow-hidden"
        >
          <motion.div
            className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 origin-top"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />
        </motion.div>
        <motion.span 
          className="text-xs text-zinc-500 font-mono"
          style={{ 
            opacity: scrollYProgress 
          }}
        >
          <ScrollPercentage />
        </motion.span>
      </div>
    </>
  )
}

function ScrollPercentage() {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.span>
      {scrollYProgress.get() > 0 ? `${Math.round(scrollYProgress.get() * 100)}%` : '0%'}
    </motion.span>
  )
}
