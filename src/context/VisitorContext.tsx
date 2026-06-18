import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface VisitorContextType {
  visitorCount: number
  isNewVisitor: boolean
  sessionCount: number
}

const VisitorContext = createContext<VisitorContextType | undefined>(undefined)

export function VisitorProvider({ children }: { children: ReactNode }) {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isNewVisitor, setIsNewVisitor] = useState(false)
  const [sessionCount, setSessionCount] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem('ms_visitor_count')
    const sessions = localStorage.getItem('ms_session_count')
    const lastVisit = localStorage.getItem('ms_last_visit')

    const now = Date.now()
    const count = stored ? parseInt(stored) : 0
    const sCount = sessions ? parseInt(sessions) : 0

    if (!stored) {
      setIsNewVisitor(true)
      setVisitorCount(1)
      localStorage.setItem('ms_visitor_count', '1')
    } else {
      const newCount = count + 1
      setVisitorCount(newCount)
      localStorage.setItem('ms_visitor_count', newCount.toString())
    }

    const newSession = sCount + 1
    setSessionCount(newSession)
    localStorage.setItem('ms_session_count', newSession.toString())
    localStorage.setItem('ms_last_visit', now.toString())

    void lastVisit
  }, [])

  return (
    <VisitorContext.Provider value={{ visitorCount, isNewVisitor, sessionCount }}>
      {children}
    </VisitorContext.Provider>
  )
}

export function useVisitorContext() {
  const ctx = useContext(VisitorContext)
  if (!ctx) throw new Error('useVisitorContext must be used within VisitorProvider')
  return ctx
}
