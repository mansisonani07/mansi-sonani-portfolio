import { Project } from '@/types/project'
import SectionLabel from '@/components/ui/SectionLabel'

interface ProjectTimelineProps {
  project: Project
}

export default function ProjectTimeline({ project }: ProjectTimelineProps) {
  const phases = ['Research & Planning', 'Architecture Design', 'Development', 'Testing & Deployment']
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Timeline" />
      <div className="flex flex-col md:flex-row gap-4">
        {phases.map((phase, i) => (
          <div key={phase} className="flex-1 p-4 rounded-2xl bg-surface/50 border border-stroke">
            <div className="w-6 h-6 rounded-full accent-gradient flex items-center justify-center text-[10px] text-white mb-2">
              {i + 1}
            </div>
            <p className="text-xs text-text-primary font-medium">{phase}</p>
            <p className="text-xs text-muted mt-1">{project.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
