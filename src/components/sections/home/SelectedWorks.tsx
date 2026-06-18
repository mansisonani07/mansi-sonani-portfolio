import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BentoGrid from './BentoGrid'
import SectionLabel from '@/components/ui/SectionLabel'

export default function SelectedWorks() {
  return (
    <section className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <SectionLabel text="Selected Work" />
            <h2 className="text-3xl md:text-5xl font-display italic text-text-primary">
              Featured <em>projects</em>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-md">
              A selection of AI systems and automation tools I've built, from concept to deployment.
            </p>
          </div>
          <Link
            to="/work"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stroke text-sm text-muted hover:text-text-primary hover:border-transparent transition-all duration-300 relative group"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" style={{ zIndex: -1 }} />
            View all work ↗
          </Link>
        </motion.div>
        <BentoGrid />
      </div>
    </section>
  )
}
