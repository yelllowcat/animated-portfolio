"use client";

import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import { useLanguage } from "./LanguageProvider";

type LanguageToggleProps = {
  className?: string;
  stacked?: boolean;
  onSelect?: () => void;
};

export default function LanguageToggle({
  className,
  stacked = false,
  onSelect,
}: LanguageToggleProps) {
  const { locale, messages, setLocale } = useLanguage();

  function handleSelect(nextLocale: Locale) {
    if (nextLocale !== locale) {
      setLocale(nextLocale);
    }

    onSelect?.();
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 p-1 text-sm shadow-sm backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80",
        stacked &&
          "w-full flex-col items-stretch rounded-2xl bg-transparent p-0 shadow-none backdrop-blur-none",
        className
      )}
      aria-label={messages.languageLabel}
      role="group"
    >
      {locales.map((value) => {
        const active = value === locale;

        return (
          <button
            key={value}
            type="button"
            onClick={() => handleSelect(value)}
            className={cn(
              "rounded-full px-3 py-1.5 font-medium transition-colors",
              stacked && "w-full rounded-xl px-4 py-2.5 text-left",
              active
                ? "bg-indigo-600 text-white"
                : "text-neutral-600 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400"
            )}
            aria-pressed={active}
          >
            {stacked ? messages.localeLabels[value] : value.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
