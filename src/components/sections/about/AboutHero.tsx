import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function AboutHero() {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <SectionLabel text="About" />
        <h1 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
          About <em>Me</em>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-base text-muted leading-relaxed mb-4">
              I'm Mansi Sonani — an AI Automation Developer and Prompt Engineer from Gujarat, India. I specialize in building autonomous multi-agent systems and production-grade LLM integrations.
            </p>
            <p className="text-base text-muted leading-relaxed mb-4">
              My flagship project, Synapse-AI, is a 5-agent autonomous B2B integration platform that reduced development time from 3 weeks to just 25 seconds — showcasing what's possible when AI orchestration meets thoughtful engineering.
            </p>
            <p className="text-base text-muted leading-relaxed">
              I'm passionate about the intersection of automation and intelligence, creating systems that don't just work — they think.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48 rounded-full">
              <div className="absolute inset-0 rounded-full accent-gradient animate-pulse-slow" />
              <div className="absolute inset-[3px] rounded-full bg-surface flex items-center justify-center">
                <span className="text-6xl font-display italic text-text-primary">MS</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
