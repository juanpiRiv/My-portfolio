"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { projects } from "@/data/portfolioData"
import Box from "../Box"

export default function Projects() {
  return (
    <Box>
      <motion.h2
        className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Proyectos
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-400/40"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver proyecto <ExternalLink className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </Box>
  )
}

