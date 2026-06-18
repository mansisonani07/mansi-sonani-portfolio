import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@/context/ThemeContext'
import { VisitorProvider } from '@/context/VisitorContext'
import { LoadingProvider } from '@/context/LoadingContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import CursorFollower from '@/components/ui/CursorFollower'
import VisitorBadge from '@/components/ui/VisitorBadge'
import HomePage from '@/pages/HomePage'
import WorkPage from '@/pages/WorkPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import ResumePage from '@/pages/ResumePage'
import JournalPage from '@/pages/JournalPage'
import JournalDetailPage from '@/pages/JournalDetailPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<ProjectDetailPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<JournalDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <VisitorProvider>
          <LoadingProvider>
            <ScrollToTop />
            <CursorFollower />
            <VisitorBadge />
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </LoadingProvider>
        </VisitorProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
