"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  getMessages,
  getProjects,
  getStudies,
  localeCookieName,
  type Locale,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: ReturnType<typeof getMessages>;
  projects: ReturnType<typeof getProjects>;
  studies: ReturnType<typeof getStudies>;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
  initialLocale: Locale;
};

export default function LanguageProvider({
  children,
  initialLocale,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState(initialLocale);

  const messages = getMessages(locale);
  const projects = getProjects(locale);
  const studies = getStudies(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    document.title = messages.metadata.title;

    const descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    if (descriptionTag) {
      descriptionTag.content = messages.metadata.description;
    }
  }, [locale, messages.metadata.description, messages.metadata.title]);

  function setLocale(nextLocale: Locale) {
    startTransition(() => {
      setLocaleState(nextLocale);
    });
  }

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, messages, projects, studies }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
