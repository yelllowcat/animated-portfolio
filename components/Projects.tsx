"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

// Placeholder image component since we don't have real images yet
const ProjectPlaceholder = ({
  previewLabel,
  title,
}: {
  previewLabel: string;
  title: string;
}) => (
  <div className="w-full h-56 bg-linear-to-br from-white/5 to-transparent flex items-center justify-center border-b border-white/10 relative overflow-hidden transition-transform duration-700 group-hover:scale-105">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_100%)] mix-blend-screen" />
    <Folder className="w-16 h-16 text-indigo-500/30 absolute -bottom-4 -right-4 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
    <span className="text-neutral-500 font-display font-medium tracking-wide z-10">
      {title} {previewLabel}
    </span>
  </div>
);

export default function Projects() {
  const { messages, projects } = useLanguage();

  return (
    <section id="projects" className="py-32 relative z-10">
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white uppercase tracking-wider">
            {messages.projects.heading}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
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
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(129,140,248,0.15)] flex flex-col"
            >
              <div className="relative overflow-hidden">
                <ProjectPlaceholder
                  title={project.title}
                  previewLabel={messages.projects.previewSuffix}
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-6 line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto pt-6 border-t border-white/10">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    {messages.projects.liveDemo}
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
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
