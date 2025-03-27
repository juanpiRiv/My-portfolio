"use client"

import { useRef, useEffect } from "react"

export default function EnhancedStarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with pixel ratio for sharp rendering
    const setCanvasDimensions = () => {
      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(pixelRatio, pixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    interface Star {
      x: number
      y: number
      z: number
      size: number
      color: string
      pulse: number
      pulseSpeed: number
    }

    // Nebula properties
    interface Nebula {
      x: number
      y: number
      radius: number
      color1: string
      color2: string
      opacity: number
    }

    // Shooting star properties
    interface ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      color: string
      active: boolean
      trail: Array<{ x: number; y: number }>
    }

    // Create stars
    const stars: Star[] = []
    const starCount = 1000
    const maxZ = 1500

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * 3000 - 1500,
        y: Math.random() * 3000 - 1500,
        z: Math.random() * maxZ,
        size: 0.5 + Math.random() * 2,
        color: `hsl(${180 + Math.random() * 60}, 100%, ${70 + Math.random() * 30}%)`,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      })
    }

    // Create nebulas
    const nebulas: Nebula[] = []
    const nebulaCount = 5

    for (let i = 0; i < nebulaCount; i++) {
      nebulas.push({
        x: Math.random() * 3000 - 1500,
        y: Math.random() * 3000 - 1500,
        radius: 300 + Math.random() * 500,
        color1: `hsla(${170 + Math.random() * 40}, 100%, 60%, 0.1)`,
        color2: `hsla(${200 + Math.random() * 60}, 100%, 50%, 0)`,
        opacity: 0.05 + Math.random() * 0.1,
      })
    }

    // Create shooting stars
    const shootingStars: ShootingStar[] = []
    const maxShootingStars = 3

    const createShootingStar = () => {
      const angle = Math.random() * Math.PI * 2
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: 50 + Math.random() * 100,
        speed: 5 + Math.random() * 15,
        angle: angle,
        opacity: 0.7 + Math.random() * 0.3,
        color: `hsl(${180 + Math.random() * 60}, 100%, 85%)`,
        active: true,
        trail: [],
      }
    }

    // Mouse tracking with inertia
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.15
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.15
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Click effect
    const clickWaves: Array<{ x: number; y: number; radius: number; maxRadius: number; color: string }> = []

    const handleClick = (e: MouseEvent) => {
      // Add a wave effect
      clickWaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 150 + Math.random() * 100,
        color: `hsla(${180 + Math.random() * 60}, 100%, 70%, 1)`,
      })

      // Add a shooting star from the click point
      const star = createShootingStar()
      star.x = e.clientX
      star.y = e.clientY
      star.angle = Math.random() * Math.PI * 2
      shootingStars.push(star)
    }

    window.addEventListener("click", handleClick)

    // Animation variables
    let animationId: number
    let time = 0
    let pulsePhase = 0

    const animate = () => {
      time += 0.01
      pulsePhase += 0.02

      // Smooth mouse movement with inertia
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight)
      gradient.addColorStop(0, "#0a192f")
      gradient.addColorStop(0.5, "#112240")
      gradient.addColorStop(1, "#1a365d")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw nebulas
      nebulas.forEach((nebula) => {
        const factor = maxZ / nebula.radius
        const x = (nebula.x - mouseX * 0.3) * factor + window.innerWidth / 2
        const y = (nebula.y - mouseY * 0.3) * factor + window.innerHeight / 2
        const radius = nebula.radius * factor

        // Only draw nebulas in view (with padding)
        if (
          x + radius > -500 &&
          x - radius < window.innerWidth + 500 &&
          y + radius > -500 &&
          y - radius < window.innerHeight + 500
        ) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
          gradient.addColorStop(0, nebula.color1)
          gradient.addColorStop(1, nebula.color2)

          ctx.globalAlpha = nebula.opacity * (1 + Math.sin(time) * 0.2)
          ctx.beginPath()
          ctx.fillStyle = gradient
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        }
      })

      // Draw grid lines with perspective effect
      ctx.lineWidth = 0.5
      ctx.strokeStyle = "rgba(0, 255, 255, 0.15)"

      // Horizontal grid lines
      for (let i = -2000; i < 2000; i += 100) {
        ctx.beginPath()
        const y1 = (i - mouseY * 0.5) * (maxZ / (maxZ - 0)) + window.innerHeight / 2
        ctx.moveTo(0, y1)
        ctx.lineTo(window.innerWidth, y1)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = -2000; i < 2000; i += 100) {
        ctx.beginPath()
        const x1 = (i - mouseX * 0.5) * (maxZ / (maxZ - 0)) + window.innerWidth / 2
        ctx.moveTo(x1, 0)
        ctx.lineTo(x1, window.innerHeight)
        ctx.stroke()
      }

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Move stars closer (z decreases)
        star.z -= 0.8

        // Update pulse
        star.pulse += star.pulseSpeed

        // Reset stars that go out of view
        if (star.z <= 0) {
          star.z = maxZ
          star.x = Math.random() * 3000 - 1500
          star.y = Math.random() * 3000 - 1500
        }

        // Project 3D coordinates to 2D screen with parallax
        const factor = maxZ / star.z
        const x = (star.x - mouseX) * factor + window.innerWidth / 2
        const y = (star.y - mouseY) * factor + window.innerHeight / 2

        // Calculate size with pulsation effect
        const pulseFactor = 0.2 * Math.sin(star.pulse)
        const size = star.size * factor * (1 + pulseFactor)

        // Only draw stars in view (with padding)
        if (x > -50 && x < window.innerWidth + 50 && y > -50 && y < window.innerHeight + 50) {
          // Calculate brightness based on z-position
          const brightness = Math.min(1, Math.max(0.2, 1 - star.z / maxZ))

          // Draw star with glow effect
          const glowSize = 15 * brightness * (1 + pulseFactor)

          // Outer glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize)
          gradient.addColorStop(0, star.color)
          gradient.addColorStop(1, "rgba(0, 255, 255, 0)")

          ctx.beginPath()
          ctx.fillStyle = gradient
          ctx.arc(x, y, glowSize, 0, Math.PI * 2)
          ctx.fill()

          // Inner bright core
          ctx.beginPath()
          ctx.fillStyle = "rgba(255, 255, 255, " + brightness + ")"
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i]

        if (star.active) {
          // Move shooting star
          star.x += Math.cos(star.angle) * star.speed
          star.y += Math.sin(star.angle) * star.speed

          // Add to trail
          star.trail.push({ x: star.x, y: star.y })

          // Limit trail length
          if (star.trail.length > 20) {
            star.trail.shift()
          }

          // Draw trail
          if (star.trail.length > 1) {
            ctx.beginPath()
            ctx.moveTo(star.trail[0].x, star.trail[0].y)

            for (let j = 1; j < star.trail.length; j++) {
              ctx.lineTo(star.trail[j].x, star.trail[j].y)
            }

            ctx.strokeStyle = star.color
            ctx.lineWidth = 2
            ctx.globalAlpha = star.opacity
            ctx.stroke()
            ctx.globalAlpha = 1
          }

          // Check if out of bounds
          if (star.x < -100 || star.x > window.innerWidth + 100 || star.y < -100 || star.y > window.innerHeight + 100) {
            star.active = false
          }
        }
      }

      // Remove inactive shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        if (!shootingStars[i].active) {
          shootingStars.splice(i, 1)
        }
      }

      // Randomly add new shooting stars
      if (shootingStars.length < maxShootingStars && Math.random() < 0.005) {
        shootingStars.push(createShootingStar())
      }

      // Update and draw click waves
      for (let i = clickWaves.length - 1; i >= 0; i--) {
        const wave = clickWaves[i]
        wave.radius += 3

        if (wave.radius > wave.maxRadius) {
          clickWaves.splice(i, 1)
          continue
        }

        const opacity = 1 - wave.radius / wave.maxRadius
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2
        ctx.globalAlpha = opacity
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" style={{ background: "#0a192f" }} aria-hidden="true" />
  )
}

