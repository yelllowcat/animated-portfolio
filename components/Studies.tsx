"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export default function Studies() {
  const { messages, studies } = useLanguage();

  return (
    <section id="studies" className="py-28 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase mb-3 block">
            — {messages.nav.studies} —
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-[var(--foreground)]">
            {messages.studies.heading}
          </h2>
          <p className="text-[var(--muted)] text-lg">
            {messages.studies.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/30 via-[var(--accent)]/10 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {studies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 group-hover:border-[var(--accent)]/40 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-grow bg-[var(--surface-elevated)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-display font-bold text-[var(--foreground)]">
                        {study.title}
                      </h3>
                      <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-[var(--accent)]/20">
                        {study.period}
                      </span>
                    </div>

                    <p className="text-[var(--muted-foreground)] font-medium mb-2">
                      {study.institution}
                    </p>

                    <p className="text-[var(--muted)] leading-relaxed">
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
