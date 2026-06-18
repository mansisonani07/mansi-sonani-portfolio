import { Project } from '@/types/project'
import SectionLabel from '@/components/ui/SectionLabel'

interface ProjectGalleryProps {
  project: Project
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Gallery" />
      <div className="aspect-video rounded-3xl bg-surface border border-stroke overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)` }}>
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <p className="text-sm text-muted font-display italic">{project.name}</p>
        </div>
      </div>
    </section>
  )
}
