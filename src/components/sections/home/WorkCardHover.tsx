import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types/project'

interface WorkCardHoverProps {
  project: Project
  visible: boolean
}

export default function WorkCardHover({ project, visible }: WorkCardHoverProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-bg/70 backdrop-blur-lg flex items-center justify-center"
        >
          <div className="relative px-6 py-3 rounded-full bg-text-primary text-bg text-sm font-medium">
            View — <span className="font-display italic">{project.name}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
