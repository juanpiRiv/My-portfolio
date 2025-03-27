"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "language" },
  { name: "Java", icon: "/icons/java.svg", category: "language" },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "frontend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "language" },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg", category: "frontend" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "database" },
  { name: "MySQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "Docker", icon: "/icons/docker.svg", category: "devops" },
  { name: "Supabase", icon: "/icons/aws.svg", category: "backend" },
  { name: "Firebase", icon: "/icons/firebase.svg", category: "backend" },
  { name: "Git", icon: "/icons/git.svg", category: "devops" },
]

export default function TechStack() {
  const categories = [
    { id: "all", label: "Todas" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Bases de Datos" },
    { id: "devops", label: "DevOps" },
    { id: "language", label: "Lenguajes" },
  ]

  return (
    <div className="w-full mt-12 mb-5">
      <motion.div
        className="bg-gray-800 bg-opacity-75 backdrop-blur-md p-6 rounded-lg border border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2">Stack Tecnológico</h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
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
                  {tech.name.substring(0, 2)}
                </div>
              </div>
              <span className="text-gray-300 text-sm text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

