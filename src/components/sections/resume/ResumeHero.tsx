import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ResumeHero() {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <SectionLabel text="Resume" />
        <h1 className="text-5xl md:text-7xl font-display italic text-text-primary mb-4">
          Mansi <em>Sonani</em>
        </h1>
        <p className="text-base text-muted max-w-lg mb-6">
          AI Automation Developer & Prompt Engineer — Building autonomous multi-agent systems and hyper-efficient n8n workflows.
        </p>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
          </span>
          <span className="text-sm text-muted">Open to Full-Time Opportunities — Gujarat, India (Remote)</span>
        </div>
      </motion.div>
    </section>
  )
}
