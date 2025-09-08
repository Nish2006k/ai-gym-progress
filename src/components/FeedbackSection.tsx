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
          <p className="uppercase tracking-wide text-xs sm:text-sm text-slate-500">What people say</p>
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-[#212121]">
            Loved by early users
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-black/5 bg-white shadow-sm p-6"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary mb-4" />
              <p className="text-[#212121] text-base leading-relaxed mb-4">“{f.quote}”</p>
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-[#212121]">{f.name}</span>
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
