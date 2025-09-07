import { FormData, WorkoutPlan } from '../types'

export const buildWorkoutPlan = (form: FormData): WorkoutPlan => {
  const intensity = form.intensity ?? 'moderate'
  const goal = form.fitnessGoal

  // Choose split by intensity/experience
  let split = 'Full Body 3x'
  if (intensity === 'hardcore') split = 'Push/Pull/Legs 6x'
  else if (intensity === 'moderate') split = 'Upper/Lower 4x'

  const fullBody = [
    { day: 'Mon', focus: 'Full Body', exercises: [
      { name: 'Squat', sets: 3, reps: '6-10' },
      { name: 'Bench Press', sets: 3, reps: '6-10' },
      { name: 'Lat Pulldown', sets: 3, reps: '8-12' },
      { name: 'DB Shoulder Press', sets: 2, reps: '10-12' },
      { name: 'Plank', sets: 3, reps: '45-60s' },
    ]},
    { day: 'Wed', focus: 'Full Body', exercises: [
      { name: 'Deadlift', sets: 2, reps: '3-5' },
      { name: 'Incline DB Press', sets: 3, reps: '8-12' },
      { name: 'Row (Cable/Barbell)', sets: 3, reps: '6-10' },
      { name: 'Lunge', sets: 2, reps: '10-12' },
      { name: 'Hanging Knee Raise', sets: 3, reps: '10-15' },
    ]},
    { day: 'Fri', focus: 'Full Body', exercises: [
      { name: 'Front Squat/Leg Press', sets: 3, reps: '8-12' },
      { name: 'Overhead Press', sets: 3, reps: '5-8' },
      { name: 'Chin-Up/Assisted', sets: 3, reps: 'AMRAP' },
      { name: 'Hip Hinge (RDL)', sets: 2, reps: '6-10' },
      { name: 'Face Pull', sets: 2, reps: '12-15' },
    ]},
  ]

  const upperLower = [
    { day: 'Mon', focus: 'Upper', exercises: [
      { name: 'Bench Press', sets: 4, reps: '5-8' },
      { name: 'Row', sets: 4, reps: '6-10' },
      { name: 'Overhead Press', sets: 3, reps: '6-10' },
      { name: 'Lat Pulldown', sets: 3, reps: '8-12' },
      { name: 'Curls/Triceps', sets: 3, reps: '10-12' },
    ]},
    { day: 'Tue', focus: 'Lower', exercises: [
      { name: 'Squat', sets: 4, reps: '5-8' },
      { name: 'RDL', sets: 3, reps: '6-10' },
      { name: 'Leg Press', sets: 3, reps: '10-12' },
      { name: 'Calf Raise', sets: 3, reps: '12-15' },
      { name: 'Core', sets: 3, reps: '12-15' },
    ]},
    { day: 'Thu', focus: 'Upper', exercises: [
      { name: 'Incline DB Press', sets: 4, reps: '6-10' },
      { name: 'Pull-Up/Assisted', sets: 4, reps: 'AMRAP' },
      { name: 'Lateral Raise', sets: 3, reps: '12-15' },
      { name: 'Row Variant', sets: 3, reps: '8-12' },
      { name: 'Arms Superset', sets: 3, reps: '12-15' },
    ]},
    { day: 'Fri', focus: 'Lower', exercises: [
      { name: 'Deadlift', sets: 3, reps: '3-5' },
      { name: 'Front Squat', sets: 3, reps: '6-10' },
      { name: 'Ham Curl', sets: 3, reps: '10-12' },
      { name: 'Walking Lunge', sets: 2, reps: '12-15' },
      { name: 'Core', sets: 3, reps: '12-15' },
    ]},
  ]

  const ppl = [
    { day: 'Mon', focus: 'Push', exercises: [
      { name: 'Bench Press', sets: 4, reps: '5-8' },
      { name: 'Overhead Press', sets: 3, reps: '6-10' },
      { name: 'Incline DB Press', sets: 3, reps: '8-12' },
      { name: 'Lateral Raise', sets: 3, reps: '12-15' },
      { name: 'Triceps Pushdown', sets: 3, reps: '10-12' },
    ]},
    { day: 'Tue', focus: 'Pull', exercises: [
      { name: 'Deadlift', sets: 2, reps: '3-5' },
      { name: 'Pull-Up/Lat Pulldown', sets: 4, reps: 'AMRAP/8-12' },
      { name: 'Row Variant', sets: 4, reps: '6-10' },
      { name: 'Face Pull', sets: 3, reps: '12-15' },
      { name: 'Curls', sets: 3, reps: '10-12' },
    ]},
    { day: 'Wed', focus: 'Legs', exercises: [
      { name: 'Squat', sets: 4, reps: '5-8' },
      { name: 'RDL', sets: 3, reps: '6-10' },
      { name: 'Leg Press', sets: 3, reps: '10-12' },
      { name: 'Calf Raise', sets: 3, reps: '12-15' },
      { name: 'Core', sets: 3, reps: '12-15' },
    ]},
    { day: 'Thu', focus: 'Rest', exercises: []},
    { day: 'Fri', focus: 'Push', exercises: [
      { name: 'Dips/Weighted', sets: 4, reps: 'AMRAP/6-10' },
      { name: 'Overhead Press', sets: 3, reps: '6-10' },
      { name: 'Incline Press', sets: 3, reps: '8-12' },
      { name: 'Lateral Raise', sets: 3, reps: '12-15' },
      { name: 'Triceps', sets: 3, reps: '10-12' },
    ]},
    { day: 'Sat', focus: 'Pull', exercises: [
      { name: 'Row', sets: 4, reps: '6-10' },
      { name: 'Pull-Up/Lat Pulldown', sets: 3, reps: 'AMRAP/8-12' },
      { name: 'Rear Delt', sets: 3, reps: '12-15' },
      { name: 'Curls', sets: 3, reps: '10-12' },
    ]},
    { day: 'Sun', focus: 'Legs', exercises: [
      { name: 'Front Squat', sets: 4, reps: '6-10' },
      { name: 'Leg Curl', sets: 3, reps: '10-12' },
      { name: 'Lunge', sets: 3, reps: '10-12' },
      { name: 'Calves', sets: 3, reps: '12-15' },
    ]},
  ]

  const plan = split === 'Full Body 3x' ? fullBody : split === 'Upper/Lower 4x' ? upperLower : ppl

  const notes = goal === 'weight_loss'
    ? 'Prioritize progressive overload with sufficient steps/cardio. Keep 1-2 reps in reserve.'
    : goal === 'muscle_gain'
      ? 'Aim for small weekly load or rep increases. Eat at a slight surplus with high protein.'
      : 'Maintain form quality and balance volume across body parts.'

  return { split, days: plan, notes }
}


