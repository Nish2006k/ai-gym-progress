import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

const HeroSection = lazy(() => import('./components/HeroSection'))
const FormPage = lazy(() => import('./pages/FormPage'))
const ResultsPage = lazy(() => import('./pages/ResultsPage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg snap-container">
        <ParticleBackground />
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<div className="pt-24 text-center text-white">Loading...</div>}>
            <Routes>
              <Route path="/" element={<div className="snap-child"><HeroSection /></div>} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </motion.div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
