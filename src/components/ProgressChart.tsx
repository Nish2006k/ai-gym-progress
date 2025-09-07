import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'

interface ProgressChartProps {
  data: {
    week: number
    weight: number
    muscleGain: number
    fatLoss: number
    strengthGain: number
  }[]
}

const ProgressChart = ({ data }: ProgressChartProps) => {
  const chartData = data.map(item => ({
    week: `Week ${item.week}`,
    weight: item.weight,
    muscleGain: item.muscleGain,
    fatLoss: item.fatLoss,
    strengthGain: item.strengthGain
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-96 w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="week" 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <YAxis 
            stroke="#9CA3AF"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '8px',
              color: 'white'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#8B5CF6"
            strokeWidth={3}
            dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
            name="Weight (kg)"
          />
          <Line
            type="monotone"
            dataKey="muscleGain"
            stroke="#06B6D4"
            strokeWidth={3}
            dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
            name="Muscle Gain (kg)"
          />
          <Line
            type="monotone"
            dataKey="fatLoss"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            name="Fat Loss (kg)"
          />
          <Line
            type="monotone"
            dataKey="strengthGain"
            stroke="#EC4899"
            strokeWidth={3}
            dot={{ fill: '#EC4899', strokeWidth: 2, r: 4 }}
            name="Strength Gain (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default ProgressChart
