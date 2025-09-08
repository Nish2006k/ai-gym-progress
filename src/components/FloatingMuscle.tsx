import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Floating card with a stylized muscle silhouette (SVG) that tilts with pointer and floats
const FloatingMuscle = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotX = useSpring(useTransform(y, [-50, 50], [15, -15]), { stiffness: 120, damping: 12 })
  const rotY = useSpring(useTransform(x, [-50, 50], [-15, 15]), { stiffness: 120, damping: 12 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      x.set(Math.max(-50, Math.min(50, dx / 4)))
      y.set(Math.max(-50, Math.min(50, dy / 4)))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      className="mx-auto w-[280px] sm:w-[360px] h-[180px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-lg"
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' as any }}
      animate={{ y: hovered ? -6 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* Simple muscle/arm silhouette */}
        <svg width="140" height="120" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 70c10-30 35-45 55-45 15 0 23 10 28 18 7 11 16 20 10 32-7 15-22 18-38 18H34c-12 0-20-10-14-23z" fill="url(#g)"/>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="140" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A73E8"/>
              <stop offset="0.6" stopColor="#00C853"/>
              <stop offset="1" stopColor="#FF6D00"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
}

export default FloatingMuscle


