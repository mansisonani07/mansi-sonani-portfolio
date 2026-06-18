import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollIndicator() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-stroke/30">
      <div
        className="h-full accent-gradient transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
