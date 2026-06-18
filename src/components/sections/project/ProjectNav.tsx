import { Link } from 'react-router-dom'
import { projectsData } from '@/data/projectsData'
import { Project } from '@/types/project'

interface ProjectNavProps {
  currentProject: Project
}

export default function ProjectNav({ currentProject }: ProjectNavProps) {
  const currentIndex = projectsData.findIndex(p => p.id === currentProject.id)
  const prev = projectsData[currentIndex - 1]
  const next = projectsData[currentIndex + 1]

  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-16 pt-8 border-t border-stroke flex justify-between">
      {prev ? (
        <Link to={`/work/${prev.slug}`} className="group flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-display italic">{prev.name}</span>
        </Link>
      ) : <div />}
      {next ? (
        <Link to={`/work/${next.slug}`} className="group flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors">
          <span className="font-display italic">{next.name}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      ) : <div />}
    </section>
  )
}
