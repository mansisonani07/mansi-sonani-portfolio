interface TagProps { label: string }
export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] bg-stroke/50 text-muted hover:text-text-primary hover:bg-stroke transition-colors duration-200">
      {label}
    </span>
  )
}
