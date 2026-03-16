"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

// Placeholder image component with editorial number overlay
const ProjectPlaceholder = ({
  previewLabel,
  title,
  index,
}: {
  previewLabel: string;
  title: string;
  index: number;
}) => (
  <div className="relative w-full h-48 bg-[var(--surface)] flex items-center justify-center overflow-hidden group-hover:bg-[var(--accent)]/5 transition-colors duration-500">
    {/* Editorial number */}
    <span className="absolute top-3 left-4 font-display text-6xl font-bold text-[var(--foreground)]/5 leading-none">
      {String(index + 1).padStart(2, "0")}
    </span>
    <span className="text-[var(--muted)] font-medium text-sm">
      {title} {previewLabel}
    </span>
  </div>
);

const ProjectPreview = ({
  imageSrc,
  previewLabel,
  title,
  index,
}: {
  imageSrc?: string;
  previewLabel: string;
  title: string;
  index: number;
}) => {
  if (!imageSrc) {
    return (
      <ProjectPlaceholder
        title={title}
        previewLabel={previewLabel}
        index={index}
      />
    );
  }

  return (
    <div className="relative w-full h-48 overflow-hidden bg-[var(--surface)]">
      <Image
        src={imageSrc}
        alt={`${title} ${previewLabel}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(205,170,92,0.18),transparent_45%)]" />
      <span className="absolute top-3 left-4 font-display text-6xl font-bold text-white/15 leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
        {previewLabel}
      </span>
    </div>
  );
};

export default function Projects() {
  const { locale, messages, projects } = useLanguage();

  return (
    <section id="projects" className="py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-3 block">
            — {messages.nav.projects} —
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-[var(--foreground)]">
            {messages.projects.heading}
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
            {messages.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[var(--surface-elevated)] border border-[var(--border)] rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl hover:shadow-[var(--accent)]/5 hover:border-[var(--accent)]/30"
            >
              <ProjectPreview
                title={project.title}
                previewLabel={messages.projects.previewSuffix}
                index={index}
                imageSrc={project.previewImages?.[locale]}
              />

              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface)] text-[var(--muted-foreground)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-[var(--border)]">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {messages.projects.liveDemo}
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {messages.projects.code}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
