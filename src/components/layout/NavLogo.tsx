import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavLogo() {
  return (
    <Link to="/">
      <motion.div
        className="relative w-9 h-9 rounded-full p-[2px] accent-gradient cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
          <span className="font-display italic text-[13px] text-text-primary">MS</span>
        </div>
      </motion.div>
    </Link>
  )
}
