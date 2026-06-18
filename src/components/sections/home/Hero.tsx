import HeroVideo from './HeroVideo'
import HeroContent from './HeroContent'
import HeroScrollIndicator from './HeroScrollIndicator'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroVideo />
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  )
}
