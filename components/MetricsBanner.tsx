"use client"

import { motion } from "framer-motion"
import { Code, BookOpen, Star, GitMerge } from "lucide-react"

export default function MetricsBanner() {
  const metrics = [
    { icon: Code, value: "10+", label: "Proyectos Personales" },
    { icon: BookOpen, value: "500+", label: "Horas de Estudio" },
    { icon: Star, value: "8+", label: "Tecnologías Dominadas" },
    { icon: GitMerge, value: "100+", label: "Commits en GitHub" },
  ]

  return (
    <div className="w-full mb-12">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-75 backdrop-blur-md p-4 rounded-lg border border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <metric.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-gray-300 text-sm">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

