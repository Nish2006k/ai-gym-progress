import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Dumbbell, BarChart3 } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Dumbbell className="h-8 w-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
            <span className="text-xl font-space-grotesk font-bold text-gradient-primary">
              AI Gym Progress
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                location.pathname === '/dashboard'
                  ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </Link>

            <Link
              to="/form"
              className="gradient-button text-sm px-6 py-2"
            >
              Start Journey
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
