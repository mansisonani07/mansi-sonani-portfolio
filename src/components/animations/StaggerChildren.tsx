import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  stagger?: number
  className?: string
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function StaggerChildren({ children, className }: StaggerChildrenProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { item as staggerItem }
