"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Users, Building2, FileText, Mail, Brain, Zap, LineChart, Settings } from "lucide-react"
import Image from "next/image"

interface Node {
  id: number
  name: string
  icon: typeof Users
  type: "input" | "output"
  description: string
  position: { x: number; y: number }
  color: string
}

const nodes: Node[] = [
  // Input nodes (left side)
  {
    id: 1,
    name: "Sales Data",
    icon: Building2,
    type: "input",
    description: "CRM and pipeline data",
    position: { x: 20, y: 20 },
    color: "blue",
  },
  {
    id: 2,
    name: "HR Records",
    icon: Users,
    type: "input",
    description: "Employee and recruitment data",
    position: { x: 15, y: 40 },
    color: "red",
  },
  {
    id: 3,
    name: "Documents",
    icon: FileText,
    type: "input",
    description: "Business documents and contracts",
    position: { x: 20, y: 60 },
    color: "yellow",
  },
  {
    id: 4,
    name: "Communications",
    icon: Mail,
    type: "input",
    description: "Emails and messages",
    position: { x: 15, y: 80 },
    color: "blue",
  },
  // Output nodes (right side)
  {
    id: 5,
    name: "Automated Reports",
    icon: LineChart,
    type: "output",
    description: "AI-generated insights",
    position: { x: 80, y: 20 },
    color: "yellow",
  },
  {
    id: 6,
    name: "Process Automation",
    icon: Settings,
    type: "output",
    description: "Automated workflows",
    position: { x: 85, y: 40 },
    color: "red",
  },
  {
    id: 7,
    name: "Predictive Analytics",
    icon: Brain,
    type: "output",
    description: "Future trends and forecasts",
    position: { x: 80, y: 60 },
    color: "blue",
  },
  {
    id: 8,
    name: "Intelligent Actions",
    icon: Zap,
    type: "output",
    description: "Autonomous decisions",
    position: { x: 85, y: 80 },
    color: "yellow",
  },
]

const bauhaus = {
  blue: "rgb(0, 70, 140)",
  red: "rgb(225, 6, 0)",
  yellow: "rgb(255, 221, 0)",
}

export function BusinessFlowVisualization() {
  const [activeNodes, setActiveNodes] = useState<number[]>([])
  const [activeConnections, setActiveConnections] = useState<{ from: number; to: number }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select an input node
      const inputNode = nodes.filter((n) => n.type === "input")[Math.floor(Math.random() * 4)]
      // Randomly select an output node
      const outputNode = nodes.filter((n) => n.type === "output")[Math.floor(Math.random() * 4)]

      // Animate flow: input -> center -> output
      setActiveNodes([inputNode.id])
      setTimeout(() => {
        setActiveConnections([{ from: inputNode.id, to: -1 }]) // -1 represents center
      }, 300)

      setTimeout(() => {
        setActiveNodes([inputNode.id, outputNode.id])
        setActiveConnections([
          { from: inputNode.id, to: -1 },
          { from: -1, to: outputNode.id },
        ])
      }, 1500)

      // Reset after animation
      setTimeout(() => {
        setActiveNodes([])
        setActiveConnections([])
      }, 2500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[700px] rounded-xl border bg-background/50 p-12 backdrop-blur">
      {/* Central Nova Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-primary/40" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n-high-resolution-logo-black-transparent%20%281%29-Db3SdehP0JrcUcUHTF8q2djENu6ub0.png"
            alt="Nova Logo"
            width={64}
            height={64}
            className="dark:hidden"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n-high-resolution-logo-white-transparent%20%281%29-yFOLBYoxl6vM9zTl1C1LNZJ91eCzBs.png"
            alt="Nova Logo"
            width={64}
            height={64}
            className="hidden dark:block"
          />
        </div>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Create all possible connections */}
        {nodes.map((node) => {
          // Draw lines from each node to the center
          const x1 = `${node.position.x}%`
          const y1 = `${node.position.y}%`
          const x2 = "50%"
          const y2 = "50%"
          const isActive = activeNodes.includes(node.id)
          const connection = activeConnections.find((c) => c.from === node.id || c.to === node.id)

          return (
            <motion.line
              key={`line-${node.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={bauhaus[node.color as keyof typeof bauhaus]}
              strokeWidth="2"
              strokeDasharray="4,4"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: connection ? 0.8 : 0.1,
                strokeDashoffset: connection ? [0, -8] : 0,
              }}
              transition={{
                duration: 1,
                repeat: connection ? Number.POSITIVE_INFINITY : 0,
                ease: "linear",
              }}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const Icon = node.icon
        const isActive = activeNodes.includes(node.id)

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: "-50%",
              y: "-50%",
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-full border-2 bg-background transition-colors",
                isActive ? "border-primary" : "border-muted",
              )}
              style={{
                borderColor: isActive ? bauhaus[node.color as keyof typeof bauhaus] : undefined,
              }}
            >
              <Icon
                className={cn("h-6 w-6", isActive ? "text-primary" : "text-muted-foreground")}
                style={{
                  color: isActive ? bauhaus[node.color as keyof typeof bauhaus] : undefined,
                }}
              />

              {isActive && (
                <motion.div
                  className="absolute -inset-1 rounded-full border-2"
                  style={{
                    borderColor: bauhaus[node.color as keyof typeof bauhaus],
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0.2, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              )}
            </motion.div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center w-32 z-10">
              <div className="text-sm font-medium whitespace-nowrap">{node.name}</div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs whitespace-nowrap bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 mt-1"
                  style={{
                    color: bauhaus[node.color as keyof typeof bauhaus],
                  }}
                >
                  {node.description}
                </motion.div>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

