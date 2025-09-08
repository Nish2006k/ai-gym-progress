import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine } from 'tsparticles-engine'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // intentionally unused
  }, [])

  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 640

  const options = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: !isSmallScreen, mode: 'push' },
        onHover: { enable: !isSmallScreen, mode: 'repulse' },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ['#8B5CF6', '#06B6D4', '#10B981'] },
      links: {
        color: '#8B5CF6',
        distance: isSmallScreen ? 90 : 150,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: isSmallScreen ? 0.6 : 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: isSmallScreen ? 30 : 80,
      },
      opacity: { value: 0.45 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), [isSmallScreen])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particle-bg"
      options={options as any}
    />
  )
}

export default ParticleBackground
