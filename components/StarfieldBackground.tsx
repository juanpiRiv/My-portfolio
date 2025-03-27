"use client"

import { useRef, useEffect } from "react"

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    interface Star {
      x: number
      y: number
      z: number
      size: number
      color: string
    }

    // Create stars
    const stars: Star[] = []
    const starCount = 800
    const maxZ = 1000

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * maxZ,
        size: 1 + Math.random() * 2,
        color: `hsl(${180 + Math.random() * 60}, 100%, ${70 + Math.random() * 30}%)`,
      })
    }

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.1
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    let animationId: number

    const animate = () => {
      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a192f")
      gradient.addColorStop(1, "#112240")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.lineWidth = 0.3
      ctx.strokeStyle = "rgba(0, 255, 255, 0.2)"

      // Horizontal grid lines
      for (let i = -1000; i < 1000; i += 50) {
        ctx.beginPath()
        const y1 = (i - mouseY) * (maxZ / (maxZ - 0)) + canvas.height / 2
        ctx.moveTo(0, y1)
        ctx.lineTo(canvas.width, y1)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = -1000; i < 1000; i += 50) {
        ctx.beginPath()
        const x1 = (i - mouseX) * (maxZ / (maxZ - 0)) + canvas.width / 2
        ctx.moveTo(x1, 0)
        ctx.lineTo(x1, canvas.height)
        ctx.stroke()
      }

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        // Move stars closer (z decreases)
        star.z -= 1

        // Reset stars that go out of view
        if (star.z <= 0) {
          star.z = maxZ
          star.x = Math.random() * 2000 - 1000
          star.y = Math.random() * 2000 - 1000
        }

        // Project 3D coordinates to 2D screen
        const factor = maxZ / star.z
        const x = (star.x - mouseX) * factor + canvas.width / 2
        const y = (star.y - mouseY) * factor + canvas.height / 2
        const size = star.size * factor

        // Only draw stars in view
        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
          // Draw star with glow effect
          const glow = 20 * (1 - star.z / maxZ)

          // Outer glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, glow)
          gradient.addColorStop(0, star.color)
          gradient.addColorStop(1, "rgba(0, 255, 255, 0)")

          ctx.beginPath()
          ctx.fillStyle = gradient
          ctx.arc(x, y, glow, 0, Math.PI * 2)
          ctx.fill()

          // Inner bright core
          ctx.beginPath()
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" style={{ background: "#0a192f" }} aria-hidden="true" />
  )
}

