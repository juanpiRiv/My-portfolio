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
        Soy un joven Desarrollador Full-Stack con experiencia en la creación de aplicaciones web escalables utilizando tecnologías como MERN (MongoDB, Express.js, React.js, Node.js), Next.js y Vercel. Me apasiona la innovación tecnológica y el desarrollo de soluciones eficientes, combinando backend sólido con interfaces intuitivas.

Además, poseo conocimientos en Java, Python y Docker, así como experiencia en el manejo de bases de datos MySQL y MongoDB. Mi enfoque en el desarrollo ágil y la mejora continua me permite adaptarme rápidamente a nuevos desafíos, optimizando procesos y garantizando productos de alta calidad.

Cuento con habilidades en trabajo en equipo, resolución de problemas y aprendizaje continuo, características que me han permitido desempeñarme con éxito en proyectos colaborativos y freelancing.
      </motion.p>
      <motion.p
        className="text-lg leading-relaxed text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Mi objetivo es combinar creatividad y experiencia técnica para resolver desafíos complejos y contribuir al
        avance de la industria tecnológica.
      </motion.p>
    </Box>
  )
}

