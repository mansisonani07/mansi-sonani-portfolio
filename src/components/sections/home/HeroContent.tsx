import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const roles = ['AI Automation', 'Prompt Engineer', 'n8n Builder', 'LangGraph Dev']

export default function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(nameRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 })
      .fromTo([eyebrowRef.current, descRef.current, ctaRef.current], { opacity: 0, y: 20, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.15 }, '-=0.8')
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex(i => i + 1), 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
      <p ref={eyebrowRef} className="text-xs text-muted uppercase tracking-[0.3em] mb-8 opacity-0">
        PORTFOLIO '26
      </p>

      <h1
        ref={nameRef}
        className="text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 opacity-0"
      >
        Mansi Sonani
      </h1>

      <p className="text-base md:text-lg text-muted mb-2">
        A{' '}
        <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">
          {roles[roleIndex % roles.length]}
        </span>{' '}
        developer from Gujarat, India.
      </p>

      <p ref={descRef} className="text-sm md:text-base text-muted max-w-md mb-12 opacity-0">
        Building autonomous multi-agent systems and hyper-efficient n8n workflows that turn weeks of manual development into seconds of AI execution.
      </p>

      <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 opacity-0">
        <Link
          to="/work"
          className="relative group inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-transparent"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: -1 }} />
          See Projects ↗
        </Link>
        <Link
          to="/contact"
          className="relative group inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: -1 }} />
          <span className="relative z-10 bg-bg rounded-full px-7 py-3.5 -mx-7 -my-3.5">Reach out...</span>
        </Link>
      </div>
    </div>
  )
}
