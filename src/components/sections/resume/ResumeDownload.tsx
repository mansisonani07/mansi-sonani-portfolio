export default function ResumeDownload() {
  return (
    <section className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-16 text-center">
      <a
        href="mailto:sonanimansi05@gmail.com?subject=Resume Request"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stroke bg-surface text-text-primary text-sm hover:border-transparent transition-all duration-300 hover:scale-105 relative group"
      >
        <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" style={{ zIndex: -1 }} />
        Request Full Resume PDF ↗
      </a>
    </section>
  )
}
