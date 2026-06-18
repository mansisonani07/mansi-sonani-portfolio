import { Project } from '@/types/project'
import Tag from '@/components/ui/Tag'
import SectionLabel from '@/components/ui/SectionLabel'

interface ProjectTechStackProps {
  project: Project
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Tech Stack" />
      <div className="flex flex-wrap gap-2">
        {project.techStack.map(tech => <Tag key={tech} label={tech} />)}
      </div>
    </section>
  )
}
