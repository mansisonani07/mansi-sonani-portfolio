import PageTransition from '@/components/layout/PageTransition'
import ResumeHero from '@/components/sections/resume/ResumeHero'
import ResumeTimeline from '@/components/sections/resume/ResumeTimeline'
import ResumeSkills from '@/components/sections/resume/ResumeSkills'
import ResumeCertifications from '@/components/sections/resume/ResumeCertifications'
import ResumeEducation from '@/components/sections/resume/ResumeEducation'
import ResumeDownload from '@/components/sections/resume/ResumeDownload'

export default function ResumePage() {
  return (
    <PageTransition>
      <main>
        <ResumeHero />
        <ResumeTimeline />
        <ResumeSkills />
        <ResumeCertifications />
        <ResumeEducation />
        <ResumeDownload />
      </main>
    </PageTransition>
  )
}
