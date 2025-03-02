"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface DemoExample {
  prompt: string
  response: string[]
  type: "analysis" | "report" | "summary"
}

const demoExamples: DemoExample[] = [
  {
    prompt: "Analyze Q4 2023 sales performance and provide recommendations",
    type: "analysis",
    response: [
      "📊 Sales Performance Analysis - Q4 2023",
      "",
      "Key Metrics:",
      "• Revenue: $12.8M (+28% YoY)",
      "• New Customers: 145 (+45%)",
      "• Customer Retention: 94%",
      "• Average Deal Size: $88k",
      "",
      "Top Performing Sectors:",
      "1. Enterprise Solutions (+52%)",
      "2. Financial Services (+38%)",
      "3. Healthcare Tech (+31%)",
      "",
      "Strategic Recommendations:",
      "• Expand Enterprise Solutions team",
      "• Increase APAC market presence",
      "• Launch new vertical in Healthcare",
    ],
  },
  {
    prompt: "Generate monthly financial report with key insights",
    type: "report",
    response: [
      "📈 Monthly Financial Overview - March 2024",
      "",
      "Performance Metrics:",
      "• Gross Revenue: $2.8M (+18% MoM)",
      "• Operating Expenses: $1.2M",
      "• Net Profit Margin: 32%",
      "• Cash Flow: +$850K",
      "",
      "Key Business Metrics:",
      "• Customer LTV: $45,000",
      "• MRR: $950,000",
      "• CAC Payback: 8 months",
      "",
      "Growth Indicators:",
      "• Pipeline Value: $15M",
      "• Sales Velocity: +25%",
    ],
  },
  {
    prompt: "Summarize customer feedback trends from last quarter",
    type: "summary",
    response: [
      "📱 Customer Feedback Analysis - Q4",
      "",
      "Sentiment Overview:",
      "• Overall Satisfaction: 4.8/5.0",
      "• NPS Score: 72 (+5 pts)",
      "",
      "Top Praised Features:",
      "• AI Accuracy (92% positive)",
      "• Integration Ease (88% positive)",
      "• Customer Support (95% positive)",
      "",
      "Improvement Areas:",
      "• Advanced Reporting",
      "• API Documentation",
      "• Mobile Experience",
    ],
  },
]

export function LLMDemo() {
  const [currentExample, setCurrentExample] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const responseRef = useRef<HTMLDivElement>(null)

  const animateResponse = useCallback(async () => {
    setIsTyping(true)
    setDisplayedLines([])

    for (const line of demoExamples[currentExample].response) {
      await new Promise((resolve) => setTimeout(resolve, 50))
      setDisplayedLines((prev) => [...prev, line])
      if (responseRef.current) {
        responseRef.current.scrollTop = responseRef.current.scrollHeight
      }
    }

    setIsTyping(false)

    // Wait before moving to next example
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setCurrentExample((prev) => (prev + 1) % demoExamples.length)
  }, [currentExample])

  useEffect(() => {
    animateResponse()
  }, [animateResponse])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-xl border bg-background/50 backdrop-blur p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-medium">Nova AI Assistant</h3>
        </div>

        <div className="relative">
          <div className="w-full rounded-lg border bg-muted px-4 py-3 pr-12 text-sm">
            {demoExamples[currentExample].prompt}
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-4"
          >
            <div
              ref={responseRef}
              className="max-h-[300px] overflow-auto rounded-lg border bg-muted/50 p-4 font-mono text-sm"
            >
              {displayedLines.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "whitespace-pre-wrap",
                    line.startsWith("•") && "text-primary",
                    line.match(/^[0-9]\./) && "text-primary",
                    line.match(/^[A-Za-z]+:/) && "font-medium",
                  )}
                >
                  {line}
                </div>
              ))}
              {isTyping && (
                <motion.div
                  className="inline-block h-4 w-2 bg-primary"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

