"use client"

import type React from "react"

import { useState } from "react"
import { Terminal } from "lucide-react"

export function LiveDemoTerminal() {
  const [command, setCommand] = useState("")
  const [output, setOutput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value)
  }

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim() !== "") {
      setIsProcessing(true)
      setOutput("Processing...")

      // Simulate a processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate different outputs based on the command
      let newOutput = ""
      if (command.startsWith("analyze")) {
        newOutput = "Data analysis complete. Insights generated."
      } else if (command.startsWith("report")) {
        newOutput = "Report generated successfully."
      } else {
        newOutput = "Command not recognized."
      }

      setOutput(newOutput)
      setCommand("")
      setIsProcessing(false)
    }
  }

  return (
    <div className="rounded-lg border bg-muted/50 p-4">
      <div className="flex items-center space-x-2">
        <Terminal className="h-4 w-4" />
        <h3 className="text-sm font-medium">Live Terminal</h3>
      </div>
      <div className="mt-2 rounded-md bg-background p-2 font-mono text-xs">
        {output || "Enter a command to see the output."}
      </div>
      <input
        type="text"
        placeholder="Type a command..."
        value={command}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={isProcessing}
        className="mt-2 w-full rounded-md border border-input bg-background px-2 py-1 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
}

