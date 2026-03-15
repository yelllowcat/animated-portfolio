"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { socialLinks } from "@/data/placeholder-data";

export default function Hero() {
  const { messages } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Aurora Background Elements */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob" />
      <div className="absolute top-1/3 -right-10 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000" />
      
      {/* Subtle Grid Overlay covering everything */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          {/* Availability badge */}
          <div className="flex justify-center mb-8">
            <div className="glass-pill px-4 py-1.5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
                {messages.hero.availability}
              </span>
            </div>
          </div>
          
          {/* Main Name Heading */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-4 uppercase leading-[0.9]">
            <span className="text-gradient block">David</span>
            <span className="text-gradient block">Gonzalez Vargas</span>
          </h1>

          {/* Subheading / Role */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white/90 mb-8 max-w-3xl mx-auto">
            {messages.hero.titleLead}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-fuchsia-400 inline-flex items-center gap-2">
              {messages.hero.titleAccent} <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-fuchsia-400" />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed font-sans">
            {messages.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold overflow-hidden flex items-center gap-2 transition-all hover:scale-105"
            >
              <span className="absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="relative z-10 flex items-center gap-2">
                {messages.hero.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill p-4 hover:bg-white/10 text-neutral-400 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill p-4 hover:bg-white/10 text-neutral-400 hover:text-white transition-all hover:scale-110"
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
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-display">Scroll</span>
        <div className="w-5 h-8 border border-neutral-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-2 bg-indigo-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
