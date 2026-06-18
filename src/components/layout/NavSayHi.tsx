import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavSayHi() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-muted hover:text-text-primary transition-all duration-200"
    >
      {hovered && (
        <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-100 transition-all duration-200" style={{ zIndex: -1 }} />
      )}
      <span className="relative z-10 bg-surface/90 rounded-full px-3 py-1.5 backdrop-blur-md">
        Say hi ↗
      </span>
    </Link>
  )
}
