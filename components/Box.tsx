"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type BoxProps = {
  children: ReactNode
  delay?: number
}

export default function Box({ children, delay = 0 }: BoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="bg-gray-800 bg-opacity-75 backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-cyan-500/50 hover:border-cyan-400/70 hover:shadow-cyan-500/20"
    >
      {children}
    </motion.div>
  )
}

