import { featuredProjects } from '@/data/projectsData'
import WorkCard from './WorkCard'

const colSpans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7']

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
      {featuredProjects.slice(0, 4).map((project, i) => (
        <WorkCard key={project.id} project={project} colSpan={colSpans[i % colSpans.length]} />
      ))}
    </div>
  )
}
