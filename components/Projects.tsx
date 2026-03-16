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
  <div className="relative w-full h-56 bg-[var(--surface)] flex items-center justify-center overflow-hidden group-hover:bg-white/5 transition-colors duration-500 border-b border-[var(--border)]">
    {/* Editorial number */}
    <span className="absolute -bottom-4 -right-4 font-display text-9xl font-bold text-[var(--foreground)]/5 leading-none transition-transform duration-700 group-hover:scale-110">
      {String(index + 1).padStart(2, "0")}
    </span>
    <span className="text-[var(--muted-foreground)] font-medium text-sm z-10 tracking-widest uppercase">
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
    <div className="relative w-full h-56 overflow-hidden bg-[var(--surface)] border-b border-[var(--border)]">
      <Image
        src={imageSrc}
        alt={`${title} ${previewLabel}`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#02040a] via-[#02040a]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.1),transparent_50%)] mix-blend-screen" />
      <span className="absolute -bottom-4 -right-4 font-display text-9xl font-bold text-white/10 leading-none transition-transform duration-700 group-hover:scale-110 pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md">
        {previewLabel}
      </span>
    </div>
  );
};

export default function Projects() {
  const { locale, messages, projects } = useLanguage();

  return (
    <section id="projects" className="py-28 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-[var(--aurora-1)]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-[var(--aurora-2)]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
            {messages.nav.projects}
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--foreground)] tracking-tight">
            {messages.projects.heading}
          </h2>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto text-lg md:text-xl font-light">
            {messages.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[var(--aurora-2)]/30 relative"
            >
              {/* Hover glow effect behind card content */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--aurora-2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <ProjectPreview
                title={project.title}
                previewLabel={messages.projects.previewSuffix}
                index={index}
                imageSrc={project.previewImages?.[locale]}
              />

              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-display font-bold mb-3 text-[var(--foreground)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--aurora-1)] group-hover:to-[var(--aurora-2)] transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] mb-6 line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted-foreground)] group-hover:border-[var(--aurora-1)]/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-5 border-t border-[var(--border)]">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--aurora-1)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {messages.projects.liveDemo}
                  </a>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--aurora-1)] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
