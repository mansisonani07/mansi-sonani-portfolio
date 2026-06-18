import { motion } from 'framer-motion'
import { Project } from '@/types/project'
import Badge from '@/components/ui/Badge'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="green">{project.category}</Badge>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-4 leading-[0.95]">
          {project.name}
        </h1>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-8">
          {project.longDescription}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stroke text-sm text-muted hover:text-text-primary transition-all duration-300">
              GitHub ↗
            </a>
          )}
          {project.links.demo && project.links.demo !== '#' && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg text-sm hover:scale-105 transition-all duration-300">
              Live Demo ↗
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
