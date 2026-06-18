import { explorationsData } from '@/data/explorationsData'
import ExplorationCard from './ExplorationCard'
import ParallaxWrapper from '@/components/animations/ParallaxWrapper'

export default function ExplorationColumns() {
  const col1 = explorationsData.slice(0, 3)
  const col2 = explorationsData.slice(3, 6)

  return (
    <div className="absolute inset-0 z-20 flex items-start justify-center pt-32">
      <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] w-full px-8">
        <ParallaxWrapper speed={-0.2} className="flex flex-col gap-8">
          {col1.map((item, i) => (
            <ExplorationCard key={item.id} title={item.title} image={item.image} rotation={item.rotation} index={i} />
          ))}
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.2} className="flex flex-col gap-8 mt-24">
          {col2.map((item, i) => (
            <ExplorationCard key={item.id} title={item.title} image={item.image} rotation={item.rotation} index={i + 3} />
          ))}
        </ParallaxWrapper>
      </div>
    </div>
  )
}
