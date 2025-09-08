import React, { useEffect, useRef } from 'react'

// Lightweight three.js accent: animated gradient bar using canvas (no heavy 3D model)
// Keeps bundle small versus full three.js + R3F setup.

const ThreeAccent: React.FC<{ height?: number }> = ({ height = 120 }) => {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      const w = canvas.clientWidth
      const h = height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    let t = 0
    const draw = () => {
      const w = canvas.clientWidth
      const h = height
      ctx.clearRect(0, 0, w, h)

      const grad = ctx.createLinearGradient(0, 0, w, 0)
      grad.addColorStop(0, '#1A73E8')
      grad.addColorStop(0.6, '#00C853')
      grad.addColorStop(1, '#FF6D00')
      ctx.fillStyle = grad

      const amplitude = 8
      const base = h / 2
      ctx.beginPath()
      ctx.moveTo(0, base)
      for (let x = 0; x <= w; x += 4) {
        const y = base + Math.sin((x + t) * 0.02) * amplitude
        ctx.lineTo(x, y)
      }
      ctx.lineTo(w, h)
      ctx.lineTo(0, h)
      ctx.closePath()
      ctx.fill()

      t += 1.5
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [height])

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black/5 bg-white">
      <canvas ref={ref} className="w-full block" style={{ height }} />
    </div>
  )
}

export default ThreeAccent


