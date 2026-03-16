"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  <span className="text-8xl font-bold text-muted-foreground/20">PB</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                A Developer Who Builds Scalable Applications
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a developer focused on building web applications using Python and Django. 
                I have experience creating REST APIs, backend systems, and working with cloud services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I enjoy building scalable applications, learning new technologies, and working 
                on real-world projects that improve problem-solving and development skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to create robust backend solutions that power modern web applications 
                while continuously expanding my knowledge in cloud technologies and API development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
