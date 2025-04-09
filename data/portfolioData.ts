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
    title: "🎯 Nodejs-Backend-I",
    description:
      "API de comercio electrónico con Node.js y Express. Permite gestión de productos y carritos, autenticación de usuarios y comunicación en tiempo real con WebSockets.",
    link: "https://github.com/juanpiRiv/Nodejs-Backend-I",
  },
  {
    title: "🎯 Nodejs-Backend-II",
    description:
      "Este proyecto es un sistema de autenticación para un sitio web de comercio electrónico. Incluye la gestión de usuarios, la autenticación mediante JWT y la protección de rutas.",
    link: "https://github.com/juanpiRiv/Nodejs-Backend-II",
  },
  {
    title: "📑 Facturador API",
    description:
      "API REST en Java para la gestión de facturas, con base de datos en memoria H2, soporte para Docker y documentación con Swagger.",
    link: "https://github.com/juanpiRiv/FacturadorFINAL",
  },
  {
    title: "💲 Dolar en vivo + Calculadora de cuotas",
    description:
      "Calculadora de cuotas con intereses + Dolar en vivo usando JavaScript vanilla y API de dolar.",
    link: "https://github.com/juanpiRiv/CotizadorCuotasULT",
  },
  {
    title: "🌐 Primera Landing Page",
    description:
      "Mi primera landing page, con HTML y CSS,Sass, Bootstrap y FontAwesome.Aqui aprendi a crear un sitio web.",
    link: "https://github.com/juanpiRiv/UrbanSound",
  },
];


export const education: Education[] = [
  {
    degree: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional (UTN)",
    year: "2025-En curso",
  },
  {
    degree: "Diplomatura Intensiva en Desarrollo Full-Stack",
    institution: "CoderHouse",
    year: "2024-2025 Finalizado",
  },
  {
    degree: "Bachillerato en Economía",
    institution: "ESJA 3",
    year: "2023 Finalizado",
  },
];

export const experience: Experience[] = [
  {
    position: "Administrativo",
    company: "Epuyen SA",
    period: "Mar 2025 - Presente",
    description:
    "Trabajo en el área administrativa-financiera de Epuyen S.A., una empresa con más de 40 años en la industria pesquera, líder en la región y certificada por SENASA. Procesan hasta 50 toneladas diarias y exportan a América, Europa, Medio Oriente y África, cumpliendo con altos estándares internacionales de calidad. En mi rol, gestiono tareas clave como: administración de facturas y movimientos financieros, liquidaciones de tarjetas y control de operaciones, registro de asientos contables y manejo de sistemas como Account Soft y SIAP Arca (AFIP). Esta experiencia me permitió fortalecer mi perfil en la gestión contable, el orden administrativo y la toma de decisiones con visión financiera.",
  },
  {
    position: "Desarrollador Trainee en Agentes Ai(n8n)",
    company: "Perceivo Ai (Start-up)",
    period: "Febrero 2025 - Finalizado",
    description:
    "Participé en un mes de prueba como Desarrollador Trainee en Perceivo AI, donde implementé agentes de inteligencia artificial utilizando n8n. Durante ese tiempo, desarrollé y desplegué flujos de trabajo funcionales conectados a WhatsApp, dejando demos listas como base para futuros proyectos. Finalicé mi participación tras recibir una mejor propuesta laboral, pero la experiencia me permitió introducirme en la automatización de procesos y el desarrollo de soluciones con enfoque en inteligencia artificial aplicada."
}
];
