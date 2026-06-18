import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'green' | 'blue' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface text-muted border border-stroke',
    green: 'bg-accent-green/10 text-accent-green border border-accent-green/20',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    outline: 'bg-transparent text-muted border border-stroke',
  }
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
