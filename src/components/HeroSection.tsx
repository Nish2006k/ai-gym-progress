import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'
import MotivationCarousel from './MotivationCarousel'

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-space-grotesk font-bold mb-8 leading-tight">
            <span className="text-gradient-primary">Visualize Your</span>
            <br />
            <span className="text-white">Future Physique</span>
            <br />
            <span className="text-gradient-secondary">with AI</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-inter">
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
            className="inline-flex items-center space-x-3 gradient-button text-lg px-12 py-5 font-semibold"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
        <div className="mt-16 max-w-5xl mx-auto">
          <MotivationCarousel height="h-80" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-neon-purple rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-6 bg-neon-blue rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-3 h-3 bg-neon-green rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
