import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Target, Trash2, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface SavedResult {
  id: string
  formData: {
    name: string
    weight: number
    height: number
    age: number
    gender: string
    fitnessGoal: string
    workoutRoutine: string
  }
  aiResponse: {
    predictions: {
      week: number
      weight: number
      muscleGain: number
      fatLoss: number
      strengthGain: number
    }[]
    motivationalMessage: string
  }
  createdAt: string
}

const Dashboard = () => {
  const navigate = useNavigate()
  const [savedResults, setSavedResults] = useState<SavedResult[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('savedResults')
    if (saved) {
      setSavedResults(JSON.parse(saved))
    }
  }, [])

  const handleDeleteResult = (id: string) => {
    const updatedResults = savedResults.filter(result => result.id !== id)
    setSavedResults(updatedResults)
    localStorage.setItem('savedResults', JSON.stringify(updatedResults))
  }

  const handleViewResult = (result: SavedResult) => {
    // Store the selected result and navigate to results page
    localStorage.setItem('selectedResult', JSON.stringify(result))
    navigate('/results')
  }

  const getFitnessGoalLabel = (goal: string) => {
    const goals: { [key: string]: string } = {
      'weight_loss': 'Weight Loss',
      'muscle_gain': 'Muscle Gain',
      'strength': 'Strength Building',
      'endurance': 'Endurance',
      'general_fitness': 'General Fitness'
    }
    return goals[goal] || goal
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-orbitron font-bold neon-text mb-4">
            Your Progress Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Track and manage all your AI fitness predictions
          </p>
        </motion.div>

        {savedResults.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="glass-card p-12 max-w-md mx-auto">
              <Target className="h-16 w-16 text-neon-purple mx-auto mb-6" />
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                No Saved Progress Yet
              </h3>
              <p className="text-gray-300 mb-8">
                Start your fitness journey by generating your first AI prediction!
              </p>
              <button
                onClick={() => navigate('/form')}
                className="neon-button"
              >
                Generate Progress
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {result.formData.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {getFitnessGoalLabel(result.formData.fitnessGoal)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleViewResult(result)}
                      className="p-2 text-neon-blue hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteResult(result.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Initial Weight:</span>
                    <span className="text-white font-medium">
                      {result.formData.weight} kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Predicted Weight:</span>
                    <span className="text-white font-medium">
                      {result.aiResponse.predictions[result.aiResponse.predictions.length - 1].weight} kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Muscle Gain:</span>
                    <span className="text-neon-blue font-medium">
                      +{result.aiResponse.predictions[result.aiResponse.predictions.length - 1].muscleGain.toFixed(1)} kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Fat Loss:</span>
                    <span className="text-neon-green font-medium">
                      -{result.aiResponse.predictions[result.aiResponse.predictions.length - 1].fatLoss.toFixed(1)} kg
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(result.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Motivational Preview */}
                <div className="mt-4 p-3 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-lg">
                  <p className="text-sm text-gray-300 italic">
                    "{result.aiResponse.motivationalMessage.substring(0, 100)}..."
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Ready for More Progress?
            </h3>
            <p className="text-gray-300 mb-6">
              Generate new predictions or update your fitness profile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/form')}
                className="neon-button"
              >
                Generate New Progress
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
