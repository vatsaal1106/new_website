"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Bauhaus-inspired shapes
    const shapes: Shape[] = []
    const shapeCount = 12

    // Bauhaus color palette
    const colors = [
      "rgba(255, 0, 0, 0.15)", // Red
      "rgba(0, 0, 255, 0.15)", // Blue
      "rgba(255, 204, 0, 0.15)", // Yellow
      "rgba(0, 0, 0, 0.1)", // Black
    ]

    abstract class Shape {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 150 + 50
        this.speedX = Math.random() * 0.2 - 0.1
        this.speedY = Math.random() * 0.2 - 0.1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = Math.random() * 0.01 - 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = width + this.size
        if (this.y > height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = height + this.size
      }

      draw() {
        if (!ctx) return
      }
    }

    class Rectangle extends Shape {
      draw() {
        super.draw()
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        ctx.restore()
      }
    }

    class Circle extends Shape {
      draw() {
        super.draw()
        if (!ctx) return

        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class Triangle extends Shape {
      draw() {
        super.draw()
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(this.size / 2, this.size / 2)
        ctx.lineTo(-this.size / 2, this.size / 2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }
    }

    function init() {
      for (let i = 0; i < shapeCount; i++) {
        const shapeType = Math.floor(Math.random() * 3)
        if (shapeType === 0) shapes.push(new Rectangle())
        else if (shapeType === 1) shapes.push(new Circle())
        else shapes.push(new Triangle())
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < shapes.length; i++) {
        shapes[i].update()
        shapes[i].draw()
      }

      requestAnimationFrame(animate)
    }

    function handleResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    init()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-50 dark:opacity-30" />
}

