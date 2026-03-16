"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Terminal, Database, Server, Code2, Coffee } from "lucide-react"
import { useState, useEffect } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("Initializing backend environment...")

  const loadingSteps = [
    { progress: 20, text: "Configuring Python virtual env...", icon: Terminal },
    { progress: 40, text: "Connecting to PostgreSQL database...", icon: Database },
    { progress: 60, text: "Deploying Django APIs...", icon: Server },
    { progress: 80, text: "Writing robust code...", icon: Code2 },
    { progress: 100, text: "Grabbing a coffee and ready to go!", icon: Coffee },
  ]

  useEffect(() => {
    let currentStep = 0
    
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress)
        setCurrentText(loadingSteps[currentStep].text)
        currentStep++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 1200)
      }
    }, 1200)

    return () => clearInterval(interval)
  }, [onComplete])

  const CurrentIcon = loadingSteps.find(s => s.progress === progress)?.icon || Terminal

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6"
      >
        <div className="w-full max-w-md">
          {/* Logo / Animation Area */}
          <div className="flex justify-center mb-12">
            <motion.div 
              className="relative w-24 h-24"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 border-2 border-primary border-dashed rounded-full" />
              <div className="absolute inset-2 border-2 border-accent border-dashed rounded-full" style={{ animationDirection: "reverse" }} />
              <div className="absolute inset-0 flex items-center justify-center bg-background rounded-full">
                <CurrentIcon className="w-8 h-8 text-primary" />
              </div>
            </motion.div>
          </div>

          {/* Terminal-like text display */}
          <motion.div 
            className="mb-6 font-mono text-sm text-primary h-6 flex items-center justify-center"
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-muted-foreground mr-2">&gt;</span>
            {currentText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 w-2 h-4 bg-primary inline-block"
            />
          </motion.div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className="mt-4 flex justify-between text-xs text-muted-foreground font-mono">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
