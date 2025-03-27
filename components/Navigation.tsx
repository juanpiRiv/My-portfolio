"use client"

import { motion } from "framer-motion"
import type { Section } from "@/types/portfolio"

type NavigationProps = {
  sections: Section[]
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ sections, activeSection, setActiveSection }: NavigationProps) {
  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className="flex justify-center mb-12 flex-wrap sticky top-0 bg-gray-900 bg-opacity-75 backdrop-blur-md z-10 py-4 border border-cyan-500/50 hover:border-cyan-400/70 rounded-lg shadow-lg"
      aria-label="Navegación principal"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`flex items-center px-4 py-2 m-2 rounded-full transition-all duration-300 ${
            activeSection === section.id
              ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 shadow-lg shadow-cyan-500/25"
              : "bg-gray-800 bg-opacity-80 text-gray-300 hover:bg-gray-700 hover:text-white border border-cyan-500/30 hover:border-cyan-500/60"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-current={activeSection === section.id ? "page" : undefined}
        >
          <section.icon className="w-5 h-5 mr-2" aria-hidden="true" />
          <span>{section.title}</span>
        </motion.button>
      ))}
    </nav>
  )
}

