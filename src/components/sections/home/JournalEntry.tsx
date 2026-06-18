import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { JournalEntry as JournalEntryType } from '@/types/journal'
import Tag from '@/components/ui/Tag'

interface JournalEntryProps {
  entry: JournalEntryType
  index: number
}

export default function JournalEntry({ entry, index }: JournalEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/journal/${entry.slug}`}>
        <div className="flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke hover:border-stroke/80 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-full bg-stroke/50 flex-shrink-0 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-accent-green/20 to-accent-indigo/20 flex items-center justify-center text-lg">
              📝
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-text-primary group-hover:text-gradient transition-all duration-300 truncate">
              {entry.title}
            </h3>
            <p className="text-xs text-muted mt-0.5 truncate">{entry.excerpt}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {entry.tags.slice(0, 1).map(tag => <Tag key={tag} label={tag} />)}
            <span className="text-xs text-muted hidden sm:block">{entry.readTime}</span>
            <span className="text-xs text-muted hidden md:block">{entry.date}</span>
            <span className="text-muted group-hover:text-text-primary transition-colors">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
