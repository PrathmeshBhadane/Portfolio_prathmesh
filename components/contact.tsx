"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Links */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-10 text-base md:text-lg leading-relaxed max-w-md">
              I'm currently open to internship and entry-level opportunities. If you'd like to discuss a project or just say hello, feel free to reach out.
            </p>

            <div className="space-y-4">
              <a href="mailto:your.email@example.com" className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/10 hover:border-primary/50 transition-colors">
                <div className="p-3 bg-secondary/50 text-foreground rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-xs text-muted-foreground">your.email@example.com</p>
                </div>
              </a>

              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/10 hover:border-primary/50 transition-colors">
                <div className="p-3 bg-secondary/50 text-foreground rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">GitHub</h4>
                  <p className="text-xs text-muted-foreground">github.com/yourusername</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border/10 hover:border-primary/50 transition-colors">
                <div className="p-3 bg-secondary/50 text-foreground rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">LinkedIn</h4>
                  <p className="text-xs text-muted-foreground">linkedin.com/in/yourusername</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden group">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:translate-x-10 group-hover:translate-y-10" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 blur-[80px] rounded-full pointer-events-none transition-transform duration-700 group-hover:-translate-x-10 group-hover:-translate-y-10" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                    <Send className="w-5 h-5" />
                  </div>
                  Send a Message
                </h3>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2 group/input">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground/80 transition-colors group-focus-within/input:text-primary pl-1">Your Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2 group/input">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground/80 transition-colors group-focus-within/input:text-primary pl-1">Your Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl h-12 shadow-sm" />
                  </div>
                  <div className="space-y-2 group/input">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80 transition-colors group-focus-within/input:text-primary pl-1">Message</label>
                    <Textarea id="message" placeholder="How can I help you?" rows={4} className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl resize-none shadow-sm" />
                  </div>

                  <Button className="w-full mt-6 font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/0 rounded-xl py-6 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden relative group/btn" size="lg">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
