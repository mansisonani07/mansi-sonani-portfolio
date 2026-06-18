import { toolsData } from '@/data/skillsData'
import SectionLabel from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import Tooltip from '@/components/ui/Tooltip'

export default function AboutTools() {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Tools & Technologies" />
      <div className="flex flex-wrap gap-3">
        {toolsData.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Tooltip content={tool.category}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-stroke hover:border-stroke/80 transition-all duration-200 cursor-default">
                <span>{tool.icon}</span>
                <span className="text-xs text-text-primary">{tool.name}</span>
              </div>
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
