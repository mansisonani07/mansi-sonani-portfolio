import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BlurInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function BlurIn({ children, delay = 0, className }: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
