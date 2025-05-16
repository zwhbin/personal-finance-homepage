"use client"

import { useEffect, useRef } from "react"

export function DigitalNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = 500 * dpr
    canvas.height = 500 * dpr
    ctx.scale(dpr, dpr)

    const COLORS = ["#64ffda", "#4facfe", "#f093fb", "#30cfd0"]
    const NODE_RADIUS = 4
    const CONNECTION_DISTANCE = 100
    const ICONS = [
      "₿",
      "£",
      "$",
      "¥",
      "€",
      // Financial/tech symbols represented as emojis/text
      "📊",
      "📈",
      "🔐",
      "🏦",
      "📱",
      "💰",
      "📟",
      "🖥️",
      "💯",
      "🔄",
      // Icons as letters
      "A",
      "V",
      "M",
      "C",
      "T",
      "S",
    ]

    // Create nodes
    const nodes: {
      x: number
      y: number
      icon?: string
      color: string
      speed: number
      angle: number
      connections: number[]
    }[] = []

    const nodeCount = 25
    const iconCount = Math.min(12, nodeCount)

    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 50 + Math.random() * 150
      const x = 250 + Math.cos(angle) * radius
      const y = 250 + Math.sin(angle) * radius

      nodes.push({
        x,
        y,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        speed: 0.2 + Math.random() * 0.3,
        angle: Math.random() * Math.PI * 2,
        connections: [],
        icon: i < iconCount ? ICONS[i % ICONS.length] : undefined,
      })
    }

    // Add "FINTECH" text in the center
    const drawCenterText = () => {
      ctx.font = "bold 30px sans-serif"
      ctx.fillStyle = "#ffffff"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("FINTECH", 250, 240)

      ctx.font = "16px sans-serif"
      ctx.fillText("Financial Technology", 250, 270)
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, 500, 500)

      // Draw a subtle gradient background
      const gradient = ctx.createRadialGradient(250, 250, 0, 250, 250, 300)
      gradient.addColorStop(0, "rgba(10, 25, 47, 0.5)")
      gradient.addColorStop(1, "rgba(10, 25, 47, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 500, 500)

      // Find node connections
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = []

        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < CONNECTION_DISTANCE) {
              nodes[i].connections.push(j)
            }
          }
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        node.connections.forEach((j) => {
          const node2 = nodes[j]
          const dx = node.x - node2.x
          const dy = node.y - node2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          ctx.beginPath()
          ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / CONNECTION_DISTANCE})`
          ctx.lineWidth = 1
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(node2.x, node2.y)
          ctx.stroke()

          // Add a moving dot along the connection line
          const t = (Date.now() / 2000) % 1
          const dotX = node.x + (node2.x - node.x) * t
          const dotY = node.y + (node2.y - node.y) * t

          ctx.beginPath()
          ctx.fillStyle = "#64ffda"
          ctx.arc(dotX, dotY, 2, 0, Math.PI * 2)
          ctx.fill()
        })
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Move nodes slightly to animate the network
        node.angle += (Math.random() - 0.5) * 0.02
        node.x += Math.cos(node.angle) * node.speed
        node.y += Math.sin(node.angle) * node.speed

        // Keep nodes within bounds
        const centerX = 250
        const centerY = 250
        const dx = node.x - centerX
        const dy = node.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 200) {
          node.angle = Math.atan2(centerY - node.y, centerX - node.x)
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Draw icon if it has one
        if (node.icon) {
          ctx.font = `${NODE_RADIUS * 4}px sans-serif`
          ctx.fillStyle = "#ffffff"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(node.icon, node.x, node.y)
        }
      }

      drawCenterText()
    }

    animate()
  }, [])

  return (
    <div className="relative w-[500px] h-[500px] max-w-full mx-auto animate-pulse-slow">
      <canvas
        ref={canvasRef}
        className="w-[500px] h-[500px] max-w-full"
        style={{ width: "500px", height: "500px", maxWidth: "100%" }}
      />
    </div>
  )
}
