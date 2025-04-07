"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "/icons/react_dark.svg", category: "frontend" },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "frontend" },
  { name: "Java", icon: "/icons/java.svg", category: "language" },
  { name: "spring", icon: "/icons/spring.svg", category: "backend" },
  {
    name: "Next.js",
    icon: "/icons/nextjs_icon_dark.svg",
    category: "frontend",
  },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "language" },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend" },
  {
    name: "Express.js",
    icon: "/icons/expressjs_dark.svg",
    category: "backend",
  },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "TailwindCSS", icon: "/icons/tailwindcss.svg", category: "frontend" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "database" },
  { name: "MySQL", icon: "/icons/postgresql.svg", category: "database" },
  { name: "Docker", icon: "/icons/docker.svg", category: "devops" },
  { name: "Supabase", icon: "/icons/supabase.svg", category: "backend" },
  { name: "Firebase", icon: "/icons/firebase.svg", category: "backend" },
  { name: "Git", icon: "/icons/git.svg", category: "devops" },
  { name: "GitHub", icon: "/icons/github-light.svg", category: "devops" },
  { name: "Figma", icon: "/icons/figma.svg", category: "design" },
  { name: "python", icon: "/icons/python.svg", category: "language" },
  { name: "Sass", icon: "/icons/sass.svg", category: "frontend" },
  { name: "openAI-api", icon: "/icons/openai.svg", category: "ai" },
  { name: "Groq", icon: "/icons/groq.svg", category: "ai" },
  { name: "vite", icon: "/icons/vitejs.svg", category: "frontend" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "hosting" },
  { name: "Mongodb", icon: "/icons/mongodb.svg", category: "database" },
  { name: "MaterialUI", icon: "/icons/materialui.svg", category: "frontend" },
  { name: "HTML5", icon: "/icons/html5.svg", category: "frontend" },
  { name: "CSS3", icon: "/icons/css_old.svg", category: "frontend" },
  { name: "dotenv", icon: "/icons/dotenv.svg", category: "devops" },
  { name: "Postman", icon: "/icons/postman.svg", category: "devops" },
  { name: "Linux", icon: "/icons/linux.svg", category: "devops" },
  { name: "Windows", icon: "/icons/windows.svg", category: "devops" },
  { name: "vscode", icon: "/icons/vscode.svg", category: "devops" },
  { name: "intellijidea", icon: "/icons/intellijidea.svg", category: "devops" },
];

export default function TechStack() {
  return (
    <div className="w-full mt-5mb-5">
      <motion.div
        className="bg-gray-800 bg-opacity-75 backdrop-blur-md p-6 rounded-lg border border-cyan-500/50 hover:border-cyan-400/70 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-cyan-500/30 pb-2">
          Stack Tecnológico
        </h3>

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
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              </div>
              <span className="text-gray-300 text-sm text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
