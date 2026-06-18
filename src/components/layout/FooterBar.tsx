export default function FooterBar() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted">
        © {new Date().getFullYear()} Mansi Sonani. All rights reserved.
      </p>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
        </span>
        <span className="text-xs text-muted">Available for projects</span>
      </div>
    </div>
  )
}
