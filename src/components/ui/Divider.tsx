import { cn } from '@/lib/utils'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export default function Divider({ orientation = 'horizontal', className }: DividerProps) {
  return (
    <div className={cn(
      'bg-stroke',
      orientation === 'horizontal' ? 'w-full h-px' : 'w-px h-5',
      className
    )} />
  )
}
