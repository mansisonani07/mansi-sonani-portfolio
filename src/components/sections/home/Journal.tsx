import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalData } from '@/data/journalData'
import JournalEntry from './JournalEntry'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <SectionLabel text="Journal" />
            <h2 className="text-3xl md:text-5xl font-display italic text-text-primary">
              Recent <em>thoughts</em>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-md">
              Writing about AI automation, multi-agent systems, and the future of development.
            </p>
          </div>
          <Link
            to="/journal"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stroke text-sm text-muted hover:text-text-primary transition-all duration-300"
          >
            View all ↗
          </Link>
        </motion.div>
        <div className="flex flex-col gap-3">
          {journalData.map((entry, i) => (
            <JournalEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
