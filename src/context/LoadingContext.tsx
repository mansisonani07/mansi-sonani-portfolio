import { createContext, useContext, useState, ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (v: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoadingContext() {
  const ctx = useContext(LoadingContext)
  if (!ctx) throw new Error('useLoadingContext must be used within LoadingProvider')
  return ctx
}
