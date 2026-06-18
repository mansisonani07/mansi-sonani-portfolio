import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const text = 'BUILDING THE FUTURE • AI AUTOMATION • MULTI-AGENT SYSTEMS • n8n WORKFLOWS • '

export default function FooterMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })
    return () => { tween.kill() }
  }, [])

  return (
    <div className="overflow-hidden border-y border-stroke py-4 mb-8">
      <div ref={marqueeRef} className="flex whitespace-nowrap" style={{ width: 'max-content' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-sm text-muted uppercase tracking-[0.2em] px-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
