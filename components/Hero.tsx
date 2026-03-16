"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles, Instagram } from "lucide-react";
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
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-panel text-[var(--muted-foreground)] hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:border-[var(--aurora-1)]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-panel text-[var(--muted-foreground)] hover:text-white hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:border-[var(--aurora-1)]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
