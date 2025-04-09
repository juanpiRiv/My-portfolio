"use client"

import { motion } from "framer-motion"
import Box from "../Box"

export default function About() {
  return (
    <Box>
      <motion.h2
        className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Sobre mí
      </motion.h2>
      <motion.p
        className="text-lg mb-4 leading-relaxed text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ¡Hola! Soy Juan,Tengo 20 años y Actualmente vivo en Victoria,Entre Rios,Argentina.
        Desarrollador Full-Stack con ganas de crear cosas que realmente funcionen y hagan la diferencia. Trabajo con tecnologías como el stack MERN, Next.js y Vercel para construir aplicaciones web modernas, escalables y bien cuidadas.
      </motion.p>
      <motion.p
        className="text-lg mb-4 leading-relaxed text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        También tengo experiencia con Java, Python y Docker, y manejo bases de datos como MySQL y MongoDB. Me adapto rápido, siempre estoy aprendiendo algo nuevo y disfruto trabajar con metodologías ágiles, donde cada mejora cuenta.
      </motion.p>
      <motion.p
        className="text-lg leading-relaxed text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Valoro el trabajo en equipo, la buena comunicación y resolver problemas de forma creativa. Mi objetivo es aportar valor desde la tecnología, dejando una marca positiva en cada proyecto en el que participo.
      </motion.p>
    </Box>
  )
}
