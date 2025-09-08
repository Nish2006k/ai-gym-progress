import { useMemo } from 'react'
import { motion } from 'framer-motion'

const FEEDBACKS = [
  {
    name: 'Aarav M.',
    role: 'Beginner Lifter',
    quote: 'FitwithAI made my plan crystal clear. In 3 weeks I finally see progress.'
  },
  {
    name: 'Sophia K.',
    role: 'Runner & Designer',
    quote: 'The predictions and charts keep me consistent. It feels like a friendly coach.'
  },
  {
    name: 'Rahul S.',
    role: 'Product Manager',
    quote: 'Super clean UX. The weekly forecast helped me adjust calories with confidence.'
  },
  {
    name: 'Maya P.',
    role: 'Strength Training',
    quote: 'I love the visualization. It turns goals into something I can actually see.'
  },
  {
    name: 'Ishaan R.',
    role: 'College Athlete',
    quote: 'Macros + weekly forecast = zero guesswork. My weight trend finally makes sense.'
  },
  {
    name: 'Neha V.',
    role: 'Busy Professional',
    quote: 'The UI is calming and fast. I check the dashboard every morning like a habit.'
  },
  {
    name: 'Leo T.',
    role: 'Powerlifter',
    quote: 'Great for planning deloads. The projections kept me from overreaching.'
  }
]

const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const FeedbackSection = () => {
  const items = useMemo(() => shuffle(FEEDBACKS).slice(0, 3), [])

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wide text-xs sm:text-sm text-slate-400">What people say</p>
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white text-soft-glow">
            Loved by early users
          </h2>
        </div>

        {/* Horizontal scroll with snap for a smooth, native feel */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
          {items.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[360px] snap-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 pop-in card-soft-glow"
            >
              <img
                src={`https://i.pravatar.cc/80?img=${(idx + 4) * 3}`}
                alt={f.name}
                className="h-10 w-10 rounded-full mb-4 object-cover"
                loading="lazy"
              />
              <p className="text-slate-200 text-base leading-relaxed mb-4">“{f.quote}”</p>
              <div className="text-sm text-slate-400">
                <span className="font-semibold text-white">{f.name}</span>
                <span> • {f.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
