"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { socialLinks } from "@/data/placeholder-data";

export default function Hero() {
  const { messages } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* ── Atmospheric Background ── */}
      <div className="absolute inset-0 -z-10 bg-[var(--background)] overflow-hidden">
        {/* Aurora Gradients layers */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[var(--aurora-1)]/15 blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[0%] w-[60vw] h-[60vw] rounded-full bg-[var(--aurora-2)]/15 blur-[130px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            rotate: [0, 180, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[var(--aurora-3)]/15 blur-[140px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[20px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 w-full">
        {/* Availability badge with pulsing dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-panel text-[var(--foreground)] text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--aurora-1)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--aurora-1)]" />
            </span>
            {messages.hero.availability}
            <Sparkles className="w-3.5 h-3.5 text-[var(--aurora-2)] ml-1" />
          </span>
        </motion.div>

        {/* Name heading with staggered reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-[var(--foreground)] mb-6 leading-[1.05]"
        >
          {messages.hero.titleLead}
          <br className="hidden md:block" />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-transparent bg-clip-text relative inline-block animate-aurora-text pb-2"
            style={{
              backgroundImage: "linear-gradient(to right, var(--aurora-1), var(--aurora-2), var(--aurora-3), var(--aurora-1))",
              backgroundSize: "200% auto",
            }}
          >
            {messages.hero.titleAccent}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="max-w-xl mx-auto text-lg md:text-xl text-[var(--muted-foreground)] mb-12 leading-relaxed font-light"
        >
          {messages.hero.description}
        </motion.p>

        {/* CTA + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="group px-8 py-4 rounded-full glass-panel-elevated hover:bg-white/10 text-white font-medium transition-all duration-500 hover:scale-105 flex items-center gap-2 hover:border-[var(--aurora-2)]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] w-full sm:w-auto justify-center"
          >
            {messages.hero.cta}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-panel text-[var(--muted-foreground)] hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:border-[var(--aurora-1)]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-panel text-[var(--muted-foreground)] hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:border-[var(--aurora-1)]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
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
        <div className="w-7 h-12 border border-[var(--border)] rounded-full flex justify-center glass-panel">
          <motion.div
            animate={{ y: [6, 20, 6], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[var(--aurora-1)] rounded-full mt-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
