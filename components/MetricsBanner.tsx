"use client"

import { motion } from "framer-motion"
import { Code, BookOpen, Star, GitMerge } from "lucide-react"

const metrics = [
  { icon: Code, value: "10+", label: "Proyectos Personales" },
  { icon: BookOpen, value: "500+", label: "Horas de Estudio" },
  { icon: Star, value: "8+", label: "Tecnologías Dominadas" },
  { icon: GitMerge, value: "100+", label: "Commits en GitHub" },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function MetricsBanner() {
  return (
    <div className="w-full mb-12">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-gray-800 bg-opacity-75 backdrop-blur-md p-5 rounded-2xl border border-cyan-500/40 hover:border-cyan-400 transition-transform hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20 text-center"
          >
            <metric.icon className="w-9 h-9 mx-auto mb-3 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-gray-300 text-sm">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
