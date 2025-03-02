"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Neuron {
  x: number
  y: number
  connections: number[]
  activationLevel: number
  targetActivationLevel: number
}

interface Connection {
  from: number
  to: number
  weight: number
  signal: number
}

export function AiModelVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Neural network parameters
    const layers = [4, 6, 8, 6, 4] // Simplified layer structure
    const neurons: Neuron[] = []
    const connections: Connection[] = []
    const layerSpacing = rect.width / (layers.length + 1)
    const neuronSpacing = rect.height / 10

    // Initialize neurons with proper typing
    let neuronIndex = 0
    layers.forEach((layerSize, layerIndex) => {
      const layerX = layerSpacing * (layerIndex + 1)
      const layerOffset = (rect.height - layerSize * neuronSpacing) / 2

      for (let i = 0; i < layerSize; i++) {
        const neuron: Neuron = {
          x: layerX,
          y: layerOffset + i * neuronSpacing,
          connections: [],
          activationLevel: 0,
          targetActivationLevel: 0,
        }
        neurons.push(neuron)

        // Connect to previous layer
        if (layerIndex > 0) {
          const prevLayerStart = neurons.length - layerSize - layers[layerIndex - 1]
          for (let j = 0; j < layers[layerIndex - 1]; j++) {
            const connection: Connection = {
              from: prevLayerStart + j,
              to: neuronIndex,
              weight: Math.random(),
              signal: 0,
            }
            connections.push(connection)
            if (neurons[prevLayerStart + j]) {
              neurons[prevLayerStart + j].connections.push(connections.length - 1)
            }
          }
        }
        neuronIndex++
      }
    })

    let time = 0
    const signalSpeed = 0.02
    const pulseFrequency = 0.05

    function drawConnection(from: Neuron, to: Neuron, weight: number, signal: number) {
      if (!ctx) return

      const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
      const alpha = 0.1 + weight * 0.2 + signal * 0.7
      gradient.addColorStop(0, `rgba(37, 99, 235, ${alpha})`)
      gradient.addColorStop(1, `rgba(37, 99, 235, ${alpha})`)

      ctx.beginPath()
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1 + weight * 2
      ctx.moveTo(from.x, from.y)

      // Create a curved line
      const controlPoint1X = from.x + (to.x - from.x) * 0.5
      const controlPoint1Y = from.y
      const controlPoint2X = from.x + (to.x - from.x) * 0.5
      const controlPoint2Y = to.y

      ctx.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, to.x, to.y)
      ctx.stroke()

      // Draw signal pulse if active
      if (signal > 0) {
        const pulsePosition = signal
        const curveT = Math.min(Math.max(pulsePosition, 0), 1)

        // Calculate position along the curve
        const px =
          Math.pow(1 - curveT, 3) * from.x +
          3 * Math.pow(1 - curveT, 2) * curveT * controlPoint1X +
          3 * (1 - curveT) * Math.pow(curveT, 2) * controlPoint2X +
          Math.pow(curveT, 3) * to.x

        const py =
          Math.pow(1 - curveT, 3) * from.y +
          3 * Math.pow(1 - curveT, 2) * curveT * controlPoint1Y +
          3 * (1 - curveT) * Math.pow(curveT, 2) * controlPoint2Y +
          Math.pow(curveT, 3) * to.y

        ctx.beginPath()
        ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgb(37, 99, 235)"
        ctx.fill()
      }
    }

    function drawNeuron(neuron: Neuron) {
      if (!ctx) return

      // Neuron glow
      const gradient = ctx.createRadialGradient(neuron.x, neuron.y, 0, neuron.x, neuron.y, 20)
      gradient.addColorStop(0, `rgba(37, 99, 235, ${0.1 + neuron.activationLevel * 0.4})`)
      gradient.addColorStop(1, "rgba(37, 99, 235, 0)")

      ctx.beginPath()
      ctx.fillStyle = gradient
      ctx.arc(neuron.x, neuron.y, 20, 0, Math.PI * 2)
      ctx.fill()

      // Neuron core
      ctx.beginPath()
      ctx.arc(neuron.x, neuron.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(37, 99, 235, ${0.4 + neuron.activationLevel * 0.6})`
      ctx.fill()
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update signals
      connections.forEach((connection) => {
        connection.signal += signalSpeed
        if (connection.signal > 1.2) {
          connection.signal = 0
        }
      })

      // Update neuron activations
      neurons.forEach((neuron) => {
        neuron.targetActivationLevel = (Math.sin(time * pulseFrequency) + 1) / 2
        neuron.activationLevel += (neuron.targetActivationLevel - neuron.activationLevel) * 0.1
      })

      // Draw connections
      connections.forEach((connection) => {
        const fromNeuron = neurons[connection.from]
        const toNeuron = neurons[connection.to]
        if (fromNeuron && toNeuron) {
          drawConnection(fromNeuron, toNeuron, connection.weight, connection.signal)
        }
      })

      // Draw neurons
      neurons.forEach(drawNeuron)

      time++
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      // Animation will stop when component unmounts
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50 rounded-2xl" />

      {/* Floating metrics */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
        <motion.div
          className="w-48 h-auto rounded-lg bg-background/80 backdrop-blur-sm p-4 border pointer-events-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs text-muted-foreground mb-1">Processing Speed</div>
          <div className="text-2xl font-bold">98.7%</div>
          <div className="text-xs text-primary mt-1">+2.3% from last epoch</div>
        </motion.div>

        <motion.div
          className="w-48 h-auto rounded-lg bg-background/80 backdrop-blur-sm p-4 border self-end pointer-events-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-xs text-muted-foreground mb-1">Model Accuracy</div>
          <div className="text-2xl font-bold">99.2%</div>
          <div className="text-xs text-primary mt-1">12.5M parameters optimized</div>
        </motion.div>
      </div>
    </div>
  )
}

