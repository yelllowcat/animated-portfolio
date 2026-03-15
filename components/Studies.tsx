"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export default function Studies() {
  const { messages, studies } = useLanguage();

  return (
    <section id="studies" className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white uppercase tracking-wider">
            {messages.studies.heading}
          </h2>
          <p className="text-neutral-400 text-lg">
            {messages.studies.description}
          </p>
        </motion.div>

        <div className="space-y-12 relative border-l border-white/10 ml-6 sm:ml-0 sm:border-none">
          {studies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex flex-col sm:flex-row gap-8 sm:gap-12"
              >
                {/* Timeline connector visual (desktop) */}
                <div className="hidden sm:flex flex-col items-center mt-2 relative z-10 w-16 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.2)]">
                    <Icon className="w-7 h-7" />
                  </div>
                  {index !== studies.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent mt-4" />
                  )}
                </div>

                {/* Mobile icon */}
                <div className="sm:hidden absolute -left-10 mt-2 bg-[#030014] p-2 rounded-full border border-white/10 z-10">
                  <Icon className="w-5 h-5 text-fuchsia-400" />
                </div>

                <div className="glass-panel p-8 sm:p-10 rounded-3xl flex-grow hover:shadow-[0_0_30px_rgba(232,121,249,0.1)] transition-all duration-500 relative group overflow-hidden">
                  {/* Subtle hover glow inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-transparent to-fuchsia-500/0 group-hover:from-fuchsia-500/5 group-hover:to-purple-500/5 transition-opacity opacity-0 group-hover:opacity-100 duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {study.title}
                        </h3>
                        <p className="text-fuchsia-400 font-semibold tracking-wide">
                          {study.institution}
                        </p>
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-white/50 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit">
                        {study.period}
                      </span>
                    </div>
                    
                    <p className="text-neutral-400 leading-relaxed mt-4">
                      {study.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
