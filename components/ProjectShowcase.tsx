"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function FrontendProjects() {
  const frontendProjects = [
    {
      title: "E-commerce Autoadmin NextjsUI",
      description: "Una interfaz de usuario optimizada para conversión en tiendas online modernas, con funcionalidades de administración de clientes y productos con rol administrador.",
      image: "/nextjs.png",
      technologies: ["Next.js", "Firebase", "Framer Motion", "Tailwind CSS", "Vercel", "MaterialUI", "MagicUI"],
      githubUrl: "https://github.com/juanpiRiv/Nextjs-Entrega",
      link: "nextjseccomerce-pi.vercel.app",
    },
    {
      title: "E-commerce ReactUI",
      description: "Una interfaz de usuario optimizada para conversión en tiendas online modernas.",
      image: "/reactjs.png",
      technologies: ["Vite", "React", "Chakra UI", "GitHubPages"],
      githubUrl: "https://github.com/juanpiRiv/ReactJSeccomercei",
      link: "https://juanpiriv.github.io/ReactJSeccomerce/",
    },
  ]

  // Card hover animation variants
  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Link hover animation variants
  const linkVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  }

  return (
    <div className="w-full mt-12 mb-5">
      <motion.h2 
        className="text-3xl font-bold text-cyan-400 mb-8 border-b border-cyan-500/30 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Proyectos 
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {frontendProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/80 backdrop-blur-md rounded-lg border border-cyan-500/30 shadow-lg transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative h-56 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-purple-900/60 group-hover:opacity-70 transition-opacity duration-300"
                initial={{ scale: 1.1, opacity: 0.9 }}
                whileHover={{ scale: 1.15, opacity: 0.7 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
              
              {/* Project title overlay on image */}
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <motion.span 
                    key={tech} 
                    className="text-xs bg-cyan-950/80 text-cyan-300 px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(8, 145, 178, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex space-x-6">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Github className="w-5 h-5 mr-2" /> 
                  <span>Código</span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -5 }}
                    animate={{ x: 0 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.span>
                </motion.a>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <ExternalLink className="w-5 h-5 mr-2" /> 
                  <span>Ver demo</span>
                  <motion.span 
                    className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -5 }}
                    animate={{ x: 0 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
