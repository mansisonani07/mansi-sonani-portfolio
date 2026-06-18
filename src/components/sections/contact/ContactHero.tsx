import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <SectionLabel text="Contact" />
        <h1 className="text-5xl md:text-7xl font-display italic text-text-primary mb-6">
          Let's <em>connect</em>
        </h1>
        <p className="text-base text-muted max-w-lg">
          Whether you have a project in mind, want to collaborate, or just want to chat about AI automation — I'd love to hear from you.
        </p>
      </motion.div>
    </section>
  )
}
