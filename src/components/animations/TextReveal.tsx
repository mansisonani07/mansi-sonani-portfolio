import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export default function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  return (
    <span className={className} style={{ overflow: 'hidden', display: 'inline-block' }}>
      <motion.span
        display="inline-block"
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
        style={{ display: 'inline-block' }}
      >
        {text}
      </motion.span>
    </span>
  )
}
