import { AnimatePresence, motion } from 'framer-motion'

interface MorphingTextProps {
  words: string[]
  currentIndex: number
  className?: string
}

export default function MorphingText({ words, currentIndex, className }: MorphingTextProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={className}
      >
        {words[currentIndex % words.length]}
      </motion.span>
    </AnimatePresence>
  )
}
