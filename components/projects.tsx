"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Terminal, Database, Layout, Code2, ChevronRight, CheckCircle2, AlertTriangle, Cpu, Server } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "ai-platform",
    title: "AI Microservices Platform",
    subtitle: "Full-stack Developer Hub & API Gateway",
    icon: Server, 
    description: "A monolithic ecosystem featuring a highly optimized Python AI API backend cluster and a Next.js Developer Portal for provisioning API keys.",
    tags: ["Python", "FastAPI", "Next.js", "Docker", "Redis", "PostgreSQL"],
    github: "#",
    demo: "#",
    details: {
      problem: "Needed a centralized developer hub to securely provide isolated API keys, manage rate limits natively, and run generative AI inference jobs asynchronously.",
      architecture: "Python FastAPI microservices clustered behind an Nginx API Gateway. Orchestrated via Docker Compose with Redis for stateless rate limiting and RabbitMQ for distributed message queues. Next.js 15 for the frontend dashboard.",
      features: [
        "Service-Scoped API Keys",
        "Real-Time Bandwidth Analytics",
        "Interactive Documentation (Auto cURL)",
        "Asynchronous ML Jobs via RabbitMQ"
      ],
      tradeoffs: "Centralizing authentication at a gateway using Redis eliminates redundant database queries improving load capacity, but coordinating isolated services via Docker introduces baseline infrastructure complexity."
    }
}
,
  {
    id: "django-recipe",
    title: "Django Recipe CRUD",
    subtitle: "Full-stack recipe management system",
    icon: Database,
    description: "A full-stack web application built with Django that allows users to create, read, update, and delete recipes with authentication features.",
    tags: ["Django", "Python", "PostgreSQL", "Auth"],
    github: "#",
    demo: "#",
    details: {
      problem: "Users needed a centralized platform to store and manage their personal recipes securely.",
      architecture: "Monolithic Django application with a PostgreSQL database, utilizing Django templates for the frontend.",
      features: [
        "User Authentication & Authorization",
        "CRUD Operations for Recipes",
        "Image Uploads",
        "Search and Filtering"
      ],
      tradeoffs: "Chose Server-Side Rendering (SSR) for SEO benefits, though it slightly limits dynamic client-side interactions."
    }
  },
  {
    id: "flask-todo",
    title: "Flask ToDo App",
    subtitle: "Simple productivity application",
    icon: Layout,
    description: "A simple productivity application built using Flask where users can manage tasks with a clean and structured interface.",
    tags: ["Flask", "Python", "SQLite", "REST API"],
    github: "#",
    demo: "#",
    details: {
      problem: "A lightweight task manager was needed without the complexity of enterprise tools.",
      architecture: "Flask lightweight backend exposing RESTful APIs with SQLite for fast, local storage.",
      features: [
        "Task Creation and Deletion",
        "Status Toggling",
        "REST API Endpoints",
        "Responsive Interface"
      ],
      tradeoffs: "Used SQLite for quick setup, which is not suitable for large-scale distributed deployments."
    }
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle: "Responsive developer portfolio",
    icon: Code2,
    description: "A responsive developer portfolio to showcase projects, skills, and blog posts with modern design and animations.",
    tags: ["Next.js", "TailwindCSS", "Framer", "TypeScript"],
    github: "#",
    demo: "#",
    details: {
      problem: "Needed a digital footprint to effectively showcase skills, projects, and a unique design aesthetic.",
      architecture: "Next.js App Router for static site generation, styled with TailwindCSS and animated via Framer Motion.",
      features: [
        "Deep Space Dark Theme",
        "Glassmorphism UI",
        "Scroll Animations",
        "Developer Dashboard Mockup"
      ],
      tradeoffs: "Opted for complex client-side animations which requires careful performance optimization."
    }
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section id="projects" className="py-24 relative z-10">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Engineering <span className="text-primary">Console</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive developer dashboard showcasing my technical projects, architecture decisions, and code details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 h-auto lg:h-[650px]">
          {/* Left Sidebar - Project List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {projects.map((project, idx) => {
              const isActive = activeProject.id === project.id
              const Icon = project.icon
              return (
                <motion.button
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveProject(project)}
                  className={`w-full text-left p-4 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                    isActive 
                      ? "bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]" 
                      : "bg-card/50 backdrop-blur-md border-border hover:bg-card hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${isActive ? "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(99,102,241,0.6)]" : "bg-secondary text-muted-foreground group-hover:text-primary"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-semibold transition-colors ${isActive ? "text-primary drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" : "text-foreground"}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{project.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? "text-primary translate-x-1" : "text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2"}`} />
                </motion.button>
              )
            })}
          </div>

          {/* Right Area - Detailed View */}
          <Card className="lg:col-span-8 bg-card/40 backdrop-blur-xl border-border/50 shadow-2xl overflow-hidden relative flex flex-col">
            {/* Window Controls Mockup */}
            <div className="h-12 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex items-center text-xs text-muted-foreground font-mono">
                <Terminal className="w-3 h-3 mr-2" />
                ~/projects/{activeProject.id}.md
              </div>
            </div>

            <CardContent className="p-0 flex-1 relative overflow-y-auto">
              {/* Custom scrollbar styling wrapper if needed, but native scrollbar suffices or we define in CSS */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                  className="p-6 md:p-8 space-y-8"
                >
                  {/* Header */}
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-3">{activeProject.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{activeProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button asChild size="sm" className="bg-primary/90 text-primary-foreground hover:bg-primary shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all">
                        <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all">
                        <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Source Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Architecture */}
                    <div className="space-y-3">
                      <h4 className="flex items-center text-accent font-semibold text-lg">
                        <Cpu className="w-5 h-5 mr-2" /> Architecture Flow
                      </h4>
                      <div className="text-muted-foreground text-sm leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5 shadow-inner">
                        {activeProject.details.architecture}
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="space-y-3">
                      <h4 className="flex items-center text-foreground font-semibold text-lg drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                        <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" /> The Problem
                      </h4>
                      <div className="text-muted-foreground text-sm leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5 shadow-inner">
                        {activeProject.details.problem}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="flex items-center text-foreground font-semibold text-lg mb-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" /> Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {activeProject.details.features.map(feature => (
                        <li key={feature} className="flex items-start text-sm text-foreground/80 bg-secondary/30 p-3 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shadow-[0_0_5px_rgba(99,102,241,0.8)] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trade-offs */}
                  <div className="bg-highlight/10 border border-highlight/20 p-5 rounded-xl shadow-[0_0_20px_rgba(167,139,250,0.05)]">
                    <h4 className="text-highlight font-semibold mb-2 flex items-center drop-shadow-[0_0_5px_rgba(167,139,250,0.5)]">
                      Trade-offs & Decisions
                    </h4>
                    <p className="text-sm text-highlight/80">
                      {activeProject.details.tradeoffs}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
