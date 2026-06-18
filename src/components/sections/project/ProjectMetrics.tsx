import { Project } from '@/types/project'
import { motion } from 'framer-motion'

interface ProjectMetricsProps {
  project: Project
}

export default function ProjectMetrics({ project }: ProjectMetricsProps) {
  if (!project.metrics.length) return null
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {project.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-surface border border-stroke text-center"
          >
            <p className="text-lg font-display italic text-text-primary mb-1">{metric.value}</p>
            <p className="text-xs text-muted">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
