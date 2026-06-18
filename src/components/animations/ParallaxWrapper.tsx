import { ReactNode } from 'react'
import { useParallax } from '@/hooks/useParallax'

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export default function ParallaxWrapper({ children, speed = 0.3, className }: ParallaxWrapperProps) {
  const ref = useParallax(speed)
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
