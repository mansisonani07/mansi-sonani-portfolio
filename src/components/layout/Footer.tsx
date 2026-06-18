import FooterMarquee from './FooterMarquee'
import FooterSocials from './FooterSocials'
import FooterBar from './FooterBar'
import { useHLSVideo } from '@/hooks/useHLSVideo'

const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

export default function Footer() {
  const videoRef = useHLSVideo(HLS_SRC)

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'translate(-50%, -50%) scaleY(-1)' }}
        />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="relative z-10">
        <FooterMarquee />

        {/* CTA Section */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-12 text-center">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-display italic text-text-primary mb-8">
            Let's build something<br />
            <span className="text-gradient">extraordinary</span>
          </h2>
          <a
            href="mailto:sonanimansi05@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-stroke bg-surface/50 backdrop-blur-md text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105 relative group"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: -1 }} />
            <span className="relative">sonanimansi05@gmail.com</span>
            <span>↗</span>
          </a>
        </div>

        <FooterSocials />
        <FooterBar />
      </div>
    </footer>
  )
}
