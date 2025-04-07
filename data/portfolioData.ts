import { Code, Briefcase, User, Mail, GraduationCap, Building } from "lucide-react";
import type { Section, Project, Education, Experience } from "@/types/portfolio";

export const sections: Section[] = [
  { id: "about", icon: User, title: "Sobre mí" },
  { id: "projects", icon: Briefcase, title: "Proyectos" },
  { id: "skills", icon: Code, title: "Skills" },
  { id: "education", icon: GraduationCap, title: "Educación" },
  { id: "experience", icon: Building, title: "Experiencia" },
  { id: "contact", icon: Mail, title: "Contacto" },
];
export const projects: Project[] = [
  {
    title: "🎯Nodejs-Backend-I",
    description:
      "API de comercio electrónico con Node.js y Express. Permite gestión de productos y carritos, autenticación de usuarios y comunicación en tiempo real con WebSockets.",
    link: "https://github.com/juanpiRiv/Nodejs-Backend-I",
  },
  {
    title: "📑 Facturador API",
    description:
      "API REST en Java para la gestión de facturas, con base de datos en memoria H2, soporte para Docker y documentación con Swagger.",
    link: "https://github.com/juanpiRiv/FacturadorFINAL",
  },
  {
    title: "📊Python-IA-Excel-Analisis",
    description:
      "Script en Python para el análisis de datos en archivos Excel, proporcionando estadísticas clave y detección de valores nulos.",
    link: "https://github.com/juanpiRiv/Python-IA-Excel-Analisis",
  },
];


export const education: Education[] = [
  {
    degree: "Diplomatura Intensiva en Desarrollo Full-Stack",
    institution: "CoderHouse",
    year: "Finalizado",
  },
  {
    degree: "Tecnicatura en Programación",
    institution: "Universidad Tecnológica Nacional (UTN)",
    year: "En curso",
  },
  {
    degree: "Bachillerato en Economía",
    institution: "ESJA 3",
    year: "Finalizado",
  },
];

export const experience: Experience[] = [
  {
    position: "Administrativo",
    company: "Epuyen SA",
    period: "Mar 2025 - Presente",
    description:
      "Gestión administrativa y financiera, control de operaciones contables, manejo de facturación y conciliaciones bancarias.",
  },
];
