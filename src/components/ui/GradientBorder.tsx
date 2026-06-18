import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientBorderProps {
  children: ReactNode
  className?: string
  padding?: string
  variant?: 'blue' | 'green'
  rounded?: string
}

export default function GradientBorder({
  children,
  className,
  padding = 'p-[1px]',
  variant = 'blue',
  rounded = 'rounded-full',
}: GradientBorderProps) {
  return (
    <div className={cn('relative', padding, rounded, className,
      variant === 'blue' ? 'accent-gradient' : 'green-gradient'
    )}>
      {children}
    </div>
  )
}
