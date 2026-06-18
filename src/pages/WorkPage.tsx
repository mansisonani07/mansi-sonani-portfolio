import { useState } from 'react'
import PageTransition from '@/components/layout/PageTransition'
import WorkHero from '@/components/sections/work/WorkHero'
import WorkFilters from '@/components/sections/work/WorkFilters'
import WorkGrid from '@/components/sections/work/WorkGrid'
import WorkMetrics from '@/components/sections/work/WorkMetrics'
import { projectsData } from '@/data/projectsData'

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projectsData : projectsData.filter(p => p.category === activeFilter)

  return (
    <PageTransition>
      <main>
        <WorkHero />
        <WorkMetrics />
        <WorkFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <WorkGrid projects={filtered} />
      </main>
    </PageTransition>
  )
}
