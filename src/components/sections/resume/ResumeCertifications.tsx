import { motion } from 'framer-motion'
import resumeData from '@/data/resumeData.json'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'

export default function ResumeCertifications() {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resumeData.certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-surface/50 border border-stroke"
          >
            <Badge variant="blue" className="mb-3">{cert.issuer}</Badge>
            <h3 className="text-sm font-medium text-text-primary mb-1">{cert.name}</h3>
            <p className="text-xs text-muted">{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
