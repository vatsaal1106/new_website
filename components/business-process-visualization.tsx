"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { FileText, Brain, Database, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

interface ProcessStep {
  id: number
  icon: typeof FileText
  label: string
  description: string
  color: string
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: FileText,
    label: "Document Input",
    description: "Business documents processed",
    color: "blue",
  },
  {
    id: 2,
    icon: Brain,
    label: "AI Analysis",
    description: "Deep learning extraction",
    color: "purple",
  },
  {
    id: 3,
    icon: Database,
    label: "Data Processing",
    description: "Structure and validate",
    color: "amber",
  },
  {
    id: 4,
    icon: CheckCircle2,
    label: "Automation",
    description: "Workflow execution",
    color: "green",
  },
]

export function BusinessProcessVisualization() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setProgress(0)
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100))
    }, 30)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="relative w-full rounded-xl border bg-background/50 p-8 backdrop-blur">
      {/* Progress Line */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-[10%]">
        <div className="h-0.5 w-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            animate={{
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>

      {/* Process Steps */}
      <div className="relative z-10 flex justify-between px-4">
        {processSteps.map((step, index) => {
          const Icon = step.icon
          const isActive = index === activeStep
          const isPast = index < activeStep

          return (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                className={cn(
                  "relative flex h-16 w-16 items-center justify-center rounded-full border-2 bg-background transition-colors",
                  isActive && "border-primary",
                  isPast && "border-primary/50",
                  !isActive && !isPast && "border-muted",
                )}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  transition: { duration: 0.3 },
                }}
              >
                <Icon
                  className={cn(
                    "h-6 w-6 transition-colors",
                    isActive && "text-primary",
                    isPast && "text-primary/50",
                    !isActive && !isPast && "text-muted-foreground",
                  )}
                />

                {/* Ripple effect for active step */}
                {isActive && (
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-primary"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}

                {/* Connection arrow */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-16 top-1/2 -translate-y-1/2">
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isActive || isPast ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                  </div>
                )}
              </motion.div>

              {/* Step Label and Description */}
              <motion.div
                className="mt-4 text-center"
                animate={{
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <div className="font-medium">{step.label}</div>
                <div className="text-sm text-muted-foreground">{step.description}</div>
              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Active Step Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border bg-background px-4 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="text-sm">{processSteps[activeStep].description}</span>
      </motion.div>
    </div>
  )
}

