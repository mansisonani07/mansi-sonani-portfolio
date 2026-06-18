import { statsData } from '@/data/statsData'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function WorkMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-12">
      {statsData.map(stat => (
        <div key={stat.label} className="text-center p-4 rounded-2xl bg-surface/50 border border-stroke">
          <div className="text-2xl font-display italic text-text-primary">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-xs text-muted mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
