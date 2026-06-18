import { useParams, Navigate } from 'react-router-dom'
import PageTransition from '@/components/layout/PageTransition'
import { projectsData } from '@/data/projectsData'
import ProjectHero from '@/components/sections/project/ProjectHero'
import ProjectMetrics from '@/components/sections/project/ProjectMetrics'
import ProjectGallery from '@/components/sections/project/ProjectGallery'
import ProjectOverview from '@/components/sections/project/ProjectOverview'
import ProjectTechStack from '@/components/sections/project/ProjectTechStack'
import ProjectTimeline from '@/components/sections/project/ProjectTimeline'
import ProjectNav from '@/components/sections/project/ProjectNav'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectsData.find(p => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  return (
    <PageTransition>
      <main>
        <ProjectHero project={project} />
        <ProjectMetrics project={project} />
        <ProjectGallery project={project} />
        <ProjectOverview project={project} />
        <ProjectTechStack project={project} />
        <ProjectTimeline project={project} />
        <ProjectNav currentProject={project} />
      </main>
    </PageTransition>
  )
}
