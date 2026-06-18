import PageTransition from '@/components/layout/PageTransition'
import { journalData } from '@/data/journalData'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'

export default function JournalPage() {
  return (
    <PageTransition>
      <main>
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
          <SectionLabel text="Journal" />
          <h1 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">All <em>Articles</em></h1>
        </section>
        <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journalData.map((entry, i) => (
              <motion.div key={entry.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/journal/${entry.slug}`}>
                  <div className="group p-6 rounded-3xl bg-surface/50 border border-stroke hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {entry.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </div>
                    <h2 className="text-lg font-display italic text-text-primary mb-2 group-hover:text-gradient transition-all">{entry.title}</h2>
                    <p className="text-sm text-muted mb-4">{entry.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span>{entry.readTime}</span>
                      <span>·</span>
                      <span>{entry.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
