import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Open to Opportunities</p>
          <h2 className="text-4xl md:text-6xl font-display italic text-text-primary mb-6">
            Ready to <span className="text-gradient">automate</span>
            <br />the impossible?
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto mb-8">
            Whether you need a multi-agent AI system, n8n workflow, or full-stack application — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 text-sm"
            >
              <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" style={{ zIndex: -1 }} />
              Start a Project ↗
            </Link>
            <a
              href="mailto:sonanimansi05@gmail.com"
              className="text-sm text-muted hover:text-text-primary transition-colors underline underline-offset-4"
            >
              sonanimansi05@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
