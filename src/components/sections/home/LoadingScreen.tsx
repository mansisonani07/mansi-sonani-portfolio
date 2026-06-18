import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['Automate', 'Innovate', 'Accelerate']

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const duration = 2700
    const start = performance.now()
    const frame = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 2)
      setCount(Math.floor(eased * 100))
      if (progress < 1) requestAnimationFrame(frame)
      else setTimeout(onComplete, 400)
    }
    requestAnimationFrame(frame)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => i + 1)
    }, 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top-left label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Center word */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex % words.length]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom right counter */}
      <div className="absolute bottom-12 right-8">
        <p className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, '0')}
        </p>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <motion.div
          className="h-full accent-gradient"
          style={{
            scaleX: count / 100,
            transformOrigin: 'left',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
        />
      </div>
    </motion.div>
  )
}
