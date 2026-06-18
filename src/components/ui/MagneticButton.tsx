import { ReactNode } from 'react'
import { useMagneticHover } from '@/hooks/useMagneticHover'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const ref = useMagneticHover(0.3)
  return (
    <button ref={ref} onClick={onClick} className={cn('cursor-pointer', className)}>
      {children}
    </button>
  )
}
