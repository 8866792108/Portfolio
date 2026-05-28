'use client'

import { useEffect, useRef, createContext, useContext, useState } from 'react'
import Lenis from 'lenis'

interface SmoothScrollContextType {
  lenis: Lenis | null
  scrollProgress: number
  stop: () => void
  start: () => void
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ 
  lenis: null, 
  scrollProgress: 0,
  stop: () => {},
  start: () => {},
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ({ progress }: { progress: number }) => {
      setScrollProgress(progress)
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          const targetEl = document.querySelector(href)
          if (targetEl) {
            lenis.scrollTo(targetEl as HTMLElement, { offset: -100 })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  const stop = () => {
    lenisRef.current?.stop()
  }

  const start = () => {
    lenisRef.current?.start()
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollProgress, stop, start }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
