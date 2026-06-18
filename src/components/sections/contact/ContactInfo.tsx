import { motion } from 'framer-motion'
import { socialLinks } from '@/data/navLinks'

const contactItems = [
  { label: 'Email', value: 'sonanimansi05@gmail.com', href: 'mailto:sonanimansi05@gmail.com' },
  { label: 'Location', value: 'Gujarat, India (Remote)', href: null },
  { label: 'Availability', value: 'Open to Full-Time Opportunities', href: null },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="space-y-6"
    >
      {contactItems.map(item => (
        <div key={item.label} className="p-5 rounded-2xl bg-surface/50 border border-stroke">
          <p className="text-xs text-muted uppercase tracking-[0.2em] mb-1">{item.label}</p>
          {item.href ? (
            <a href={item.href} className="text-sm text-text-primary hover:text-gradient transition-all">{item.value}</a>
          ) : (
            <p className="text-sm text-text-primary">{item.value}</p>
          )}
        </div>
      ))}
      <div className="flex gap-3">
        {socialLinks.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl border border-stroke bg-surface/50 text-center text-xs text-muted hover:text-text-primary transition-all duration-200">
            {link.label} ↗
          </a>
        ))}
      </div>
    </motion.div>
  )
}
