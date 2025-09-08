import { motion } from 'framer-motion'

const Card = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ y: 60, rotate: -8, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="relative w-[300px] sm:w-[360px] h-[640px] rounded-[36px] bg-white shadow-2xl border border-black/10 overflow-hidden"
    style={{ transform: `rotate(${(-6 + delay * 8)}deg)` }}
  >
    <div className="absolute inset-0 p-5">
      <div className="h-10 w-full rounded-md bg-slate-100 mb-4" />
      <div className="space-y-3">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-10 w-full rounded-md bg-slate-100" />
        ))}
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
            <Card delay={0.0} />
            <Card delay={0.15} />
            <Card delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StackedShowcase


