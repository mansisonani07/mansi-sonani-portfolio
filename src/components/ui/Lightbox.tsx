import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-bg/90 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="max-w-full max-h-[90vh] rounded-2xl object-contain"
          onClick={e => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface border border-stroke flex items-center justify-center text-muted hover:text-text-primary transition-colors"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
