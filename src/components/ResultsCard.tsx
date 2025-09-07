import { motion } from 'framer-motion'
import { TrendingUp, Weight, Dumbbell, Zap } from 'lucide-react'
import { FormData } from '../types'

interface ResultsCardProps {
  title: string
  icon: React.ReactNode
  data: {
    week: number
    weight: number
    muscleGain: number
    fatLoss: number
    strengthGain: number
  }[]
  formData: FormData
}

const ResultsCard = ({ title, icon, data, formData }: ResultsCardProps) => {
  const finalWeek = data[data.length - 1]
  const initialWeight = formData.weight

  return (
    <div className="glass-card p-8 h-full">
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h3 className="text-2xl font-orbitron font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Weight className="h-5 w-5 text-neon-purple" />
            <span className="text-sm font-medium text-gray-300">Weight Change</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {finalWeek.weight > initialWeight ? '+' : ''}
            {(finalWeek.weight - initialWeight).toFixed(1)} kg
          </div>
        </div>

        <div className="bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Dumbbell className="h-5 w-5 text-neon-blue" />
            <span className="text-sm font-medium text-gray-300">Muscle Gain</span>
          </div>
          <div className="text-2xl font-bold text-white">
            +{finalWeek.muscleGain.toFixed(1)} kg
          </div>
        </div>

        <div className="bg-gradient-to-r from-neon-green/20 to-neon-pink/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-5 w-5 text-neon-green" />
            <span className="text-sm font-medium text-gray-300">Fat Loss</span>
          </div>
          <div className="text-2xl font-bold text-white">
            -{finalWeek.fatLoss.toFixed(1)} kg
          </div>
        </div>

        <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-5 w-5 text-neon-pink" />
            <span className="text-sm font-medium text-gray-300">Strength Gain</span>
          </div>
          <div className="text-2xl font-bold text-white">
            +{finalWeek.strengthGain.toFixed(0)}%
          </div>
        </div>
      </div>

      {/* Weekly Breakdown */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white mb-3">Weekly Breakdown</h4>
        <div className="max-h-64 overflow-y-auto space-y-2">
          {data.slice(0, 8).map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-between bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
            >
              <span className="text-white font-medium">Week {week.week}</span>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-300">
                  Weight: <span className="text-white">{week.weight}kg</span>
                </span>
                <span className="text-gray-300">
                  Muscle: <span className="text-neon-blue">+{week.muscleGain.toFixed(1)}kg</span>
                </span>
                <span className="text-gray-300">
                  Fat: <span className="text-neon-green">-{week.fatLoss.toFixed(1)}kg</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultsCard
