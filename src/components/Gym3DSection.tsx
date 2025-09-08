import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Gym3DSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const width = mount.clientWidth
    const height = 360

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0B1220')

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 2, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const light = new THREE.DirectionalLight('#ffffff', 1)
    light.position.set(3, 5, 4)
    scene.add(light)
    scene.add(new THREE.AmbientLight('#ffffff', 0.5))

    // Barbell (dumbbell style): bar + plates
    const group = new THREE.Group()
    scene.add(group)

    const barMat = new THREE.MeshStandardMaterial({ color: '#cbd5e1', metalness: 0.8, roughness: 0.2 })
    const barGeom = new THREE.CylinderGeometry(0.1, 0.1, 3.2, 24)
    const bar = new THREE.Mesh(barGeom, barMat)
    bar.rotation.z = Math.PI / 2
    group.add(bar)

    const plateMatBlue = new THREE.MeshStandardMaterial({ color: '#1A73E8', metalness: 0.7, roughness: 0.3 })
    const plateMatGreen = new THREE.MeshStandardMaterial({ color: '#00C853', metalness: 0.7, roughness: 0.3 })
    const plateMatOrange = new THREE.MeshStandardMaterial({ color: '#FF6D00', metalness: 0.7, roughness: 0.3 })

    const makePlate = (radius: number, thickness: number, mat: THREE.Material) => {
      const g = new THREE.CylinderGeometry(radius, radius, thickness, 48)
      const m = new THREE.Mesh(g, mat)
      m.rotation.z = Math.PI / 2
      return m
    }

    const plates: THREE.Mesh[] = []
    const offsets = [1.2, 1.0, 0.8]
    const mats = [plateMatBlue, plateMatGreen, plateMatOrange]

    offsets.forEach((x, i) => {
      const p1 = makePlate(0.45 - i * 0.08, 0.25, mats[i])
      p1.position.x = x
      group.add(p1)
      plates.push(p1)

      const p2 = makePlate(0.45 - i * 0.08, 0.25, mats[i])
      p2.position.x = -x
      group.add(p2)
      plates.push(p2)
    })

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ color: '#0e162a' }))
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -1.2
    scene.add(floor)

    let t = 0
    const animate = () => {
      t += 0.01
      group.rotation.y = Math.sin(t) * 0.35
      plates.forEach((p, i) => (p.position.y = Math.sin(t * 2 + i) * 0.05))
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }

    let raf = requestAnimationFrame(animate)

    const onResize = () => {
      const w = mount.clientWidth
      camera.aspect = w / height
      camera.updateProjectionMatrix()
      renderer.setSize(w, height)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="uppercase tracking-wide text-xs sm:text-sm text-slate-400">3D Preview</p>
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold text-white">Gym hardware in motion</h2>
        </div>
        <div ref={mountRef} className="w-full rounded-2xl border border-white/10 bg-black/20 shadow-inner" style={{ height: 360 }} />
      </div>
    </section>
  )
}

export default Gym3DSection


