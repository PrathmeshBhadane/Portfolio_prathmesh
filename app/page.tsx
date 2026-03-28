"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { CurrentlyWorking } from "@/components/currently-working"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { ProfessionalSkills } from "@/components/soft-skills"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

  return (
    <div className="bg-background min-h-screen selection:bg-primary/30">
      <main className="max-w-7xl mx-auto min-h-screen my-4 md:my-8 border border-border/40 rounded-[2rem] overflow-hidden relative shadow-2xl bg-card">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <CurrentlyWorking />
          <Experience />
          <Education />
          <ProfessionalSkills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
      </main>
    </div>
  )
}
