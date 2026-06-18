import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

interface StatCardProps {
  value: number
  suffix: string
  label: string
  description: string
  icon: string
  index: number
}

export default function StatCard({ value, suffix, label, description, icon, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-8 rounded-3xl bg-surface/50 border border-stroke hover:border-stroke/80 transition-all duration-300 group"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-display italic text-text-primary mb-2">
        <AnimatedCounter end={value} suffix={suffix} />
      </div>
      <p className="text-sm font-medium text-text-primary mb-1">{label}</p>
      <p className="text-xs text-muted">{description}</p>
    </motion.div>
  )
}
