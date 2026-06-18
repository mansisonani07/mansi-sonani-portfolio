import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { navLinks } from '@/data/navLinks'
import NavLogo from './NavLogo'
import NavSayHi from './NavSayHi'
import ThemeToggle from '@/components/ui/ThemeToggle'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export default function Navbar() {
  const { scrollY } = useScrollDirection()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isScrolled = scrollY > 100

  return (
    <>
      <ScrollIndicator />
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-all duration-300 ${isScrolled ? 'shadow-md shadow-black/20' : ''}`}
        >
          {/* Logo */}
          <NavLogo />
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-text-primary bg-stroke/50'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />
          <ThemeToggle />
          <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />
          <NavSayHi />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden ml-2 w-8 h-8 rounded-full bg-stroke/50 flex items-center justify-center text-muted hover:text-text-primary"
          >
            <span className="text-xs">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full mt-2 left-4 right-4 bg-surface/95 backdrop-blur-md border border-stroke rounded-2xl p-4"
            >
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'text-text-primary bg-stroke/50'
                      : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
