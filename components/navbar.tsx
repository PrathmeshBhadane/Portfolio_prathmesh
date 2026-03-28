"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Professional Skills", href: "#professional-skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    // Call once to set initial active section
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const menuVariants: any = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const linkVariants: any = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-xl font-bold text-foreground flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.6)]">
                प्र
              </div>
              <span className="hidden sm:inline-block"> प्रथम Backend</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`relative text-base font-bold transition-colors group px-1 ${activeSection === link.href.substring(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.8)] ${activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </motion.a>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="default" size="sm" className="rounded-full">
                  <a href="/resume.pdf" download="Prathmesh_Bhadane_Resume.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                className="relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background z-40 md:hidden shadow-2xl"
            >
              {/* Menu Header */}
              <div className="h-20 flex items-center px-8 border-b border-border">
                <span className="text-lg font-semibold text-foreground">Menu</span>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 py-8">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === link.href.substring(1) ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
                      >
                        <span className={`w-2 h-2 rounded-full bg-primary transition-opacity ${activeSection === link.href.substring(1) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                        <span className="text-base font-medium">{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    custom={navLinks.length}
                    className="mt-4"
                  >
                    <Button asChild variant="default" className="w-full justify-center rounded-xl py-6">
                      <a href="/resume.pdf" download="Prathmesh_Bhadane_Resume.pdf" onClick={() => setIsMobileMenuOpen(false)}>
                        <Download className="mr-2 h-5 w-5" />
                        Download CV
                      </a>
                    </Button>
                  </motion.li>
                </ul>
              </nav>

              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xs text-muted-foreground">Let's build something amazing</p>
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
