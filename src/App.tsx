import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FormPage from './pages/FormPage'
import ResultsPage from './pages/ResultsPage'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <ParticleBackground />
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </motion.div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
