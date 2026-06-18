import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Project } from '@/types/project'
import Tag from '@/components/ui/Tag'
import Badge from '@/components/ui/Badge'

interface WorkProjectCardProps {
  project: Project
  index: number
}

export default function WorkProjectCard({ project, index }: WorkProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/work/${project.slug}`}>
        <div className="group p-6 rounded-3xl bg-surface/50 border border-stroke hover:border-stroke/80 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl"
              style={{ backgroundColor: project.color + '20' }}>
              🤖
            </div>
            <div className="flex items-center gap-2">
              {project.featured && <Badge variant="green">Featured</Badge>}
              <span className="text-xs text-muted">{project.year}</span>
            </div>
          </div>
          <h3 className="text-lg font-display italic text-text-primary mb-1 group-hover:text-gradient transition-all">
            {project.name}
          </h3>
          <p className="text-xs text-muted mb-1">{project.type}</p>
          <p className="text-sm text-muted mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map(tech => <Tag key={tech} label={tech} />)}
            {project.techStack.length > 3 && (
              <span className="text-xs text-muted">+{project.techStack.length - 3}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted group-hover:text-text-primary transition-colors">
            <span>View Project</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
