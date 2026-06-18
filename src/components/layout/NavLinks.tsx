import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '@/data/navLinks'

export default function NavLinks() {
  const location = useLocation()
  return (
    <div className="flex items-center">
      {navLinks.map(link => (
        <Link
          key={link.href}
          to={link.href}
          className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
            location.pathname === link.href
              ? 'text-text-primary bg-stroke/50'
              : 'text-muted hover:text-text-primary hover:bg-stroke/50'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
