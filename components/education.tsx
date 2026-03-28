"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const educations = [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Technology Engineering",
      institution: "SKN Sinhgad Institute of Technology and Science",
      date: "2024 - 2027",
      location: "Lonavala, India",
      tag: "CGPA: 8.45/10 - Currently in 3rd year",
      bullets: [
        "Specialized in Data Structures & Algorithms",
        "Coursework: Operating Systems, DBMS, Computer Networks, System Design",
        "Participated in multiple hackathons"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic College",
      date: "2021 - 2024",
      location: "Dhule, India",
      tag: "Percentage: 83.89%",
      bullets: [
        "Participated in internal techathons and hackathons",
        "Member of Technical Club - Hosted multiple events"
      ]
    }
  ]

  return (
    <section id="education" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className={`md:pl-10 pl-6 relative group ${index !== educations.length - 1 ? "pb-12" : ""}`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-10 h-10 bg-card rounded-full -left-[1.3rem] top-0 border-2 border-accent/40 flex items-center justify-center p-2 group-hover:border-accent transition-colors shadow-lg z-10">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>

              {/* Education Card */}
              <div className="rounded-2xl bg-card/40 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all p-6 md:p-8 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden shadow-lg group/card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 leading-snug">
                      {edu.degree}
                    </h3>
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors font-medium text-lg">
                      {edu.institution}
                    </a>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground bg-white/5 border border-white/5 py-2 px-4 rounded-xl backdrop-blur-sm self-start shrink-0">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      {edu.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-6 inline-block px-3 py-1 mt-2 text-sm font-medium text-green-400 border border-green-500/30 rounded-full bg-green-500/10">
                  {edu.tag}
                </div>

                <ul className="space-y-4 text-muted-foreground text-sm md:text-base">
                  {edu.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 bg-accent/80 rounded-full mt-2.5 shrink-0"></span>
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
