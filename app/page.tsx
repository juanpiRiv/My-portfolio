"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import EnhancedStarfieldBackground from "@/components/EnhancedStarfieldBackground"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import ContentSection from "@/components/ContentSection"
import MetricsBanner from "@/components/MetricsBanner"
import ProjectShowcase from "@/components/ProjectShowcase"
import CallToAction from "@/components/CallToAction"
import { sections } from "@/data/portfolioData"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-hidden font-martian">
      <EnhancedStarfieldBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 p-4 sm:p-8 text-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <Header />

          {/* Métricas destacadas */}
          <MetricsBanner />

          <main>
            <Navigation sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />

            <AnimatePresence mode="wait">
              {activeSection === "about" && (
                <motion.div
                  key="about-extended"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContentSection activeSection={activeSection} />
                </motion.div>
              )}

              {activeSection === "projects" && (
                <motion.div
                  key="projects-extended"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectShowcase />
                  <ContentSection activeSection={activeSection} />
                </motion.div>
              )}

              {activeSection === "skills" && (
                <motion.div
                  key="skills-extended"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContentSection activeSection={activeSection} />
                </motion.div>
              )}

              {(activeSection === "education" || activeSection === "experience") && (
                <ContentSection key={activeSection} activeSection={activeSection} />
              )}

              {activeSection === "contact" && (
                <motion.div
                  key="contact-extended"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CallToAction />
              
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <footer className="text-center mt-12 text-gray-400 text-sm ">
            <p>&copy; {new Date().getFullYear()} JuanpiRiv. Todos los derechos reservados.</p>
          </footer>
        </div>
      </motion.div>
    </div>
  )
}