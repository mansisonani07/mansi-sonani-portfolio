import { motion } from 'framer-motion'
import resumeData from '@/data/resumeData.json'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ResumeTimeline() {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Experience" />
      {resumeData.experience.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative pl-6 border-l border-stroke pb-8 last:pb-0"
        >
          <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full accent-gradient" />
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-medium text-text-primary">{exp.role}</h3>
              <p className="text-sm text-muted">{exp.company} · {exp.location}</p>
            </div>
            <span className="text-xs text-muted bg-surface px-3 py-1 rounded-full border border-stroke">
              {exp.start_date} — {exp.end_date}
            </span>
          </div>
          <p className="text-sm text-muted mb-3">{exp.summary}</p>
          <ul className="space-y-2">
            {exp.highlights.map((h, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent-green mt-0.5">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  )
}
