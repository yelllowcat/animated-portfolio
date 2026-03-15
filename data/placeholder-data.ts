import { Code, Cpu, type LucideIcon } from "lucide-react";

export type ProjectRecord = {
  id: number;
  link: string;
  github: string;
  featured: boolean;
  tags: string[];
};

export type StudyRecord = {
  id: number;
  period: string;
  icon: LucideIcon;
};

export const projectRecords: ProjectRecord[] = [
  {
    id: 1,
    link: "#",
    github: "#",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
  },
  {
    id: 2,
    link: "#",
    github: "#",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
  },
  {
    id: 3,
    link: "#",
    github: "https://github.com/yelllowcat/gym-tracker",
    featured: false,
    tags: ["Expo, React Native", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    id: 4,
    link: "#",
    github: "https://github.com/yelllowcat/ProyectoFinal",
    featured: false,
    tags: ["PHP, MySQL", "JavaScript", "CSS"],
  },
];

export const studyRecords: StudyRecord[] = [
  {
    id: 1,
    period: "2022 - 2027",
    icon: Cpu,
  },
  {
    id: 2,
    period: "2024 - 2025",
    icon: Code,
  },
];

export const socialLinks = {
  github: "https://github.com/yelllowcat",
  linkedin: "https://www.linkedin.com/in/david-gonzalez-vargas-a392b0350/",
  email: "mailto:davidgonzalezvargas3@gmail.com",
};
