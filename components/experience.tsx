"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Professional work experience and internships where I've applied my skills to solve real-world problems.
          </p>
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:pl-10 pl-6 relative pb-10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute w-10 h-10 bg-card rounded-full -left-[1.3rem] top-0 border-2 border-primary/40 flex items-center justify-center p-2 group-hover:border-primary transition-colors shadow-lg z-10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl bg-card/40 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all p-6 md:p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden group/card shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    Full-Stack Developer Trainee
                  </h3>
                  <a href="#" className="text-primary hover:text-accent transition-colors font-medium text-lg">
                    Survi Industries Pvt. Ltd.
                  </a>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground bg-white/5 border border-white/5 py-2 px-4 rounded-xl backdrop-blur-sm self-start">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Jun 2023 - Aug 2023
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Pune, India
                  </span>
                </div>
              </div>

              {/* Tag */}
              <div className="mb-6 inline-block px-3 py-1 mt-2 text-sm font-medium text-green-400 border border-green-500/30 rounded-full bg-green-500/10">
                Internship
              </div>

              <ul className="space-y-4 text-muted-foreground text-sm md:text-base mb-8">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mt-2 shrink-0"></span>
                  <p>Led a development team to design and deliver a complete full-stack system from concept to deployment, ensuring timely execution and quality delivery.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mt-2 shrink-0"></span>
                  <p>Developed an automated billing management system with database integration and dynamic PDF invoice generation, streamlining client billing workflows.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mt-2 shrink-0"></span>
                  <p>Integrated email notification system to automatically send invoices and payment summaries, improving client communication and reliability.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mt-2 shrink-0"></span>
                  <p>Optimized system performance by ~30% through efficient database queries and reusable component architecture.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 bg-primary/80 rounded-full mt-2 shrink-0"></span>
                  <p>Collaborated cross-functionally on API integration, database design, and testing while implementing SEO and performance optimizations for production-ready applications.</p>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Bootstrap"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md text-xs font-semibold text-primary bg-primary/10 border border-primary/20 transition-colors hover:bg-primary/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
