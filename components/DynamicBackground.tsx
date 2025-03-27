"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse, viewport } = useThree()
  const [positions, colors, sizes] = useMemo(() => {
    const particleCount = 3000 // Increased particle count
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const color = new THREE.Color()
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      positions.set([x, y, z], i * 3)
      color.setHSL(0.5 + Math.random() * 0.3, 0.8, 0.8) // Brighter colors
      colors.set(color.toArray(), i * 3)
      sizes[i] = Math.random() * 0.05 + 0.01 // Varied sizes
    }
    return [positions, colors, sizes]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.5, 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.5, 0.1)

      const time = state.clock.getElapsedTime()
      ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = 1 + Math.sin(time * 0.3) * 0.2

      const positionAttribute = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute
      const colorAttribute = ref.current.geometry.getAttribute("color") as THREE.BufferAttribute
      const sizeAttribute = ref.current.geometry.getAttribute("size") as THREE.BufferAttribute

      for (let i = 0; i < positionAttribute.count; i++) {
        const i3 = i * 3

        // More dynamic movement
        positionAttribute.array[i3 + 1] -= (Math.random() * 0.05 + 0.02) * delta * 10
        positionAttribute.array[i3] += Math.sin(time + i) * 0.01
        positionAttribute.array[i3 + 2] += Math.cos(time + i) * 0.01

        if (positionAttribute.array[i3 + 1] < -5) {
          positionAttribute.array[i3 + 1] = 5
          positionAttribute.array[i3] = (Math.random() - 0.5) * 10
          positionAttribute.array[i3 + 2] = (Math.random() - 0.5) * 10
          colorAttribute.array[i3] = Math.random()
          colorAttribute.array[i3 + 1] = Math.random()
          colorAttribute.array[i3 + 2] = Math.random()
          sizeAttribute.array[i] = Math.random() * 0.05 + 0.01
        }
      }
      positionAttribute.needsUpdate = true
      colorAttribute.needsUpdate = true
      sizeAttribute.needsUpdate = true
    }
  })

  return (
    <Points ref={ref}>
      <PointMaterial
        transparent
        vertexColors
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
    </Points>
  )
}

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 z-[-1]" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 5, 15]} />
        <ParticleField />
      </Canvas>
    </div>
  )
}

