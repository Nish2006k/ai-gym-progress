# 🏋️‍♂️ AI Gym Progress Visualizer

A futuristic and motivational fitness app that uses AI to predict your fitness progress and provide personalized coaching insights.

## ✨ Features

- **AI-Powered Predictions**: Get personalized 12-week fitness progress predictions
- **Motivational Coaching**: Receive personalized, coach-style motivational messages
- **Progress Visualization**: Beautiful charts showing your projected transformation
- **Futuristic UI**: Dark theme with neon gradients and glassmorphism effects
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Data Persistence**: Save and manage your fitness predictions

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion + React TSParticles
- **Charts**: Recharts for data visualization
- **Backend**: Firebase (Authentication + Firestore)
- **AI**: OpenAI GPT-3.5-turbo
- **Icons**: Lucide React

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-gym-progress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Fill in your API keys:
   - `VITE_OPENAI_API_KEY`: Your OpenAI API key
   - Firebase configuration variables

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### OpenAI Setup
1. Get your API key from [OpenAI Platform](https://platform.openai.com/)
2. Add it to your `.env` file as `VITE_OPENAI_API_KEY`

### Firebase Setup
1. Create a new project in [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore
3. Copy your config and add to `.env` file

## 📱 Usage

1. **Start Your Journey**: Click "Start Your Journey" on the homepage
2. **Fill Your Profile**: Enter your personal details and fitness goals
3. **Generate Progress**: Get AI-powered predictions for the next 12 weeks
4. **View Results**: See your predicted transformation with beautiful visualizations
5. **Save Progress**: Store your predictions in your personal dashboard

## 🎨 Design Features

- **Dark Theme**: Sleek black background with neon accents
- **Glassmorphism**: Frosted glass effects on cards and components
- **Particle Background**: Animated particles for a futuristic feel
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports React applications:
- Netlify
- Firebase Hosting
- AWS Amplify
- Heroku

## 🔮 Future Features

- [ ] AI-generated transformation preview images
- [ ] Social sharing of progress
- [ ] Workout plan generation
- [ ] Nutrition recommendations
- [ ] Progress photo uploads
- [ ] Community features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- OpenAI for the AI capabilities
- Firebase for backend services
- The React and TypeScript communities
- All the amazing open-source libraries used

---

**Built with ❤️ for the fitness community**
