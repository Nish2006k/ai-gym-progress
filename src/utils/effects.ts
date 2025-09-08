type Cleanup = () => void

export function initPageLoadFade(): Cleanup {
  document.body.classList.add('page-loaded')
  const onLoad = () => document.body.classList.add('page-loaded')
  window.addEventListener('load', onLoad)
  return () => window.removeEventListener('load', onLoad)
}

export function initIntersectionAnimations(selector = '[data-animate]'): Cleanup {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        const el = e.target as HTMLElement
        if (e.isIntersecting) {
          el.classList.add('pop-in')
          io.unobserve(el)
        }
      })
    },
    { threshold: 0.2 }
  )
  const els = document.querySelectorAll(selector)
  els.forEach(el => io.observe(el))
  return () => io.disconnect()
}

export function initParallax(selector = '[data-parallax]'): Cleanup {
  const onScroll = () => {
    const y = window.scrollY
    document.querySelectorAll(selector).forEach(el => {
      const speed = Number((el as HTMLElement).dataset.parallaxSpeed || '0.2')
      ;(el as HTMLElement).style.transform = `translate3d(0, ${y * speed}px, 0)`
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  return () => window.removeEventListener('scroll', onScroll)
}

export function initTilt(selector = '[data-tilt]'): Cleanup {
  const onMove = (e: MouseEvent) => {
    document.querySelectorAll(selector).forEach(el => {
      const rect = (el as HTMLElement).getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      const rx = Math.max(-10, Math.min(10, -dy / 12))
      const ry = Math.max(-10, Math.min(10, dx / 12))
      ;(el as HTMLElement).style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`
    })
  }
  window.addEventListener('mousemove', onMove)
  return () => window.removeEventListener('mousemove', onMove)
}

export function initScrollOpacity(selector = '[data-fade-on-scroll]'): Cleanup {
  const onScroll = () => {
    const h = window.innerHeight
    document.querySelectorAll(selector).forEach(el => {
      const rect = (el as HTMLElement).getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, 1 - rect.top / h))
      ;(el as HTMLElement).style.opacity = String(progress)
      ;(el as HTMLElement).style.transform = `translateY(${(1 - progress) * 20}px)`
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  return () => window.removeEventListener('scroll', onScroll)
}

export function initVideoScrub(selector = '[data-scroll-video]'): Cleanup {
  const onScroll = () => {
    const v = document.querySelector(selector) as HTMLVideoElement | null
    if (!v || !v.duration) return
    const rect = v.getBoundingClientRect()
    const vh = window.innerHeight
    const visible = Math.min(1, Math.max(0, 1 - Math.abs(rect.top + rect.height / 2 - vh / 2) / (vh / 2)))
    v.currentTime = visible * v.duration
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

export function initSticky(): Cleanup {
  // Using CSS position: sticky; JS hook reserved for future needs
  return () => {}
}

export function initAllEffects(): Cleanup {
  const cleanups = [
    initPageLoadFade(),
    initIntersectionAnimations(),
    initParallax(),
    initTilt(),
    initScrollOpacity(),
    initVideoScrub(),
    initSticky(),
  ]
  return () => cleanups.forEach(c => c())
}


