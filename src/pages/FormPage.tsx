import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { User, Weight, Ruler, Calendar, Target, Dumbbell } from 'lucide-react'
import { FormData } from '../types'

const FormPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    weight: 0,
    height: 0,
    age: 0,
    gender: 'male',
    fitnessGoal: 'general_fitness',
    workoutRoutine: '',
    intensity: 'moderate'
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'weight' || name === 'height' || name === 'age' ? Number(value) : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Store form data in localStorage for now (will be replaced with Firebase)
    localStorage.setItem('formData', JSON.stringify(formData))
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false)
      navigate('/results')
    }, 2000)
  }

  const fitnessGoals = [
    { value: 'weight_loss', label: 'Weight Loss' },
    { value: 'muscle_gain', label: 'Muscle Gain' },
    { value: 'strength', label: 'Strength Building' },
    { value: 'endurance', label: 'Endurance' },
    { value: 'general_fitness', label: 'General Fitness' }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-orbitron font-bold neon-text mb-4">
            Your Fitness Profile
          </h1>
          <p className="text-xl text-gray-300">
            Tell us about yourself to get personalized AI predictions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-lg font-medium text-white">
                  <User className="h-5 w-5 text-neon-purple" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-lg font-medium text-white">
                  <Calendar className="h-5 w-5 text-neon-blue" />
                  <span>Age</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleInputChange}
                  required
                  min="13"
                  max="100"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
                  placeholder="Your age"
                />
              </div>
            </div>

            {/* Physical Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-lg font-medium text-white">
                  <Weight className="h-5 w-5 text-neon-green" />
                  <span>Weight (kg)</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight || ''}
                  onChange={handleInputChange}
                  required
                  min="30"
                  max="300"
                  step="0.1"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent"
                  placeholder="Your current weight"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-lg font-medium text-white">
                  <Ruler className="h-5 w-5 text-neon-pink" />
                  <span>Height (cm)</span>
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height || ''}
                  onChange={handleInputChange}
                  required
                  min="100"
                  max="250"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent"
                  placeholder="Your height"
                />
              </div>
            </div>

            {/* Gender and Fitness Goal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-lg font-medium text-white">
                  <User className="h-5 w-5 text-neon-purple" />
                  <span>Gender</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent appearance-none [color-scheme:dark]"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-lg font-medium text-white">
                  <Target className="h-5 w-5 text-neon-blue" />
                  <span>Fitness Goal</span>
                </label>
                <select
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent appearance-none [color-scheme:dark]"
                >
                  {fitnessGoals.map(goal => (
                    <option key={goal.value} value={goal.value}>
                      {goal.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Intensity Selector */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-lg font-medium text-white">
                <Target className="h-5 w-5 text-neon-purple" />
                <span>Intensity Preference</span>
              </label>
              <select
                name="intensity"
                value={formData.intensity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent appearance-none [color-scheme:dark]"
              >
                <option value="beginner">Beginner Friendly — gentle, sustainable pace</option>
                <option value="moderate">Moderate — balanced challenge</option>
                <option value="hardcore">Hardcore — aggressive pace (advanced only)</option>
              </select>
              <p className="text-sm text-gray-400">We’ll tailor predicted weight change and calories to your chosen intensity.</p>
            </div>

            {/* Workout Routine */}
            <div className="space-y-2">
              <label className="flex items-center space-x-2 text-lg font-medium text-white">
                <Dumbbell className="h-5 w-5 text-neon-green" />
                <span>Current Workout Routine</span>
              </label>
              <textarea
                name="workoutRoutine"
                value={formData.workoutRoutine}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-green focus:border-transparent resize-none"
                placeholder="Describe your current workout routine, frequency, and any specific exercises you do..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full neon-button text-base sm:text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Generating Your Progress...</span>
                </div>
              ) : (
                'Generate My Progress'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default FormPage
