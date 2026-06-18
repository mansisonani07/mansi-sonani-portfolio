import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '@/components/ui/Lightbox'

interface ExplorationCardProps {
  title: string
  image: string
  rotation: number
  index: number
}

export default function ExplorationCard({ title, image, rotation, index }: ExplorationCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <motion.div
        className="relative aspect-square max-w-[320px] mx-auto rounded-2xl overflow-hidden cursor-pointer border border-stroke group"
        style={{ rotate: rotation }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => setLightboxOpen(true)}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        custom={index}
      >
        <div className="w-full h-full bg-surface flex items-center justify-center">
          <div className="text-center p-6">
            <div className="text-4xl mb-3">
              {['🤖', '⚡', '🕸️', '📊', '⚛️', '🔗'][index % 6]}
            </div>
            <p className="text-sm font-display italic text-text-primary">{title}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-xs text-text-primary uppercase tracking-[0.2em]">View ↗</span>
        </div>
      </motion.div>
      {lightboxOpen && (
        <Lightbox src={image} alt={title} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}
