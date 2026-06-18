	import { socialLinks } from '@/data/navLinks'

export default function FooterSocials() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-wrap justify-center gap-4 mb-8">
      {socialLinks.map(link => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-text-primary transition-colors duration-200 uppercase tracking-[0.2em]"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  )
}
