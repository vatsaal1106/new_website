"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Users, Building2, Package, FileText, Mail, Calendar, Bot } from "lucide-react"
import Image from "next/image"

interface Domain {
  id: number
  name: string
  icon: typeof Users
  inputs: string[]
  outputs: string[]
  color: string
}

const domains: Domain[] = [
  {
    id: 1,
    name: "Sales",
    icon: Building2,
    inputs: ["Leads", "Opportunities", "Pipeline"],
    outputs: ["Revenue Forecast", "Deal Analytics"],
    color: "blue",
  },
  {
    id: 2,
    name: "HR",
    icon: Users,
    inputs: ["Applications", "Reviews", "Training"],
    outputs: ["Talent Insights", "Performance Analysis"],
    color: "purple",
  },
  {
    id: 3,
    name: "Inventory",
    icon: Package,
    inputs: ["Stock Levels", "Orders", "Suppliers"],
    outputs: ["Demand Prediction", "Reorder Points"],
    color: "amber",
  },
  {
    id: 4,
    name: "Documents",
    icon: FileText,
    inputs: ["Contracts", "Reports", "Policies"],
    outputs: ["Summary", "Action Items"],
    color: "green",
  },
  {
    id: 5,
    name: "Communication",
    icon: Mail,
    inputs: ["Emails", "Messages", "Tickets"],
    outputs: ["Response Draft", "Priority Actions"],
    color: "red",
  },
  {
    id: 6,
    name: "Calendar",
    icon: Calendar,
    inputs: ["Meetings", "Events", "Tasks"],
    outputs: ["Schedule Optimization", "Time Analytics"],
    color: "indigo",
  },
]

export function BusinessDomainVisualization() {
  const [activeDomain, setActiveDomain] = useState<number | null>(null)
  const [processingStage, setProcessingStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDomain((prev) => {
        if (prev === null) return 0
        return (prev + 1) % domains.length
      })
      setProcessingStage(0)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeDomain !== null) {
      const stageInterval = setInterval(() => {
        setProcessingStage((prev) => (prev + 1) % 3)
      }, 1000)

      return () => clearInterval(stageInterval)
    }
  }, [activeDomain])

  return (
    <div className="relative w-full h-[600px] rounded-xl border bg-background/50 p-8 backdrop-blur">
      {/* Central Nova Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative w-32 h-32 rounded-full border-2 border-primary/20 flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.2, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <Image
            src="/n-high-resolution-logo-black-transparent%20(1).png"
            alt="Nova Logo"
            width={48}
            height={48}
            className="dark:hidden"
          />
          <Image
            src="/n-high-resolution-logo-white-transparent%20(1).png"
            alt="Nova Logo"
            width={48}
            height={48}
            className="hidden dark:block"
          />
        </motion.div>
      </div>

      {/* Domain Nodes */}
      {domains.map((domain, index) => {
        const angle = (index * (360 / domains.length) * Math.PI) / 180
        const radius = 200 // Distance from center
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = activeDomain === index

        const Icon = domain.icon

        return (
          <motion.div
            key={domain.id}
            className="absolute"
            style={{
              left: "calc(50% + " + x + "px)",
              top: "calc(50% + " + y + "px)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: "-50%",
              y: "-50%",
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className={cn(
                "relative flex h-16 w-16 items-center justify-center rounded-full border-2 bg-background",
                isActive ? "border-primary" : "border-muted",
              )}
              animate={{
                scale: isActive ? 1.1 : 1,
                transition: { duration: 0.3 },
              }}
            >
              <Icon className={cn("h-6 w-6", isActive ? "text-primary" : "text-muted-foreground")} />

              {isActive && (
                <>
                  {/* Input Flow */}
                  <motion.div
                    className="absolute left-1/2 top-1/2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <svg width="200" height="200" viewBox="0 0 200 200" className="absolute -left-[100px] -top-[100px]">
                      <motion.path
                        d={`M ${100} ${100} L ${0} ${0}`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  </motion.div>

                  {/* Processing Particles */}
                  <AnimatePresence>
                    {processingStage === 1 && (
                      <motion.div
                        className="absolute -inset-1 rounded-full border-2 border-primary"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        exit={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>

            {/* Domain Label */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center">
              <div className="text-sm font-medium">{domain.name}</div>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-primary"
                >
                  {processingStage === 0 && "Analyzing Input..."}
                  {processingStage === 1 && "Processing..."}
                  {processingStage === 2 && "Generating Output..."}
                </motion.div>
              )}
            </div>
          </motion.div>
        )
      })}

      {/* Processing Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <motion.div
          className="flex items-center gap-2 rounded-full border bg-background px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Bot className="h-4 w-4 text-primary" />
          <span className="text-sm">
            {activeDomain !== null ? `Processing ${domains[activeDomain].name} Data` : "Initializing..."}
          </span>
        </motion.div>
      </div>
    </div>
  )
}

