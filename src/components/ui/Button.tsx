import { ReactNode, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
  external?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  external,
  className,
  ...props
}: ButtonProps) {
  const base = 'relative inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg'

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-7 py-3.5',
    lg: 'text-base px-9 py-4',
  }

  const variants = {
    primary: 'bg-text-primary text-bg hover:bg-bg hover:text-text-primary border-2 border-transparent hover:border-stroke',
    outline: 'border-2 border-stroke bg-bg text-text-primary hover:border-transparent',
    ghost: 'text-muted hover:text-text-primary hover:bg-stroke/50',
    gradient: 'text-text-primary border border-stroke hover:border-transparent',
  }

  const classes = cn(base, sizes[size], variants[variant], className)

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={classes}>
        {children}
      </a>
    )
  }

  return <button className={classes} {...props}>{children}</button>
}
