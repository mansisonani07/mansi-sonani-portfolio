import { Project } from '@/types/project'
import WorkProjectCard from './WorkProjectCard'

interface WorkGridProps {
  projects: Project[]
}

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto pb-16">
      {projects.map((project, i) => (
        <WorkProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  )
}
