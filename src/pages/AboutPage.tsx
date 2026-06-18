import PageTransition from '@/components/layout/PageTransition'
import AboutHero from '@/components/sections/about/AboutHero'
import AboutBio from '@/components/sections/about/AboutBio'
import AboutSkillBars from '@/components/sections/about/AboutSkillBars'
import AboutTools from '@/components/sections/about/AboutTools'

export default function AboutPage() {
  return (
    <PageTransition>
      <main>
        <AboutHero />
        <AboutBio />
        <AboutSkillBars />
        <AboutTools />
      </main>
    </PageTransition>
  )
}
