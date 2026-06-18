import { motion } from 'framer-motion'
import { skillsData } from '@/data/skillsData'
import ProgressBar from '@/components/ui/ProgressBar'
import SectionLabel from '@/components/ui/SectionLabel'
import { useInView } from '@/hooks/useInView'

export default function ResumeSkills() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      <SectionLabel text="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.05 }}
          >
            <ProgressBar value={skill.level} label={skill.name} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
