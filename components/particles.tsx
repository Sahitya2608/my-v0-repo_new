"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export const Particles = ({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<any[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = []
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)
    }
  }

  const circleParams = () => {
    const colors = ["rgba(173, 216, 230, 0.3)", "rgba(135, 206, 235, 0.2)", "rgba(218, 165, 32, 0.2)"]
    const baseRadius = Math.random() * 2 + 1

    return {
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h,
      dx: Math.random() * 1 - 0.5,
      dy: Math.random() * 1 - 0.5,
      radius: baseRadius,
      originalRadius: baseRadius,
      color: colors[Math.floor(Math.random() * colors.length)],
    }
  }

  const drawParticles = () => {
    circles.current = []
    if (context.current) {
      for (let i = 0; i < quantity; i++) {
        circles.current.push(circleParams())
      }
    }
  }

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      circles.current.forEach((circle, i) => {
        // Draw the circle
        context.current!.beginPath()
        context.current!.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        context.current!.fillStyle = circle.color
        context.current!.fill()
        context.current!.closePath()

        // Update position
        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce off edges
        if (circle.x + circle.radius > canvasSize.current.w || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx
        }
        if (circle.y + circle.radius > canvasSize.current.h || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy
        }

        // Connect nearby particles
        for (let j = i + 1; j < circles.current.length; j++) {
          const circle2 = circles.current[j]
          const dx = circle.x - circle2.x
          const dy = circle.y - circle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            context.current!.beginPath()
            context.current!.strokeStyle = `rgba(173, 216, 230, ${0.2 * (1 - distance / 100)})`
            context.current!.lineWidth = 0.5
            context.current!.moveTo(circle.x, circle.y)
            context.current!.lineTo(circle2.x, circle2.y)
            context.current!.stroke()
            context.current!.closePath()
          }
        }
      })
    }
    requestAnimationFrame(animate)
  }

  return (
    <div ref={canvasContainerRef} className={cn("fixed inset-0", className)}>
      <canvas ref={canvasRef} />
    </div>
  )
}
