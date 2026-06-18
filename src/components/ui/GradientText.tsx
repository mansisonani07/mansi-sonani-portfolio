import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: ReactNode
  variant?: 'blue' | 'green'
  className?: string
}

export default function GradientText({ children, variant = 'blue', className }: GradientTextProps) {
  return (
    <span className={cn(variant === 'blue' ? 'text-gradient' : 'text-green-gradient', className)}>
      {children}
    </span>
  )
}
