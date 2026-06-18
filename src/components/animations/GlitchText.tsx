import { useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  return (
    <span
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {text}
      {isGlitching && (
        <>
          <span className="absolute inset-0 text-accent-green opacity-70" style={{ animation: 'glitch 0.3s infinite', clipPath: 'inset(30% 0 50% 0)' }} aria-hidden>
            {text}
          </span>
          <span className="absolute inset-0 text-accent-indigo opacity-70" style={{ animation: 'glitch 0.3s infinite reverse', clipPath: 'inset(60% 0 20% 0)' }} aria-hidden>
            {text}
          </span>
        </>
      )}
    </span>
  )
}
