"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Server,
  Database,
  Wrench,
  Clock
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "Python", "C", "HTML/CSS", "Javascript"],
    color: "pink",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["FastAPI", "FLASK", "Tailwind CSS", "REST APIs", "Django"],
    color: "green",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase"],
    color: "red",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "VS Code", "Postman", "Linux", " AWS ", " Kubernetes"],
    color: "yellow",
  },
  {
    title: "Core Concepts",
    icon: Clock,
    skills: ["DSA", "API Design", "DB Fundamentals", "System Design Basics"],
    color: "blue", // was fuchsia (magenta)
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg">
            Grouped by how I think, not by buzzwords
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon

            // Map the colors to specific Tailwind classes to ensure they are compiled correctly
            const colorMap: Record<string, { iconBgHover: string, iconTextHover: string, badgeHover: string, borderHover: string }> = {
              pink: {
                iconBgHover: "group-hover:bg-pink-500/20",
                iconTextHover: "group-hover:text-pink-500",
                badgeHover: "group-hover:bg-pink-500/10 group-hover:text-pink-700",
                borderHover: "hover:border-pink-500/50"
              },
              green: {
                iconBgHover: "group-hover:bg-green-500/20",
                iconTextHover: "group-hover:text-green-500",
                badgeHover: "group-hover:bg-green-500/10 group-hover:text-green-700",
                borderHover: "hover:border-green-500/50"
              },
              red: {
                iconBgHover: "group-hover:bg-red-500/20",
                iconTextHover: "group-hover:text-red-500",
                badgeHover: "group-hover:bg-red-500/10 group-hover:text-red-700",
                borderHover: "hover:border-red-500/50"
              },
              yellow: {
                iconBgHover: "group-hover:bg-yellow-500/20",
                iconTextHover: "group-hover:text-yellow-500",
                badgeHover: "group-hover:bg-yellow-500/10 group-hover:text-yellow-700",
                borderHover: "hover:border-yellow-500/50"
              },
              blue: {
                iconBgHover: "group-hover:bg-blue-500/20",
                iconTextHover: "group-hover:text-blue-500",
                badgeHover: "group-hover:bg-blue-500/10 group-hover:text-blue-700",
                borderHover: "hover:border-blue-500/50"
              }
            }

            const styles = colorMap[category.color]

            return (
              <motion.div key={category.title} variants={itemVariants} className="h-full">
                <div className={`h-full rounded-2xl bg-card border border-border/40 ${styles.borderHover} transition-all duration-300 p-6 flex flex-col items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden`}>
                  <div className={`p-3 rounded-lg bg-secondary/50 text-foreground group-hover:scale-110 ${styles.iconBgHover} ${styles.iconTextHover} transition-all`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-bold text-foreground text-base mt-2 transition-colors group-hover:text-foreground">{category.title}</h3>

                  <div className="flex flex-col gap-3 w-full mt-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className={`px-3 py-2 rounded text-sm text-muted-foreground/90 bg-muted/40 font-medium w-full text-left transition-colors group-hover:bg-secondary/30`}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
