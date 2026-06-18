import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PillProps {
  children: ReactNode
  className?: string
}

export default function Pill({ children, className }: PillProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border border-stroke bg-surface/50 text-muted', className)}>
      {children}
    </span>
  )
}
