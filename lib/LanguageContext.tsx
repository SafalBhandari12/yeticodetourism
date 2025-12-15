"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { DEFAULT_LANGUAGE, TOP_10_LANGUAGES } from "./lang/config";

export interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  availableLanguages: typeof TOP_10_LANGUAGES;
  getLanguageName: (code: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<string>(DEFAULT_LANGUAGE);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize language from localStorage on mount (client-side only)
  useEffect(() => {
    setIsMounted(true);
    const savedLanguage = localStorage.getItem("language") || DEFAULT_LANGUAGE;
    if (savedLanguage !== language) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const setLanguage = (lang: string) => {
    // Validate language code
    if (TOP_10_LANGUAGES.some((l) => l.code === lang)) {
      setLanguageState(lang);
      localStorage.setItem("language", lang);
      // Update HTML lang attribute
      document.documentElement.lang = lang;
    }
  };

  const getLanguageName = (code: string): string => {
    const lang = TOP_10_LANGUAGES.find((l) => l.code === code);
    return lang?.name || code;
  };

  // Create memoized value to prevent unnecessary re-renders
  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      availableLanguages: TOP_10_LANGUAGES,
      getLanguageName,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
