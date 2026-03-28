"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  BrainCircuit,
  MessageSquareShare,
  Users,
  Clock,
  Target,
  Lightbulb,
  Repeat,
  TrendingUp
} from "lucide-react"

const softSkills = [
  {
    title: "Problem Solving",
    icon: BrainCircuit,
    description: "Breaking down complex problems into manageable components and finding efficient solutions through systematic analysis.",
    tags: ["DSA practice", "Debugging", "Architecture decisions"],
    color: "blue"
  },
  {
    title: "Communication",
    icon: MessageSquareShare,
    description: "Clearly articulating technical concepts to both technical and non-technical stakeholders, written and verbal.",
    tags: ["Technical writing", "Code reviews", "Documentation"],
    color: "green"
  },
  {
    title: "Team Collaboration",
    icon: Users,
    description: "Working effectively in team environments, contributing to group discussions, and supporting teammates.",
    tags: ["Pair programming", "Group projects", "Open source"],
    color: "yellow"
  },
  {
    title: "Time Management",
    icon: Clock,
    description: "Prioritizing tasks effectively, meeting deadlines, and maintaining consistent productivity across multiple projects.",
    tags: ["Daily DSA routine", "Project milestones", "Learning schedule"],
    color: "pink"
  },
  {
    title: "Attention to Detail",
    icon: Target,
    description: "Ensuring code quality, catching edge cases, and maintaining high standards in all deliverables.",
    tags: ["Code review", "Testing", "Documentation accuracy"],
    color: "red"
  },
  {
    title: "Continuous Learning",
    icon: Lightbulb,
    description: "Staying updated with industry trends, learning new technologies, and constantly improving skills.",
    tags: ["Daily practice", "Online courses", "Tech blogs"],
    color: "highlight" // custom for purple/highlight
  },
  {
    title: "Adaptability",
    icon: Repeat,
    description: "Quickly adjusting to new technologies, methodologies, and changing project requirements.",
    tags: ["New frameworks", "Different tech stacks", "Agile sprints"],
    color: "blue" // re-using blue
  },
  {
    title: "Growth Mindset",
    icon: TrendingUp,
    description: "Embracing challenges, learning from feedback, and viewing failures as opportunities for growth.",
    tags: ["Accepting feedback", "Failed attempts", "Iterative improvement"],
    color: "pink" // re-using pink
  }
]

export function ProfessionalSkills() {
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
    <section id="professional-skills" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            The foundation of effectively delivering software
          </p>
        </motion.div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start"
        >
          {softSkills.map((skill) => {
            const Icon = skill.icon
            
            const colorMap: Record<string, { iconText: string, borderHover: string, cardShadowHover: string }> = {
              pink: {
                iconText: "text-pink-500",
                borderHover: "group-hover:border-pink-500/60",
                cardShadowHover: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
              },
              green: {
                iconText: "text-green-500",
                borderHover: "group-hover:border-green-500/60",
                cardShadowHover: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]"
              },
              red: {
                iconText: "text-red-500",
                borderHover: "group-hover:border-red-500/60",
                cardShadowHover: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
              },
              yellow: {
                iconText: "text-yellow-500",
                borderHover: "group-hover:border-yellow-500/60",
                cardShadowHover: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
              },
              blue: {
                iconText: "text-blue-500",
                borderHover: "group-hover:border-blue-500/60",
                cardShadowHover: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              },
              highlight: {
                iconText: "text-[#A78BFA]",
                borderHover: "group-hover:border-[#A78BFA]/60",
                cardShadowHover: "hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]"
              }
            }

            const styles = colorMap[skill.color]

            return (
              <motion.div key={skill.title} variants={itemVariants} className={`relative group min-h-[22rem] rounded-2xl transition-all duration-500 hover:-translate-y-2 ${styles.cardShadowHover}`}>
                {/* Inner Card */}
                <div className={`absolute inset-0 rounded-2xl bg-card/40 backdrop-blur-xl border border-white/10 ${styles.borderHover} p-6 flex flex-col justify-between overflow-hidden z-10 transition-colors duration-500`}>
                  
                  <div className="flex flex-col items-start">
                    <div className={`p-3 rounded-xl bg-black/20 border border-white/5 mb-5 group-hover:scale-110 transition-transform ${styles.iconText}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="font-bold text-foreground text-lg mb-3 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                      {skill.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full text-xs text-foreground/70 bg-white/5 border border-white/10 transition-colors group-hover:bg-white/10">
                        {tag}
                      </span>
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
