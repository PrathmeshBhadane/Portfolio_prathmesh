"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const particles: { x: number; y: number; r: number; dx: number; dy: number; opacity: number }[] = []
    
    // Create stars/particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random(),
      })
    }

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      
      particles.forEach((p) => {
        // Update
        p.x += p.dx
        p.y += p.dy
        
        // Wrap
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }
    
    render()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ y }}
    >
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#050816]" />
      
      {/* Gradient Meshes */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#6366F1]/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#22D3EE]/10 blur-[150px]" />
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#A78BFA]/5 blur-[100px]" />
      
      {/* Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </motion.div>
  )
}
