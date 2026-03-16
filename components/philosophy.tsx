"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Brain, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const philosophyPoints = [
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I believe in constantly expanding my knowledge base, exploring new tools, and adapting to modern paradigms.",
    icon: Brain,
  },
  {
    title: "Code as Craft",
    description: "Writing code isn't just about making things work; it's about making them readable, maintainable, and efficient for the long term.",
    icon: Sparkles,
  },
  {
    title: "Impact Driven",
    description: "Every line of code should ultimately serve the user. I focus on building solutions that matter and deliver real-world value.",
    icon: Rocket,
  },
]

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="philosophy" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Philosophy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The core principles that guide my approach to software development, problem-solving, and continuous growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                    <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
