import { Project } from '@/types/project'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

interface ProjectOverviewProps {
  project: Project
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Overview" />
      <div className="space-y-4">
        {project.details.map((detail, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-surface/50 border border-stroke"
          >
            <span className="text-accent-green mt-0.5 text-sm">→</span>
            <p className="text-sm text-muted">{detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
