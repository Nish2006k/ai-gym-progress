import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Slide = {
  url: string
  title: string
  quote: string
}

const slides: Slide[] = [
  {
    // Boxing ring dramatic shot (royalty-free themed)
    url: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=1600&auto=format&fit=crop',
    title: 'Muhammad Ali — Spirit',
    quote: 'Don\'t count the days; make the days count.'
  },
  {
    // Powerful training moment (royalty-free themed)
    url: 'https://images.unsplash.com/photo-1521417532150-1f84494b4423?q=80&w=1600&auto=format&fit=crop',
    title: 'Mike Tyson — Grit',
    quote: 'Discipline is doing what you hate to do, but do it like you love it.'
  },
  {
    // Rocky-style stairs run vibe (royalty-free themed)
    url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600&auto=format&fit=crop',
    title: 'Rocky — Heart',
    quote: 'It\'s not about how hard you hit. It\'s about how hard you can get hit and keep moving forward.'
  },
]

interface MotivationCarouselProps {
  height?: string
  autoMs?: number
}

const MotivationCarousel = ({ height = 'h-72', autoMs = 4000 }: MotivationCarouselProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), autoMs)
    return () => clearInterval(id)
  }, [autoMs])

  const current = slides[index]

  return (
    <div className={`relative overflow-hidden rounded-2xl ${height} glow-effect-purple`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current.url}
          src={current.url}
          alt={current.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <p className="text-sm text-gray-300 mb-1">{current.title}</p>
        <p className="text-xl sm:text-2xl font-semibold text-white max-w-3xl">“{current.quote}”</p>
        <div className="mt-4 flex space-x-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-1 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MotivationCarousel


