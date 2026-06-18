import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    let mouseX = 0, mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1 })
      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.4 })
    }

    const onEnter = () => gsap.to(cursor, { scale: 1.5, duration: 0.3 })
    const onLeave = () => gsap.to(cursor, { scale: 1, duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-stroke/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-text-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  )
}
