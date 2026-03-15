"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

// Placeholder image component since we don't have real images yet
const ProjectPlaceholder = ({
  previewLabel,
  title,
}: {
  previewLabel: string;
  title: string;
}) => (
  <div className="w-full h-48 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border-b border-neutral-200 dark:border-neutral-700">
    <span className="text-neutral-400 font-medium">
      {title} {previewLabel}
    </span>
  </div>
);

export default function Projects() {
  const { messages, projects } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            {messages.projects.heading}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {messages.projects.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <ProjectPlaceholder
                title={project.title}
                previewLabel={messages.projects.previewSuffix}
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {messages.projects.liveDemo}
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
