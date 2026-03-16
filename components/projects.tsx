"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Django Recipe CRUD Application",
    description: "A full-stack web application built with Django that allows users to create, read, update, and delete recipes with authentication features.",
    image: "/placeholder-project.jpg",
    tags: ["Django", "Python", "PostgreSQL", "Authentication"],
    github: "#",
    demo: "#",
  },
  {
    title: "Flask ToDo Application",
    description: "A simple productivity application built using Flask where users can manage tasks with a clean and structured interface.",
    image: "/placeholder-project.jpg",
    tags: ["Flask", "Python", "SQLite", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive developer portfolio to showcase projects, skills, and blog posts with modern design and animations.",
    image: "/placeholder-project.jpg",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my experience with Python, Django, and web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-card border-border hover:border-primary/40 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                <div className="aspect-video bg-muted relative overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/20 transition-transform group-hover:scale-110 duration-500">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <Button asChild size="sm" variant="outline" className="rounded-full border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors group/btn">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 group/btn">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
