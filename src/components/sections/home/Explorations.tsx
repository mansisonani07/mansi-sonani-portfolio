import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'
import SectionLabel from '@/components/ui/SectionLabel'
import ExplorationColumns from './ExplorationColumns'

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: contentRef.current,
          pinSpacing: false,
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-bg">
      <div ref={contentRef} className="relative z-10 h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <SectionLabel text="Explorations" />
          <h2 className="text-3xl md:text-5xl font-display italic text-text-primary mb-4">
            Visual <em>playground</em>
          </h2>
          <p className="text-sm text-muted max-w-sm mx-auto mb-6">
            Experiments in AI visualization, workflow diagrams, and system architecture.
          </p>
          <a
            href="https://github.com/mansisonani07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stroke text-sm text-muted hover:text-text-primary transition-all duration-300"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <ExplorationColumns />
    </section>
  )
}
