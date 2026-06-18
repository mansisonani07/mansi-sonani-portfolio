interface SectionLabelProps {
  text: string
}
export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-stroke" />
      <span className="text-xs text-muted uppercase tracking-[0.3em]">{text}</span>
    </div>
  )
}
