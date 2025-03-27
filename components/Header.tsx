"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import profilepic from "@/public/profile-pic.png"

export default function Header() {
  return (
    <motion.header
      className="text-center mb-12 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg p-10 shadow-xl relative overflow-hidden border border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          {/* Contenedor de la imagen de perfil */}
          <motion.div
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20 mb-4 md:mb-0 md:mr-6 relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={profilepic}
              alt="Foto de perfil"
              width={160} // Ajustado a 160px
              height={160}
              className="object-cover rounded-full"
            />
          </motion.div>

          {/* Información del usuario */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text leading-tight"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Juan Pablo
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-6 md:mb-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-cyan-400 font-semibold">Full Stack Developer</span>
            </motion.p>
          </div>
        </div>

      </div>
    </motion.header>
  )
}
