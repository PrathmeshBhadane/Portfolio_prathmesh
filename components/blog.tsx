"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Learning Django for Backend Development",
    description: "A comprehensive guide to getting started with Django, understanding its architecture, and building your first web application with Python.",
    date: "Mar 10, 2026",
    category: "Django",
    href: "#",
  },
  {
    title: "Building REST APIs with Python",
    description: "Learn how to design and implement RESTful APIs using Django REST Framework, including authentication, serialization, and best practices.",
    date: "Mar 5, 2026",
    category: "Python",
    href: "#",
  },
  {
    title: "Getting Started with Cloud Services",
    description: "An introduction to AWS cloud services for developers, covering deployment, storage, and scaling your web applications.",
    date: "Feb 28, 2026",
    category: "Cloud",
    href: "#",
  },
  {
    title: "My Journey in Software Development",
    description: "Reflections on my path as a developer, the challenges faced, lessons learned, and tips for aspiring programmers starting their career.",
    date: "Feb 20, 2026",
    category: "Career",
    href: "#",
  },
]

export function Blog() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about Python, Django, and software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.title} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  <a
                    href={post.href}
                    className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
