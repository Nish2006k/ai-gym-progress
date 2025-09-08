import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'
import MotivationCarousel from './MotivationCarousel'

const HeroSection = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto text-center flex-1 flex flex-col justify-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="uppercase tracking-wide text-xs sm:text-sm text-slate-400 mb-2">AI-Powered Fitness</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold mb-3 leading-tight">
            Visualize Your <span className="text-gradient-secondary">Future Physique</span> with AI
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-inter px-2">
            Transform your fitness journey with AI-powered predictions, 
            personalized coaching, and futuristic progress visualization.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Link
            to="/form"
            className="inline-flex items-center justify-center space-x-3 gradient-button w-full max-w-xs sm:max-w-none text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 font-semibold mx-auto"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          <div className="glass-card glass-card-hover p-8 group">
            <Zap className="h-14 w-14 text-primary-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-white">AI Predictions</h3>
            <p className="text-slate-300 leading-relaxed">
              Get personalized fitness progress predictions powered by advanced AI algorithms and machine learning.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 group">
            <Target className="h-14 w-14 text-secondary-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-white">Personalized Goals</h3>
            <p className="text-slate-300 leading-relaxed">
              Set and track your fitness goals with customized workout and nutrition plans tailored to your needs.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 group">
            <TrendingUp className="h-14 w-14 text-accent-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-white">Progress Tracking</h3>
            <p className="text-slate-300 leading-relaxed">
              Visualize your transformation with beautiful charts, analytics, and real-time progress monitoring.
            </p>
          </div>
        </motion.div>

        {/* Motivation Carousel */}
        <div className="hidden sm:block mt-12 max-w-5xl mx-auto">
          <MotivationCarousel height="h-80" />
        </div>

        {/* Floating Elements */}
        <div className="hidden md:block absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-neon-purple rounded-full opacity-60"></div>
        </div>
        <div className="hidden md:block absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-neon-blue rounded-full opacity-40"></div>
        </div>
        <div className="hidden md:block absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-3 h-3 bg-neon-green rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
