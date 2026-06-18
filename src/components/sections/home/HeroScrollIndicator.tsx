export default function HeroScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
      <div className="w-px h-10 bg-stroke overflow-hidden relative">
        <div className="absolute inset-0 animate-scroll-down bg-gradient-to-b from-transparent via-text-primary to-transparent" />
      </div>
    </div>
  )
}
