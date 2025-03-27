"use client"

import { AnimatePresence, motion } from "framer-motion"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Education from "./sections/Education"
import Experience from "./sections/Experience"

type ContentSectionProps = {
  activeSection: string
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export default function ContentSection({ activeSection }: ContentSectionProps) {
  return (
    <AnimatePresence initial={false} custom={1}>
      <motion.div
        key={activeSection}
        custom={1}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className="bg-gray-900 bg-opacity-75 backdrop-blur-md p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400/70"
      >
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "education" && <Education />}
        {activeSection === "experience" && <Experience />}

      </motion.div>
    </AnimatePresence>
  )
}

