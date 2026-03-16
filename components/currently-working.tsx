"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Hammer, Zap, LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const currentFocus = [
  {
    title: "Daily DSA Practice",
    description: "Solving problems consistently to build strong algorithmic thinking",
    icon: LineChart,
  },
  {
    title: "C++ Fundamentals Project",
    description: "Building a project to solidify core C++ concepts and memory management",
    icon: BookOpen,
  },
  {
    title: "FastAPI Backend System",
    description: "Developing a complete backend using FastAPI with proper architecture",
    icon: Zap,
  },
  {
    title: "Backend Design Concepts",
    description: "Learning patterns like clean architecture, SOLID principles, and API design",
    icon: Network,
  },
]

// Need to import Network from lucide-react separately to avoid redefining
import { Network } from "lucide-react"

export function CurrentlyWorking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="currently-working" className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-medium">
            <LineChart className="w-4 h-4" />
            <span>Always Growing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Currently Working On & Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my current focus areas. Here's what I'm currently building and the concepts I'm actively studying to improve my craft.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">

          {/* Left Column: Stacked items */}
          <div className="lg:col-span-6 space-y-4">
            {currentFocus.map((focus, index) => {
              const Icon = focus.icon
              return (
                <motion.div
                  key={focus.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border/50 hover:border-primary/50 transition-colors rounded-2xl p-4 flex items-center gap-4 group"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{focus.title}</h3>
                    <p className="text-sm text-muted-foreground">{focus.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 lg:sticky lg:top-24"
          >
            <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 relative overflow-hidden shadow-lg border-t-2 border-t-accent mt-4 lg:mt-0">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary/50" />

              <blockquote className="text-muted-foreground italic leading-relaxed mb-8 md:text-xl">
                "Any fool can write code that a computer can understand. <span className="text-primary font-medium not-italic">Good programmers write code that humans can understand.</span>"
                <span className="block mt-3 text-sm not-italic text-muted-foreground/60">— Martin Fowler</span>
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                  P
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Core Mindset</h4>
                  <p className="text-xs text-muted-foreground">Growth over perfection</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
