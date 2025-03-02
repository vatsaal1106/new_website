"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface SecurityNode {
  x: number
  y: number
  type: "shield" | "lock" | "key" | "file" | "alert"
  size: number
  rotation: number
  speed: number
  orbitRadius: number
  orbitAngle: number
}

interface DataPacket {
  x: number
  y: number
  targetX: number
  targetY: number
  progress: number
  size: number
  encrypted: boolean
}

export function SecurityVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up canvas with device pixel ratio
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    const width = rect.width
    const height = rect.height
    const centerX = width / 2
    const centerY = height / 2

    // Initialize security nodes
    const nodes: SecurityNode[] = []
    const nodeTypes: Array<"shield" | "lock" | "key" | "file" | "alert"> = ["shield", "lock", "key", "file", "alert"]

    // Create orbital security nodes
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: centerX,
        y: centerY,
        type: nodeTypes[i % nodeTypes.length],
        size: 12 + Math.random() * 8,
        rotation: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.002,
        orbitRadius: 100 + Math.random() * 50,
        orbitAngle: (i * Math.PI * 2) / 12,
      })
    }

    // Initialize data packets
    const packets: DataPacket[] = []
    const maxPackets = 15

    function createDataPacket() {
      const edge = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left
      let x, y, targetX, targetY

      switch (edge) {
        case 0: // top
          x = Math.random() * width
          y = -20
          targetX = centerX + (Math.random() - 0.5) * 100
          targetY = centerY + (Math.random() - 0.5) * 100
          break
        case 1: // right
          x = width + 20
          y = Math.random() * height
          targetX = centerX + (Math.random() - 0.5) * 100
          targetY = centerY + (Math.random() - 0.5) * 100
          break
        case 2: // bottom
          x = Math.random() * width
          y = height + 20
          targetX = centerX + (Math.random() - 0.5) * 100
          targetY = centerY + (Math.random() - 0.5) * 100
          break
        default: // left
          x = -20
          y = Math.random() * height
          targetX = centerX + (Math.random() - 0.5) * 100
          targetY = centerY + (Math.random() - 0.5) * 100
      }

      packets.push({
        x,
        y,
        targetX,
        targetY,
        progress: 0,
        size: 4 + Math.random() * 4,
        encrypted: Math.random() > 0.3,
      })
    }

    // Hexagon shield pattern
    function drawHexagonShield(x: number, y: number, size: number) {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    // Draw security node
    function drawNode(node: SecurityNode, time: number) {
      // Update position based on orbit
      node.orbitAngle += node.speed
      node.x = centerX + Math.cos(node.orbitAngle) * node.orbitRadius
      node.y = centerY + Math.sin(node.orbitAngle) * node.orbitRadius

      // Draw orbital path
      ctx.beginPath()
      ctx.strokeStyle = "rgba(37, 99, 235, 0.1)"
      ctx.arc(centerX, centerY, node.orbitRadius, 0, Math.PI * 2)
      ctx.stroke()

      // Draw node
      ctx.save()
      ctx.translate(node.x, node.y)
      ctx.rotate(time * 0.001 + node.rotation)

      // Node background
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, node.size)
      gradient.addColorStop(0, "rgba(37, 99, 235, 0.3)")
      gradient.addColorStop(1, "rgba(37, 99, 235, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, node.size * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Node shape
      ctx.strokeStyle = "rgba(37, 99, 235, 0.8)"
      ctx.lineWidth = 2
      drawHexagonShield(0, 0, node.size)
      ctx.stroke()

      ctx.restore()
    }

    // Draw data packet
    function drawPacket(packet: DataPacket) {
      const x = packet.x + (packet.targetX - packet.x) * packet.progress
      const y = packet.y + (packet.targetY - packet.y) * packet.progress

      // Packet glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, packet.size * 2)
      gradient.addColorStop(0, `rgba(37, 99, 235, ${packet.encrypted ? 0.3 : 0.1})`)
      gradient.addColorStop(1, "rgba(37, 99, 235, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, packet.size * 2, 0, Math.PI * 2)
      ctx.fill()

      // Packet core
      ctx.fillStyle = packet.encrypted ? "rgba(37, 99, 235, 0.8)" : "rgba(239, 68, 68, 0.8)"
      ctx.beginPath()
      ctx.arc(x, y, packet.size, 0, Math.PI * 2)
      ctx.fill()

      // Encryption indicators
      if (packet.encrypted) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let i = 0; i < 3; i++) {
          const angle = (Math.PI * 2 * i) / 3 + packet.progress * Math.PI * 4
          const px = x + Math.cos(angle) * packet.size * 0.7
          const py = y + Math.sin(angle) * packet.size * 0.7
          ctx.moveTo(x, y)
          ctx.lineTo(px, py)
        }
        ctx.stroke()
      }
    }

    let time = 0
    let lastPacketTime = 0

    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Create new packets periodically
      if (time - lastPacketTime > 50 && packets.length < maxPackets) {
        createDataPacket()
        lastPacketTime = time
      }

      // Update and draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i]
        packet.progress += 0.01
        if (packet.progress >= 1) {
          packets.splice(i, 1)
        } else {
          drawPacket(packet)
        }
      }

      // Draw central shield
      ctx.strokeStyle = "rgba(37, 99, 235, 0.2)"
      ctx.lineWidth = 2
      drawHexagonShield(centerX, centerY, 80)
      ctx.stroke()

      // Draw nodes
      nodes.forEach((node) => drawNode(node, time))

      // Draw connection lines between nearby nodes
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach((node2) => {
          const dx = node1.x - node2.x
          const dy = node1.y - node2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node1.x, node1.y)
            ctx.lineTo(node2.x, node2.y)
            ctx.stroke()
          }
        })
      })

      time++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50 rounded-2xl" />

      {/* Security metrics */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
        <motion.div
          className="w-48 h-auto rounded-lg bg-background/80 backdrop-blur-sm p-4 border pointer-events-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs text-muted-foreground mb-1">Threat Detection</div>
          <div className="text-2xl font-bold">99.99%</div>
          <div className="text-xs text-primary mt-1">Real-time monitoring active</div>
        </motion.div>

        <motion.div
          className="w-48 h-auto rounded-lg bg-background/80 backdrop-blur-sm p-4 border self-end pointer-events-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-xs text-muted-foreground mb-1">Encryption Status</div>
          <div className="text-2xl font-bold">Military Grade</div>
          <div className="text-xs text-primary mt-1">256-bit AES protection</div>
        </motion.div>
      </div>
    </div>
  )
}

