"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TechGridProps {
  className?: string
}

export function TechGrid({ className }: TechGridProps) {
  const [activeNodes, setActiveNodes] = useState<number[]>([])
  const [paths, setPaths] = useState<{ from: number; to: number }[]>([])
  const gridSize = 6
  const totalCells = gridSize * gridSize
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to get cell coordinates from index
  const getCellCoords = (index: number) => {
    const row = Math.floor(index / gridSize)
    const col = index % gridSize
    return { row, col }
  }

  // Function to get cell index from coordinates
  const getCellIndex = (row: number, col: number) => {
    if (row < 0 || row >= gridSize || col < 0 || col >= gridSize) return -1
    return row * gridSize + col
  }

  // Function to get neighboring cells
  const getNeighbors = (index: number) => {
    const { row, col } = getCellCoords(index)
    const neighbors = [
      getCellIndex(row - 1, col), // top
      getCellIndex(row + 1, col), // bottom
      getCellIndex(row, col - 1), // left
      getCellIndex(row, col + 1), // right
    ]
    return neighbors.filter((n) => n >= 0 && n < totalCells)
  }

  useEffect(() => {
    // Function to simulate data processing
    const simulateDataProcessing = () => {
      // Clear previous simulation
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Start with a random cell
      const startNode = Math.floor(Math.random() * totalCells)
      setActiveNodes([startNode])
      setPaths([])

      let currentNodes = [startNode]
      const visited = new Set([startNode])
      const pathHistory: { from: number; to: number }[] = []

      // Process data through the grid
      intervalRef.current = setInterval(() => {
        if (currentNodes.length === 0 || visited.size > totalCells * 0.6) {
          // Reset simulation when it reaches a certain coverage
          setActiveNodes([])
          setPaths([])

          // Use timeoutRef to store the timeout reference
          timeoutRef.current = setTimeout(() => {
            simulateDataProcessing()
          }, 1000)

          return
        }

        const newCurrentNodes: number[] = []
        const newPaths: { from: number; to: number }[] = []

        // For each active node, activate some neighbors
        currentNodes.forEach((node) => {
          const neighbors = getNeighbors(node)
            .filter((n) => !visited.has(n))
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.floor(Math.random() * 2) + 1) // Activate 1-2 neighbors

          neighbors.forEach((neighbor) => {
            newCurrentNodes.push(neighbor)
            visited.add(neighbor)
            newPaths.push({ from: node, to: neighbor })
            pathHistory.push({ from: node, to: neighbor })
          })
        })

        setActiveNodes((prev) => [...prev, ...newCurrentNodes])
        setPaths(pathHistory)
        currentNodes = newCurrentNodes
      }, 300)
    }

    // Start the simulation
    simulateDataProcessing()

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [totalCells]) // Empty dependency array to run only once on mount

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 z-0 w-full h-full">
        {paths.map((path, i) => {
          const fromCoords = getCellCoords(path.from)
          const toCoords = getCellCoords(path.to)

          // Calculate center positions
          const cellSize = 100 / gridSize
          const x1 = fromCoords.col * cellSize + cellSize / 2 + "%"
          const y1 = fromCoords.row * cellSize + cellSize / 2 + "%"
          const x2 = toCoords.col * cellSize + cellSize / 2 + "%"
          const y2 = toCoords.row * cellSize + cellSize / 2 + "%"

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="stroke-primary/40 dark:stroke-primary/60"
              strokeWidth="2"
              strokeDasharray="3,2"
            />
          )
        })}
      </svg>

      {/* Grid cells */}
      <div className="grid grid-cols-6 gap-1 w-full">
        {Array.from({ length: totalCells }).map((_, i) => {
          const isActive = activeNodes.includes(i)
          const isSource = paths.some((p) => p.from === i)
          const isTarget = paths.some((p) => p.to === i)

          return (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-sm transition-all duration-500",
                isActive && isSource && isTarget
                  ? "bg-primary scale-110"
                  : isActive && isSource
                    ? "bg-primary/80"
                    : isActive && isTarget
                      ? "bg-secondary/80"
                      : isActive
                        ? "bg-primary/60"
                        : "bg-muted/30",
              )}
            />
          )
        })}
      </div>
    </div>
  )
}

