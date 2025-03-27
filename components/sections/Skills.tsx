"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/portfolioData"
import Box from "../Box"

export default function Skills() {
  return (
    
    <Box>
      <motion.h2
        className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Habilidades
      </motion.h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="flex flex-col items-center p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              {/* Placeholder for actual icons */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {skill.substring(0, 2)}
              </div>
            </div>
            <span className="text-gray-300 text-sm text-center">{skill}</span>
          </motion.div>
        ))}
      </div>
    </Box>
  )
}
