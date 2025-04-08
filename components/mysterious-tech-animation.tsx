"use client"

import { useEffect, useRef } from "react"

export function MysteriousTechAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Animation properties
    const particleCount = 150
    const connectionDistance = 150
    const particles: Particle[] = []
    const baseSpeed = 0.3
    
    // Mysterious tech blue color palette - using primary blue and gradient colors
    const colors = [
      "rgba(37, 99, 235, 0.9)",    // Primary blue (--primary-rgb)
      "rgba(30, 64, 175, 0.9)",    // Darker blue (blue-800)
      "rgba(59, 130, 246, 0.9)",   // Lighter blue (blue-500) 
      "rgba(96, 165, 250, 0.9)",   // Even lighter blue (blue-400)
    ]
    
    // Particle class
    class Particle {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
      alpha: number
      targetAlpha: number
      
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.radius = Math.random() * 2 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        
        // Create directional movement
        this.velocity = {
          x: (Math.random() - 0.5) * baseSpeed,
          y: (Math.random() - 0.5) * baseSpeed
        }
        
        // For fade in effect
        this.alpha = 0
        this.targetAlpha = 0.7 + Math.random() * 0.3
      }
      
      update() {
        // Fade in effect
        if (this.alpha < this.targetAlpha) {
          this.alpha += 0.005
        }
        
        // Move the particle
        this.x += this.velocity.x
        this.y += this.velocity.y
        
        // Bounce off edges
        if (this.x < 0 || this.x > width) {
          this.velocity.x = -this.velocity.x
        }
        
        if (this.y < 0 || this.y > height) {
          this.velocity.y = -this.velocity.y
        }
      }
      
      draw() {
        if (!ctx) return
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        
        // Apply the color with current alpha
        const colorParts = this.color.replace('rgba(', '').replace(')', '').split(',')
        const r = colorParts[0].trim()
        const g = colorParts[1].trim()
        const b = colorParts[2].trim()
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`
        
        ctx.fill()
      }
    }
    
    // Function to draw connections between nearby particles
    function drawConnections() {
      if (!ctx) return
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < connectionDistance) {
            // Calculate line opacity based on distance
            const opacity = (1 - (distance / connectionDistance)) * 0.7 * 
                          Math.min(particles[i].alpha, particles[j].alpha)
            
            // Draw the connection - using primary blue
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
            
            // Add glow effect for connections
            if (distance < connectionDistance * 0.5 && Math.random() > 0.97) {
              ctx.beginPath()
              ctx.arc((particles[i].x + particles[j].x) / 2, (particles[i].y + particles[j].y) / 2, 
                      Math.random() * 1 + 0.5, 0, Math.PI * 2)
              ctx.fillStyle = "rgba(37, 99, 235, 0.8)"
              ctx.fill()
            }
          }
        }
      }
    }
    
    // Mysterious background effect - subtle grid pattern
    function drawGrid() {
      if (!ctx) return
      
      const gridSize = 40
      ctx.strokeStyle = 'rgba(0, 50, 100, 0.15)'
      ctx.lineWidth = 0.5
      
      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
    }
    
    // Digital rain effect with more vibrant colors
    const digitRows: DigitRow[] = []
    
    class DigitRow {
      x: number
      y: number
      speed: number
      length: number
      characters: string[]
      
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * -100
        this.speed = Math.random() * 5 + 2
        this.length = Math.floor(Math.random() * 15) + 5
        this.characters = []
        
        for (let i = 0; i < this.length; i++) {
          const char = Math.random() > 0.5 
            ? String.fromCharCode(Math.floor(Math.random() * 10) + 48) // Numbers
            : String.fromCharCode(Math.floor(Math.random() * 26) + 65) // Letters
          this.characters.push(char)
        }
      }
      
      update() {
        this.y += this.speed
        
        // Reset if it goes off screen
        if (this.y > height + 100) {
          this.y = Math.random() * -100
          this.x = Math.random() * width
        }
      }
      
      draw() {
        if (!ctx) return
        
        for (let i = 0; i < this.length; i++) {
          // The leading character is brightest - more vibrant blue
          const alpha = i === 0 ? 1.0 : 0.2 + ((this.length - i) / this.length) * 0.4
          ctx.fillStyle = i === 0 ? 
            `rgba(37, 99, 235, ${alpha})` : 
            `rgba(59, 130, 246, ${alpha})`
          ctx.font = '14px monospace'
          ctx.fillText(
            this.characters[i],
            this.x,
            this.y - i * 15
          )
          
          // Randomly change characters
          if (Math.random() > 0.95) {
            const char = Math.random() > 0.5 
              ? String.fromCharCode(Math.floor(Math.random() * 10) + 48)
              : String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            this.characters[i] = char
          }
        }
      }
    }

    // Initialize particles
    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }
    
    // Initialize digital rain
    function initDigitalRain() {
      for (let i = 0; i < 25; i++) {
        digitRows.push(new DigitRow())
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx) return
      
      // Clear the canvas
      ctx.clearRect(0, 0, width, height)
      
      // Draw background
      ctx.fillStyle = "rgba(0, 0, 0, 1)"
      ctx.fillRect(0, 0, width, height)
      
      // Draw grid
      drawGrid()
      
      // Update and draw digital rain
      for (const row of digitRows) {
        row.update()
        row.draw()
      }
      
      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      
      // Draw connections
      drawConnections()
      
      // Add a subtle blue overlay glow in the center - matching primary blue
      const radialGradient = ctx.createRadialGradient(
        width/2, height/2, 0,
        width/2, height/2, Math.max(width, height)/2
      )
      radialGradient.addColorStop(0, "rgba(37, 99, 235, 0.4)")
      radialGradient.addColorStop(0.5, "rgba(30, 64, 175, 0.2)")
      radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = radialGradient
      ctx.fillRect(0, 0, width, height)
      
      // Add occasional light flashes for more dynamic effect
      if (Math.random() > 0.98) {
        ctx.fillStyle = "rgba(37, 99, 235, 0.03)"
        ctx.fillRect(0, 0, width, height)
      }
      
      // Continue animation
      requestAnimationFrame(animate)
    }
    
    // Handle window resize
    function handleResize() {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    
    // Add event listener for resize
    window.addEventListener("resize", handleResize)
    
    // Initialize and start animation
    initParticles()
    initDigitalRain()
    animate()
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full bg-black" />
} 