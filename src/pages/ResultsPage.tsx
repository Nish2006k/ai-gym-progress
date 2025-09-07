import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Save, ArrowLeft, TrendingUp, Target, Zap } from 'lucide-react'
import { FormData, AIResponse, CaloriePlan } from '../types'
import { buildCaloriePlan } from '../utils/calories'
import { buildWorkoutPlan } from '../utils/workout'
import ProgressChart from '../components/ProgressChart'
import ResultsCard from '../components/ResultsCard'
import MotivationCarousel from '../components/MotivationCarousel'

const ResultsPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData | null>(null)
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [caloriePlan, setCaloriePlan] = useState<CaloriePlan | null>(null)
  const [workoutPlan, setWorkoutPlan] = useState<any | null>(null)

  useEffect(() => {
    // Get form data from localStorage
    const savedFormData = localStorage.getItem('formData')
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData)
      setFormData(parsedData)
      
      // Generate AI response (simulated for now)
      generateAIResponse(parsedData)
      setCaloriePlan(buildCaloriePlan(parsedData))
      setWorkoutPlan(buildWorkoutPlan(parsedData))
    } else {
      navigate('/form')
    }
  }, [navigate])

  const generateAIResponse = async (data: FormData) => {
    setIsLoading(true)
    
    // Simulate AI response generation
    setTimeout(() => {
      const mockResponse: AIResponse = {
        predictions: generateMockPredictions(data),
        motivationalMessage: generateMockMotivationalMessage(data)
      }
      setAiResponse(mockResponse)
      setIsLoading(false)
    }, 3000)
  }

  const generateMockPredictions = (data: FormData) => {
    const predictions = []
    let currentWeight = data.weight
    let muscleGain = 0
    let fatLoss = 0
    let strengthGain = 0

    for (let week = 1; week <= 12; week++) {
      // Intensity scaling
      const intensity = data.intensity ?? 'moderate'
      const scale = intensity === 'beginner' ? 0.6 : intensity === 'hardcore' ? 1.2 : 1.0

      // Simulate realistic progress based on fitness goal
      const weeklyMuscleGainBase = data.fitnessGoal === 'muscle_gain' ? 0.2 : 0.1
      const weeklyFatLossBase = data.fitnessGoal === 'weight_loss' ? 0.5 : 0.2
      const weeklyMuscleGain = weeklyMuscleGainBase * scale
      const weeklyFatLoss = weeklyFatLossBase * scale
      const weeklyStrengthGain = 2 + Math.random() * 3

      muscleGain += weeklyMuscleGain
      fatLoss += weeklyFatLoss
      strengthGain += weeklyStrengthGain
      currentWeight = data.weight + muscleGain - fatLoss

      predictions.push({
        week,
        weight: Math.round(currentWeight * 10) / 10,
        muscleGain: Math.round(muscleGain * 10) / 10,
        fatLoss: Math.round(fatLoss * 10) / 10,
        strengthGain: Math.round(strengthGain * 10) / 10
      })
    }

    return predictions
  }

  const generateMockMotivationalMessage = (data: FormData) => {
    const messages = [
      `Hey ${data.name}! Your dedication is going to pay off big time. In just 12 weeks, you'll see incredible changes that will blow your mind!`,
      `${data.name}, I can already see the champion in you! Your consistency will be the key to unlocking your full potential. Let's make it happen!`,
      `Listen up, ${data.name}! Every rep, every set, every drop of sweat is building the future you. Trust the process and watch the magic happen!`,
      `${data.name}, your transformation journey starts now! I believe in you completely - now it's time for you to believe in yourself!`
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const handleSaveProgress = () => {
    // Save to localStorage for now (will be replaced with Firebase)
    const savedResults = localStorage.getItem('savedResults') || '[]'
    const results = JSON.parse(savedResults)
    results.push({
      id: Date.now().toString(),
      formData,
      aiResponse,
      createdAt: new Date().toISOString()
    })
    localStorage.setItem('savedResults', JSON.stringify(results))
    
    // Show success message
    alert('Progress saved successfully!')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-neon-purple/30 border-t-neon-purple rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-orbitron font-bold neon-text mb-2">
            AI is analyzing your profile...
          </h2>
          <p className="text-gray-300">
            Generating personalized predictions and motivational insights
          </p>
        </motion.div>
      </div>
    )
  }

  if (!formData || !aiResponse) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-orbitron font-bold text-white mb-4">
            No data found
          </h2>
          <button
            onClick={() => navigate('/form')}
            className="neon-button"
          >
            Start Over
          </button>
        </div>
      </div>
    )
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
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={() => navigate('/form')}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Form</span>
            </button>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-orbitron font-bold neon-text mb-4">
            Your AI Fitness Forecast
          </h1>
          <p className="text-xl text-gray-300">
            Here's what the future holds for your fitness journey, {formData.name}!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* AI Predictions Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ResultsCard
              title="12-Week Predictions"
              icon={<TrendingUp className="h-8 w-8" />}
              data={aiResponse.predictions}
              formData={formData}
            />
          </motion.div>

          {/* Motivational Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="h-8 w-8 text-neon-purple" />
                <h3 className="text-2xl font-orbitron font-bold text-white">
                  Your AI Coach Says
                </h3>
              </div>
              
              <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg p-6 mb-6">
                <p className="text-lg text-white leading-relaxed">
                  "{aiResponse.motivationalMessage}"
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={handleSaveProgress}
                  className="flex items-center space-x-2 neon-button"
                >
                  <Save className="h-5 w-5" />
                  <span>Save Progress</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Calorie Plan */}
        {caloriePlan && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="glass-card p-8 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-neon-blue" />
              <h3 className="text-2xl font-orbitron font-bold text-white">
                Daily Calorie Plan
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-sm text-gray-400">Maintenance</p>
                <p className="text-2xl font-bold text-white">{caloriePlan.maintenanceCalories} kcal</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-sm text-gray-400">Target</p>
                <p className="text-2xl font-bold text-white">{caloriePlan.targetCalories} kcal</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-sm text-gray-400">Protein</p>
                <p className="text-2xl font-bold text-white">{caloriePlan.proteinGrams} g</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-sm text-gray-400">Carbs</p>
                <p className="text-2xl font-bold text-white">{caloriePlan.carbsGrams} g</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-sm text-gray-400">Fats</p>
                <p className="text-2xl font-bold text-white">{caloriePlan.fatsGrams} g</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Workout Plan */}
        {workoutPlan && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="glass-card p-8 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Target className="h-8 w-8 text-neon-purple" />
              <h3 className="text-2xl font-orbitron font-bold text-white">
                Suggested Workout Plan — {workoutPlan.split}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workoutPlan.days.map((d: any) => (
                <div key={d.day} className="bg-white/5 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">{d.day}</p>
                  <p className="text-white font-semibold mb-3">{d.focus}</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {d.exercises.map((e: any, idx: number) => (
                      <li key={idx} className="flex justify-between">
                        <span>{e.name}</span>
                        <span className="text-gray-400">{e.sets} x {e.reps}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-400 text-sm">{workoutPlan.notes}</p>
          </motion.div>
        )}

        {/* Motivation */}
        <div className="mb-8">
          <MotivationCarousel height="h-64" />
        </div>

        {/* Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-neon-green" />
            <h3 className="text-2xl font-orbitron font-bold text-white">
              Progress Visualization
            </h3>
          </div>
          
          <ProgressChart data={aiResponse.predictions} />
        </motion.div>
      </div>
    </div>
  )
}

export default ResultsPage
