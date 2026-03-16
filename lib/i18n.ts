import type { Metadata } from "next";

import {
  projectRecords,
  studyRecords,
  type ProjectRecord,
  type StudyRecord,
} from "@/data/placeholder-data";

export const localeCookieName = "portfolio_locale";
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

type NavKey = "about" | "projects" | "studies" | "contact";

type ProjectCopy = {
  title: string;
  description: string;
};

type StudyCopy = {
  title: string;
  institution: string;
  description: string;
};

export type Project = ProjectRecord & ProjectCopy;
export type Study = StudyRecord & StudyCopy;

export type Messages = {
  metadata: {
    title: string;
    description: string;
  };
  brand: string;
  languageLabel: string;
  localeLabels: Record<Locale, string>;
  nav: Record<NavKey, string>;
  menu: {
    open: string;
    close: string;
  };
  hero: {
    availability: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    cta: string;
  };
  projects: {
    heading: string;
    description: string;
    liveDemo: string;
    code: string;
    previewSuffix: string;
  };
  studies: {
    heading: string;
    description: string;
  };
  footer: {
    heading: string;
    description: string;
    builtWith: string;
    githubLabel: string;
    linkedinLabel: string;
    emailLabel: string;
  };
};

const messagesByLocale: Record<Locale, Messages> = {
  es: {
    metadata: {
      title: "David González Vargas | Desarrollador Full-Stack",
      description:
        "Portafolio de David González Vargas — proyectos, estudios y habilidades enfocadas en experiencias web interactivas.",
    },
    brand: "David G.V.",
    languageLabel: "Idioma",
    localeLabels: {
      es: "Español",
      en: "Inglés",
    },
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      studies: "Estudios",
      contact: "Contacto",
    },
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
    },
    hero: {
      availability: "Disponible para contratar",
      titleLead: "Hola, soy David",
      titleAccent: "González Vargas",
      description:
        "Desarrollador full-stack apasionado por crear aplicaciones web interactivas, accesibles y de alto rendimiento.",
      cta: "Ver proyectos",
    },
    projects: {
      heading: "Proyectos destacados",
      description:
        "Una selección de mi trabajo reciente, desde aplicaciones web hasta demos experimentales.",
      liveDemo: "Demo en vivo",
      code: "Código",
      previewSuffix: "Vista previa",
    },
    studies: {
      heading: "Educación y estudios",
      description:
        "Mi formación académica y mi proceso continuo de aprendizaje.",
    },
    footer: {
      heading: "David González Vargas",
      description: "Abierto a nuevas oportunidades y colaboraciones.",
      builtWith: "Hecho con Next.js y Tailwind CSS.",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      emailLabel: "Correo electrónico",
    },
  },
  en: {
    metadata: {
      title: "David González Vargas | Full-Stack Developer",
      description:
        "Portfolio of David González Vargas — projects, studies, and skills focused on interactive web experiences.",
    },
    brand: "David G.V.",
    languageLabel: "Language",
    localeLabels: {
      es: "Spanish",
      en: "English",
    },
    nav: {
      about: "About",
      projects: "Projects",
      studies: "Studies",
      contact: "Contact",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    hero: {
      availability: "Available for hire",
      titleLead: "Hi, I'm David",
      titleAccent: "González Vargas",
      description:
        "Full-stack developer passionate about creating interactive, accessible, and performant web applications.",
      cta: "View projects",
    },
    projects: {
      heading: "Featured projects",
      description:
        "A selection of my recent work, ranging from web applications to experimental demos.",
      liveDemo: "Live demo",
      code: "Code",
      previewSuffix: "Preview",
    },
    studies: {
      heading: "Education & studies",
      description:
        "My academic background and continuous learning journey.",
    },
    footer: {
      heading: "David González Vargas",
      description: "Open to new opportunities and collaborations.",
      builtWith: "Built with Next.js & Tailwind CSS.",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      emailLabel: "Email",
    },
  },
};

const projectCopyByLocale: Record<Locale, Record<number, ProjectCopy>> = {
  es: {
    1: {
      title: "Tienda en Línea",
      description:
        "Un panel integral para gestionar productos, pedidos y analítica. Construido con Next.js y Tailwind CSS.",
    },
    2: {
      title: "Sitio de Citas",
      description:
        "Una experiencia web para agendar, organizar y gestionar citas con una interfaz clara y moderna.",
    },
    5: {
      title: "Landing Estudio G",
      description:
        "Una landing enfocada en presentar marca, servicios y contacto con una experiencia visual clara y elegante.",
    },
  },
  en: {
    1: {
      title: "E-Commerce",
      description:
        "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Tailwind CSS.",
    },
    2: {
      title: "Appointments Site",
      description:
        "A modern booking experience for scheduling, organizing, and managing appointments with a polished interface.",
    },
    5: {
      title: "Estudio G Landing",
      description:
        "A landing page focused on presenting brand, services, and contact details with a clean, polished experience.",
    },
  },
};

const studyCopyByLocale: Record<Locale, Record<number, StudyCopy>> = {
  es: {
    1: {
      title: "Ingeniería en Desarrollo de Software",
      institution: "Universidad Autónoma de Baja California Sur",
      description:
        "Enfoque en algoritmos, estructuras de datos y principios de ingeniería de software.",
    },
    2: {
      title: "The Odin Project - Desarrollo Full Stack",
      institution: "The Odin Project",
      description:
        "Especialización profunda en desarrollo web moderno, incluyendo React, Node.js y gestión de bases de datos.",
    },
  },
  en: {
    1: {
      title: "Software Development Engineering",
      institution: "Universidad Autónoma de Baja California Sur",
      description:
        "Focused on algorithms, data structures, and software engineering principles.",
    },
    2: {
      title: "The Odin Project - Full Stack Development",
      institution: "The Odin Project",
      description:
        "In-depth specialization in modern web development, including React, Node.js, and database management.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export function getProjects(locale: Locale): Project[] {
  return projectRecords.map((project) => ({
    ...project,
    ...projectCopyByLocale[locale][project.id],
  }));
}

export function getStudies(locale: Locale): Study[] {
  return studyRecords.map((study) => ({
    ...study,
    ...studyCopyByLocale[locale][study.id],
  }));
}

export function getMetadata(locale: Locale): Metadata {
  const messages = getMessages(locale);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
  };
}
