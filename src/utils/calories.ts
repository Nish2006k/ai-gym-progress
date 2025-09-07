import { CaloriePlan, FormData } from '../types'

// Estimate BMR using Mifflin-St Jeor
const calculateBMR = (gender: FormData['gender'], weightKg: number, heightCm: number, age: number): number => {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return Math.round((gender === 'male' ? base + 5 : base - 161))
}

// Activity factor derived from brief routine inference (very rough)
const inferActivityFactor = (workoutRoutine: string): number => {
  const text = workoutRoutine.toLowerCase()
  if (/(daily|6x|7x)/.test(text)) return 1.6
  if (/(5x|heavy|intense)/.test(text)) return 1.55
  if (/(3x|4x|moderate)/.test(text)) return 1.45
  if (/(1x|2x|light)/.test(text)) return 1.35
  return 1.3
}

export const buildCaloriePlan = (form: FormData): CaloriePlan => {
  const bmr = calculateBMR(form.gender, form.weight, form.height, form.age)
  const activity = inferActivityFactor(form.workoutRoutine)
  const maintenance = Math.round(bmr * activity)

  // Intensity deltas per goal
  const intensity = form.intensity ?? 'moderate'
  const goal = form.fitnessGoal

  const weeklyDeltaMap: Record<NonNullable<FormData['intensity']>, number> = {
    beginner: goal === 'weight_loss' ? -250 : goal === 'muscle_gain' ? 200 : 0,
    moderate: goal === 'weight_loss' ? -500 : goal === 'muscle_gain' ? 300 : 0,
    hardcore: goal === 'weight_loss' ? -750 : goal === 'muscle_gain' ? 500 : 0,
  }

  const dailyDelta = weeklyDeltaMap[intensity]
  const targetCalories = Math.max(1200, maintenance + dailyDelta)

  // Macro split: higher protein for cut, balanced for gain/other
  const proteinPerKg = goal === 'weight_loss' ? 2.0 : goal === 'muscle_gain' ? 1.8 : 1.6
  const proteinGrams = Math.round(form.weight * proteinPerKg)
  const proteinCals = proteinGrams * 4

  // Fats ~25% of remaining, carbs rest
  const remaining = targetCalories - proteinCals
  const fatsCals = Math.round(remaining * 0.35)
  const fatsGrams = Math.round(fatsCals / 9)
  const carbsCals = targetCalories - proteinCals - fatsCals
  const carbsGrams = Math.round(carbsCals / 4)

  return {
    maintenanceCalories: maintenance,
    targetCalories,
    proteinGrams,
    carbsGrams,
    fatsGrams,
  }
}


