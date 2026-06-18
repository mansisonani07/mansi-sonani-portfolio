import { motion } from 'framer-motion'
import resumeData from '@/data/resumeData.json'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ResumeEducation() {
  const edu = resumeData.education
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Education" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-surface/50 border border-stroke"
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-display italic text-text-primary">{edu.degree}</h3>
            <p className="text-sm text-muted mt-1">{edu.institution}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted">{edu.start_date} — {edu.end_date}</p>
            <p className="text-xs text-accent-green mt-1">{edu.grade}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
