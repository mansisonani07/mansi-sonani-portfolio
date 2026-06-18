export default function ContactAvailability() {
  return (
    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent-green/10 border border-accent-green/20 inline-flex w-fit">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
      </span>
      <span className="text-xs text-accent-green">Currently available for new projects</span>
    </div>
  )
}
