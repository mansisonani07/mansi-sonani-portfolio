import { motion } from 'framer-motion'
import { useThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full border border-stroke bg-surface flex items-center px-1 focus:outline-none"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
        animate={{ x: isDark ? 0 : 22, backgroundColor: isDark ? '#89AACC' : '#F59E0B' }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}
