"use client";

import { Mail } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import { socialLinks } from "@/data/placeholder-data";

export default function Footer() {
  const { messages } = useLanguage();

  return (
    <footer id="contact" className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              {messages.footer.heading}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {messages.footer.description}
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label={messages.footer.githubLabel}
            >
              <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label={messages.footer.linkedinLabel}
            >
              <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.143 0 2.068.926 2.068 2.069 0 1.142-.925 2.068-2.068 2.068zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.222 0z"/>
              </svg>
            </a>
            <a
              href={socialLinks.email}
              className="text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label={messages.footer.emailLabel}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} {messages.brand}.{" "}
            {messages.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
