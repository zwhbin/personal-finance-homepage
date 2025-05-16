"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", updateCanvasSize)
    updateCanvasSize()

    // Particle settings
    const particleCount = 100
    const particleColor = "#3b82f6"
    const lineColor = "rgba(59, 130, 246, 0.15)"
    const particleSize = 1.5
    const maxSpeed = 0.2
    const connectionDistance = 150

    // Create particles
    const particles: {
      x: number
      y: number
      directionX: number
      directionY: number
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        directionX: (Math.random() - 0.5) * maxSpeed,
        directionY: (Math.random() - 0.5) * maxSpeed,
      })
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particles
        particle.x += particle.directionX
        particle.y += particle.directionY

        // Bounce off edges
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.directionX *= -1
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.directionY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2, false)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j]
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 1 - distance / connectionDistance
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        }
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-2] h-full w-full bg-slate-900 pointer-events-none"
      aria-hidden="true"
    />
  )
}
