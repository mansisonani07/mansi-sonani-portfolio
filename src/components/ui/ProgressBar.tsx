interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showValue?: boolean
}

export default function ProgressBar({ value, max = 100, label, showValue = true }: ProgressBarProps) {
  const pct = (value / max) * 100
  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between mb-1.5">
          {label && <span className="text-xs text-text-primary">{label}</span>}
          {showValue && <span className="text-xs text-muted">{value}%</span>}
        </div>
      )}
      <div className="h-1 bg-stroke rounded-full overflow-hidden">
        <div
          className="h-full accent-gradient rounded-full transition-all duration-1000"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
