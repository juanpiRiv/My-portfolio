"use client"

import { motion } from "framer-motion"
import { Download, Mail, Calendar } from "lucide-react"

export default function CallToAction() {
  return (
    <motion.div
      className="w-full mb-12 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-lg p-8 border border-cyan-500/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Estoy disponible para nuevos proyectos y oportunidades. Contáctame para discutir cómo puedo ayudarte a
          alcanzar tus objetivos tecnológicos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href= "cv.pdf"
            download
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-cyan-400 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Descargar CV
          </motion.a>

          <motion.a
            href="juanpirivero015@gmail.com"
            className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 font-semibold py-3 px-6 rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Enviar mensaje
          </motion.a>

          <motion.a
            href="https://calendly.com/juanpirivero015/30min?month=2025-03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-cyan-400 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar llamada
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

