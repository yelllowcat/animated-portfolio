"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export default function Studies() {
  const { messages, studies } = useLanguage();

  return (
    <section id="studies" className="py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[var(--surface)] rounded-full blur-[100px] -z-10 pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--aurora-2)] to-[var(--aurora-3)] text-sm font-bold tracking-[0.25em] uppercase mb-4 block">
            {messages.nav.studies}
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[var(--foreground)] tracking-tight">
            {messages.studies.heading}
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg md:text-xl font-light">
            {messages.studies.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--aurora-1)] via-[var(--aurora-2)] to-transparent opacity-30" />
            <motion.div
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-px h-32 bg-gradient-to-b from-transparent via-[var(--aurora-1)] to-transparent opacity-80"
            />
          </div>

          <div className="space-y-12">
            {studies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative flex flex-col sm:flex-row gap-8 group"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10 pt-1">
                    <div className="w-12 h-12 rounded-xl glass-panel-elevated flex items-center justify-center text-[var(--aurora-1)] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-5 h-5 relative z-10" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-grow glass-panel p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-[var(--aurora-1)]/30 group-hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute -inset-px bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 relative z-10">
                      <h3 className="text-2xl font-display font-bold text-[var(--foreground)] tracking-tight">
                        {study.title}
                      </h3>
                      <span className="text-xs font-bold text-[var(--aurora-1)] bg-[var(--surface-elevated)] border border-[var(--border)] px-4 py-1.5 rounded-full w-fit mt-3 sm:mt-0 tracking-widest shadow-inner">
                        {study.period}
                      </span>
                    </div>

                    <p className="text-[var(--aurora-2)] font-medium mb-4 tracking-wide relative z-10">
                      {study.institution}
                    </p>

                    <p className="text-[var(--muted)] leading-relaxed font-light relative z-10">
                      {study.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
