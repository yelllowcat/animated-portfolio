import { Code, Cpu, type LucideIcon } from "lucide-react";

export type ProjectRecord = {
  id: number;
  link: string;
  github: string;
  featured: boolean;
  tags: string[];
  previewImages?: {
    es: string;
    en: string;
  };
};

export type StudyRecord = {
  id: number;
  period: string;
  icon: LucideIcon;
};

export const projectRecords: ProjectRecord[] = [
  {
    id: 1,
    link: "https://celebrity-shop.store/es",
    github: "#",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    previewImages: {
      es: "/e-com-es.png",
      en: "/e-com-en.png",
    },
  },
  {
    id: 2,
    link: "https://barber.celebrity-shop.store/es",
    github: "#",
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    previewImages: {
      es: "/appoiments-es.png",
      en: "/appoiments-en.png",
    },
  },
  {
    id: 5,
    link: "https://estudio-g.vercel.app/",
    github: "#",
    featured: false,
    tags: ["Next.js", "Tailwind CSS", "Landing Page"],
    previewImages: {
      es: "/landing.png",
      en: "/landing.png",
    },
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
