import { motion } from 'framer-motion'
import { categories } from '@/data/projectsData'

interface WorkFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function WorkFilters({ activeFilter, onFilterChange }: WorkFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      {categories.map(cat => (
        <motion.button
          key={cat}
          onClick={() => onFilterChange(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-xs transition-all duration-200 border ${
            activeFilter === cat
              ? 'bg-text-primary text-bg border-transparent'
              : 'bg-surface text-muted border-stroke hover:text-text-primary'
          }`}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  )
}
