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
      {/* ── Atmospheric Background ── */}
      {/* Gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent-light)]/5 blur-[100px]" />
      </div>

      {/* Floating geometric decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-16 w-24 h-24 border border-[var(--accent)]/10 rounded-xl hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 left-20 w-16 h-16 border border-[var(--accent)]/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--accent)]/20 rounded-full hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Availability badge with pulsing dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[var(--accent)]/10 text-[var(--accent-text)] text-sm font-medium mb-8 border border-[var(--accent)]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            {messages.hero.availability}
          </span>
        </motion.div>

        {/* Name heading with staggered reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-[var(--foreground)] mb-6 leading-[1.1]"
        >
          {messages.hero.titleLead}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--accent), var(--accent-light))",
            }}
          >
            {messages.hero.titleAccent}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-[var(--muted)] mb-10 leading-relaxed"
        >
          {messages.hero.description}
        </motion.p>

        {/* CTA + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#projects"
            className="group px-8 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40"
          >
            {messages.hero.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [4, 16, 4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
