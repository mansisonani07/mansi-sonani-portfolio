import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/layout/PageTransition'
import LoadingScreen from '@/components/sections/home/LoadingScreen'
import Hero from '@/components/sections/home/Hero'
import SelectedWorks from '@/components/sections/home/SelectedWorks'
import Journal from '@/components/sections/home/Journal'
import Explorations from '@/components/sections/home/Explorations'
import Stats from '@/components/sections/home/Stats'
import ContactCTA from '@/components/sections/home/ContactCTA'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('ms_loaded')
  })

  const handleLoadingComplete = () => {
    sessionStorage.setItem('ms_loaded', 'true')
    setIsLoading(false)
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!isLoading && (
        <PageTransition>
          <main>
            <Hero />
            <SelectedWorks />
            <Stats />
            <Journal />
            <Explorations />
            <ContactCTA />
          </main>
        </PageTransition>
      )}
    </>
  )
}
