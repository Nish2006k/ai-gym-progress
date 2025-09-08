import { motion } from 'framer-motion'

const StatChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
    {children}
  </span>
)

const ExerciseRow = ({ name, sets, reps, weight }: { name: string; sets: number; reps: number; weight: string }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
    <div>
      <p className="text-sm font-semibold text-slate-800">{name}</p>
      <p className="text-xs text-slate-500">{sets} sets • {reps} reps</p>
    </div>
    <StatChip>{weight}</StatChip>
  </div>
)

const Card = ({ delay, rotate }: { delay: number; rotate: number }) => (
  <motion.div
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1, scale: [0.98, 1] }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    animate={{ y: [20, 0, 20] }}
    className="relative w-[300px] sm:w-[360px] h-[640px] rounded-[36px] bg-white shadow-2xl border border-black/10 overflow-hidden pop-in card-soft-glow"
    style={{ transform: `rotate(${rotate}deg)` }}
    data-animate
    data-tilt
  >
    <div className="absolute inset-0 p-5 flex flex-col">
      <div className="mb-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">Today • Workout</p>
        <h3 className="text-lg font-bold text-slate-900 text-soft-glow">Shoulders</h3>
      </div>
      <div className="space-y-3">
        <ExerciseRow name="Overhead Press" sets={4} reps={6} weight="25 kg" />
        <ExerciseRow name="Dumbbell Shoulder Press" sets={4} reps={10} weight="10 kg" />
        <ExerciseRow name="Arnold Press" sets={4} reps={10} weight="7.5 kg" />
        <ExerciseRow name="Lateral Raise" sets={3} reps={15} weight="5 kg" />
        <ExerciseRow name="Face Pulls" sets={3} reps={12} weight="20 kg" />
        <ExerciseRow name="Rear Delt Fly" sets={3} reps={12} weight="6 kg" />
      </div>
      <div className="mt-auto pt-4">
        <div className="h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">Start Session</div>
      </div>
    </div>
  </motion.div>
)

const StackedShowcase = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 mx-auto max-w-2xl h-72 rounded-[48px] bg-black/20 blur-2xl" />
          <div className="relative flex gap-6">
            <Card delay={0.0} rotate={-8} />
            <Card delay={0.15} rotate={0} />
            <Card delay={0.3} rotate={8} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StackedShowcase


