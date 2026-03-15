"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";

export default function Studies() {
  const { messages, studies } = useLanguage();

  return (
    <section id="studies" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            {messages.studies.heading}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {messages.studies.description}
          </p>
        </motion.div>

        <div className="space-y-8">
          {studies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-indigo-500/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {study.title}
                    </h3>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {study.period}
                    </span>
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                    {study.institution}
                  </p>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
