"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Cpu, Network, Database, Code, Server, Cloud } from "lucide-react"

interface TechIcon {
  icon: typeof Cpu
  label: string
  color: string
}

const techIcons: TechIcon[] = [
  { icon: Cpu, label: "AI Processing", color: "blue" },
  { icon: Network, label: "Neural Networks", color: "purple" },
  { icon: Database, label: "Data Storage", color: "amber" },
  { icon: Code, label: "Smart Contracts", color: "green" },
  { icon: Server, label: "Edge Computing", color: "red" },
  { icon: Cloud, label: "Cloud Infrastructure", color: "indigo" },
]

export function OfficeVisualization() {
  const [activeIcon, setActiveIcon] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % techIcons.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.5 },
    })
  }, [controls])

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-500/5 to-background rounded-2xl overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <pattern id="office-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#office-grid)" />
        </svg>
      </div>

      {/* Central visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {techIcons.map((tech, i) => {
            const Icon = tech.icon
            const angle = (i * 360) / techIcons.length
            const isActive = i === activeIcon

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  transformOrigin: "150px 0px",
                  rotate: angle,
                }}
              >
                <motion.div
                  className={`h-12 w-12 rounded-xl bg-${tech.color}-500/10 backdrop-blur-sm flex items-center justify-center
                    ${isActive ? "ring-2 ring-primary" : ""}`}
                  animate={controls}
                >
                  <Icon
                    className={`h-6 w-6 ${isActive ? "text-primary" : "text-primary/40"}`}
                    style={{
                      transform: `rotate(-${angle}deg)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Active icon label */}
        <motion.div
          className="absolute bottom-6 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeIcon}
        >
          <span className="text-sm font-medium">{techIcons[activeIcon].label}</span>
        </motion.div>
      </div>

      {/* Animated particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/20"
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

      {/* Connection lines */}
      <svg className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle1 = (Math.PI * 2 * i) / 8
          const angle2 = (Math.PI * 2 * ((i + 1) % 8)) / 8
          const radius = 100

          const x1 = 50 + Math.cos(angle1) * radius
          const y1 = 50 + Math.sin(angle1) * radius
          const x2 = 50 + Math.cos(angle2) * radius
          const y2 = 50 + Math.sin(angle2) * radius

          return (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

