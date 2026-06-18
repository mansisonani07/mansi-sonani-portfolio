import SectionLabel from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'

const values = [
  { icon: '⚡', title: 'Speed', desc: 'From 3 weeks to 25 seconds — I build systems that move at AI speed.' },
  { icon: '🎯', title: 'Precision', desc: 'Every workflow, prompt, and API endpoint is engineered with purpose.' },
  { icon: '🔗', title: 'Integration', desc: 'Connecting systems seamlessly is my core superpower.' },
  { icon: '📈', title: 'Impact', desc: '80% manual work reduction. Real metrics, real results.' },
]

export default function AboutBio() {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Values" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-surface/50 border border-stroke"
          >
            <div className="text-2xl mb-3">{v.icon}</div>
            <h3 className="text-sm font-medium text-text-primary mb-1">{v.title}</h3>
            <p className="text-xs text-muted">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
