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
    title: "🛍️ E-commerce Backend API (Nodejs)",
    description:
      "API RESTful profesional para una plataforma de comercio electrónico. Incluye autenticación con JWT y Passport, gestión de productos, carritos y tickets de compra. Integración con Twilio (SMS), Nodemailer (emails), documentación Swagger y WebSockets. Proyecto modular, testeado (Mocha + Chai), con Docker y listo para producción.",
    link: "https://github.com/juanpiRiv/Nodejs-Auth-Api",
  },
  {
    title: "📊 Facturador API Java + Spring Boot + Docker",
    description:
      "API REST de facturación desarrollada en Java con Spring Boot. Incluye gestión CRUD de facturas, productos y clientes, documentación Swagger, base de datos H2 (opcional MySQL en Docker), y colección Postman para testing. Proyecto modular, contenedorizado y listo para producción.",
    link: "https://github.com/juanpiRiv/FacturadorFINAL",
  },
  {
    title: "💲 Dólar en Vivo + Calculadora JavaScript Vanilla",
    description:
      "App en JavaScript que muestra el dólar en tiempo real (API externa) y permite calcular cuotas con interés. Sin frameworks. Interfaz simple, funcional e ideal para educación financiera.",
    link: "https://github.com/juanpiRiv/CotizadorCuotasULT",
  },

];


export const education: Education[] = [
  {
    degree: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional (UTN)",
    year: "2025-En curso",
  },
  {
    degree: "Carrera Intensiva en Desarrollo Full-Stack-Web",
    institution: "CoderHouse",
    year: "02/2024 - 07/2025 Finalizado",
  },
  {
    degree: "Bachillerato en Economía",
    institution: "ESJA 3",
    year: "2023 - Finalizado",
  },
];

export const experience: Experience[] = [
  {
    position: "Administrativo",
    company: "PABLO ARIEL SRL",
    period: "Mar 2025 - Presente",
    description:
    "Me desempeño en el área administrativa-financiera de PABLO ARIEL SRL, una empresa especializada en el transporte de productos congelados, operando con altos estándares de logística y trazabilidad en la cadena de frío. En mi rol, gestiono procesos clave como la administración de facturas, seguimiento de movimientos financieros, conciliación de tarjetas, control de gastos operativos y registro contable. También opero sistemas como Account Soft y SIAP Arca (AFIP), facilitando la presentación de declaraciones juradas y el cumplimiento fiscal. Esta experiencia ha fortalecido mis habilidades en organización, control administrativo y análisis financiero en un entorno logístico exigente",
  },
  {
    position: "Desarrollador Trainee en Agentes Ai(n8n)",
    company: "Perceivo Ai (Start-up)",
    period: "Febrero 2025 - Finalizado",
    description:
    "Participé en un mes de prueba como Desarrollador Trainee en Perceivo AI, donde implementé agentes de inteligencia artificial utilizando n8n. Durante ese tiempo, desarrollé y desplegué flujos de trabajo funcionales conectados a WhatsApp, dejando demos listas como base para futuros proyectos. Finalicé mi participación tras recibir una mejor propuesta laboral, pero la experiencia me permitió introducirme en la automatización de procesos y el desarrollo de soluciones con enfoque en inteligencia artificial aplicada."
}
];