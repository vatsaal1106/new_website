"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TeamGrid() {
  const gridSize = 8
  const [activeNodes, setActiveNodes] = useState<number[]>([])
  const [connections, setConnections] = useState<{ from: number; to: number }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select 2-4 nodes to activate
      const numActiveNodes = Math.floor(Math.random() * 3) + 2
      const newActiveNodes = Array.from({ length: numActiveNodes }, () =>
        Math.floor(Math.random() * gridSize * gridSize),
      )
      setActiveNodes(newActiveNodes)

      // Create connections between active nodes
      const newConnections = []
      for (let i = 0; i < newActiveNodes.length - 1; i++) {
        newConnections.push({
          from: newActiveNodes[i],
          to: newActiveNodes[i + 1],
        })
      }
      setConnections(newConnections)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-muted/30">
      {/* Background grid pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Team grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 p-4">
        {Array.from({ length: gridSize * gridSize }).map((_, i) => {
          const isActive = activeNodes.includes(i)
          const isConnected = connections.some((c) => c.from === i || c.to === i)

          return (
            <motion.div
              key={i}
              className="relative aspect-square"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.01 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-lg bg-primary/20 backdrop-blur-sm 
                  ${isActive ? "z-10" : "z-0"}`}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  opacity: isActive ? 1 : isConnected ? 0.5 : 0.2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-primary/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 pointer-events-none">
        {connections.map((connection, index) => {
          const fromCol = connection.from % gridSize
          const fromRow = Math.floor(connection.from / gridSize)
          const toCol = connection.to % gridSize
          const toRow = Math.floor(connection.to / gridSize)

          const cellSize = 100 / gridSize
          const padding = cellSize * 0.1

          const x1 = `${fromCol * cellSize + cellSize / 2}%`
          const y1 = `${fromRow * cellSize + cellSize / 2}%`
          const x2 = `${toCol * cellSize + cellSize / 2}%`
          const y2 = `${toRow * cellSize + cellSize / 2}%`

          return (
            <motion.line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          )
        })}
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

