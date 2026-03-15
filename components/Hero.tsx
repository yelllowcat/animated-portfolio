"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { socialLinks } from "@/data/placeholder-data";

export default function Hero() {
  const { messages } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-950/20 dark:via-neutral-950 dark:to-neutral-950 opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            {messages.hero.availability}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6">
            {messages.hero.titleLead} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {messages.hero.titleAccent}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            {messages.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              {messages.hero.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [4, 16, 4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
