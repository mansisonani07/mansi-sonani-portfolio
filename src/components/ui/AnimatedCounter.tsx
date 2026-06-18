import { useCountUp } from '@/hooks/useCountUp'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration)
  return (
    <div ref={ref} className="tabular-nums">
      {count}{suffix}
    </div>
  )
}
