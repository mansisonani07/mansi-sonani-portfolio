import { useParams, Navigate, Link } from 'react-router-dom'
import PageTransition from '@/components/layout/PageTransition'
import { journalData } from '@/data/journalData'
import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'

export default function JournalDetailPage() {
  const { slug } = useParams()
  const entry = journalData.find(e => e.slug === slug)
  if (!entry) return <Navigate to="/journal" replace />

  return (
    <PageTransition>
      <main>
        <section className="pt-32 pb-16 md:pt-40 px-6 md:px-10 lg:px-16 max-w-[800px] mx-auto">
          <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-muted hover:text-text-primary transition-colors mb-8">
            ← Back to Journal
          </Link>
          <SectionLabel text="Article" />
          <div className="flex flex-wrap gap-2 mb-4">
            {entry.tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>
          <h1 className="text-4xl md:text-6xl font-display italic text-text-primary mb-4 leading-[0.95]">{entry.title}</h1>
          <div className="flex items-center gap-3 text-xs text-muted mb-8">
            <span>{entry.readTime}</span><span>·</span><span>{entry.date}</span>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-base text-muted leading-relaxed">{entry.excerpt}</p>
            <br />
            <p className="text-base text-muted leading-relaxed">
              This article dives deep into the technical implementation, challenges faced, and lessons learned while building production AI systems. Full content coming soon.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
