import OpenAI from 'openai'
import { FormData, AIResponse } from '../types'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

export const generateFitnessPrediction = async (formData: FormData): Promise<AIResponse> => {
  const prompt = `
You are an expert fitness coach and AI trainer. Based on the following user profile, generate a detailed 12-week fitness progress prediction and motivational message.

User Profile:
- Name: ${formData.name}
- Weight: ${formData.weight} kg
- Height: ${formData.height} cm
- Age: ${formData.age} years
- Gender: ${formData.gender}
- Fitness Goal: ${formData.fitnessGoal}
- Current Workout Routine: ${formData.workoutRoutine}

Please provide:
1. Weekly predictions for 12 weeks including:
   - Weight change (realistic based on goal)
   - Muscle gain (kg)
   - Fat loss (kg)
   - Strength gain percentage

2. A motivational, coach-style message (2-3 sentences) that's personalized and encouraging.

Format your response as JSON:
{
  "predictions": [
    {
      "week": 1,
      "weight": 70.0,
      "muscleGain": 0.2,
      "fatLoss": 0.5,
      "strengthGain": 5
    }
  ],
  "motivationalMessage": "Your personalized motivational message here..."
}

Make the predictions realistic and science-based. Consider the user's age, gender, and current routine.
`

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    return JSON.parse(response)
  } catch (error) {
    console.error('Error generating fitness prediction:', error)
    throw error
  }
}
