export interface UserProfile {
  id: string
  name: string
  weight: number
  height: number
  age: number
  gender: 'male' | 'female' | 'other'
  fitnessGoal: 'weight_loss' | 'muscle_gain' | 'strength' | 'endurance' | 'general_fitness'
  workoutRoutine: string
  createdAt: Date
}

export interface FitnessPrediction {
  id: string
  userId: string
  predictions: {
    week: number
    weight: number
    muscleGain: number
    fatLoss: number
    strengthGain: number
  }[]
  motivationalMessage: string
  createdAt: Date
}

export interface FormData {
  name: string
  weight: number
  height: number
  age: number
  gender: 'male' | 'female' | 'other'
  fitnessGoal: 'weight_loss' | 'muscle_gain' | 'strength' | 'endurance' | 'general_fitness'
  workoutRoutine: string
  intensity?: 'beginner' | 'moderate' | 'hardcore'
}

export interface AIResponse {
  predictions: {
    week: number
    weight: number
    muscleGain: number
    fatLoss: number
    strengthGain: number
  }[]
  motivationalMessage: string
  caloriePlan?: CaloriePlan
  workoutPlan?: WorkoutPlan
}

export interface CaloriePlan {
  maintenanceCalories: number
  targetCalories: number
  proteinGrams: number
  carbsGrams: number
  fatsGrams: number
}

export interface WorkoutDay {
  day: string
  focus: string
  exercises: { name: string; sets: number; reps: string }[]
}

export interface WorkoutPlan {
  split: string
  days: WorkoutDay[]
  notes: string
}
