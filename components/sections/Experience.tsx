"use client"

import { motion } from "framer-motion"
import { experience } from "@/data/portfolioData"
import Box from "../Box"

export default function Experience() {
  return (
    <Box>
      <motion.h2
        className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Experiencia
      </motion.h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-cyan-500/20 hover:border-cyan-400/40"
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">{exp.position}</h3>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-purple-400 mt-2">{exp.period}</p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </Box>
  )
}

