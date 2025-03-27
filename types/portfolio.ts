import type { LucideIcon } from "lucide-react"

export type Section = {
  id: string
  icon: LucideIcon
  title: string
}

export type Project = {
  title: string
  description: string
  link: string
}

export type Education = {
  degree: string
  institution: string
  year: string
}

export type Experience = {
  position: string
  company: string
  period: string
  description: string
}

