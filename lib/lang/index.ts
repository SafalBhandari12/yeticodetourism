import { en } from "./en";
import { zh } from "./zh";
import { hi } from "./hi";
import { es } from "./es";
import { fr } from "./fr";
import { ar } from "./ar";
import { pt } from "./pt";
import { ru } from "./ru";
import { ja } from "./ja";
import { de } from "./de";

export const translations = {
  en,
  zh,
  hi,
  es,
  fr,
  ar,
  pt,
  ru,
  ja,
  de,
};

export type TranslationKey = keyof typeof translations;
export type Translation = typeof en;

export const getTranslation = (language: string): Translation => {
  return translations[language as TranslationKey] || en;
};
