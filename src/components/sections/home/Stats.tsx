import { statsData } from '@/data/statsData'
import StatCard from './StatCard'
import SectionLabel from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <SectionLabel text="Impact" />
          <h2 className="text-3xl md:text-5xl font-display italic text-text-primary">
            By the <em>numbers</em>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
