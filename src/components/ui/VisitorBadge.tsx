import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisitorContext } from '@/context/VisitorContext'

export default function VisitorBadge() {
  const { visitorCount, sessionCount } = useVisitorContext()
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="group flex items-center gap-2 px-3 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-stroke hover:border-accent-green/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
            </span>
            <span className="text-xs text-muted font-body">
              Visit #{visitorCount}
            </span>
          </motion.button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-full mb-2 left-0 p-3 rounded-2xl bg-surface/95 backdrop-blur-md border border-stroke min-w-[160px]"
              >
                <p className="text-xs text-muted mb-1">Your visit stats</p>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="text-xs text-text-primary">Total Visits</span>
                    <span className="text-xs font-medium text-accent-green">{visitorCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-text-primary">Sessions</span>
                    <span className="text-xs font-medium text-accent-green">{sessionCount}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
