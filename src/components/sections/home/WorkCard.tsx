import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Project } from '@/types/project'
import WorkCardHover from './WorkCardHover'

interface WorkCardProps {
  project: Project
  colSpan?: string
}

export default function WorkCard({ project, colSpan = 'md:col-span-6' }: WorkCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`${colSpan} col-span-1`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link to={`/work/${project.slug}`}>
        <div
          className="relative group bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: project.color + '20' }}
          />

          {/* Color accent */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ background: `radial-gradient(circle at 30% 30%, ${project.color}, transparent 70%)` }}
          />

          {/* Halftone */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '4px 4px',
              mixBlendMode: 'multiply',
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <span className="text-xs text-muted uppercase tracking-[0.2em] bg-surface/50 backdrop-blur-sm px-2 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display italic text-text-primary mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-muted line-clamp-2">{project.description}</p>
            </div>
          </div>

          {/* Hover overlay */}
          <WorkCardHover project={project} visible={hovered} />
        </div>
      </Link>
    </motion.div>
  )
}
