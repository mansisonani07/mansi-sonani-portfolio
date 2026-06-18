import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoUrl = `mailto:sonanimansi05@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailtoUrl)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl bg-surface border border-stroke text-text-primary text-sm placeholder:text-muted focus:outline-none focus:border-stroke/80 transition-all duration-200'

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className={inputClass} required />
        <input type="email" placeholder="Your email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className={inputClass} required />
      </div>
      <input type="text" placeholder="Subject" value={formData.subject} onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))} className={inputClass} />
      <textarea rows={6} placeholder="Your message..." value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className={`${inputClass} resize-none`} required />
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-text-primary text-bg text-sm font-medium hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden"
      >
        {submitted ? '✓ Message Sent!' : 'Send Message ↗'}
      </button>
    </motion.form>
  )
}
