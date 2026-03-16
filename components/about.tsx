"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 pr-0 lg:pr-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How I Think About Engineering
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-snug">
              I don't just use tools — I try to understand <span className="text-primary font-medium">why</span> they work.
            </p>

            <div className="space-y-6 text-muted-foreground/90 leading-relaxed text-base md:text-lg">
              <p>
                When I work on a project, my first question isn't "what framework should I use?" It's "how should data flow through this system?"
              </p>
              <p>
                I'm drawn to backend development because that's where the interesting decisions happen — how to structure APIs, how to model data, how to handle errors gracefully. The frontend is important, but the backend is where systems either scale or break.
              </p>
              <p>
                Every day, I practice Data Structures & Algorithms. Not because I love leetcode, but because I've noticed it changes how I think about problems. A solution that seemed complex becomes obvious once you see the right structure.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Snapshot Card */}
            <div className="rounded-2xl bg-card border border-border/50 overflow-hidden relative shadow-lg">
              {/* Top Gradient Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary/50" />
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Snapshot</span>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-border/30 pb-4">
                    <span className="text-muted-foreground text-sm">Focus</span>
                    <span className="font-semibold text-foreground text-sm">Backend Development</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/30 pb-4">
                    <span className="text-muted-foreground text-sm">Daily</span>
                    <span className="font-semibold text-foreground text-sm">DSA Practice</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/30 pb-4">
                    <span className="text-muted-foreground text-sm">Projects</span>
                    <span className="font-semibold text-foreground text-sm">3 End-to-End</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Mindset</span>
                    <span className="font-semibold text-foreground text-sm">Always Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-8 relative overflow-hidden shadow-lg border-l-4 border-l-accent">
              <blockquote className="text-muted-foreground italic leading-relaxed mb-4 text-sm md:text-base">
                "The best engineers I know understand the system before they understand the syntax."
              </blockquote>
              <p className="text-xs text-muted-foreground/70 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-muted-foreground/50" />
                Personal observation
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
