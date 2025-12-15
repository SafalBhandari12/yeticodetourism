import { useLanguage } from "./LanguageContext";
import { getTranslation, Translation } from "./lang";

export const useTranslation = (): Translation => {
  const { language } = useLanguage();
  return getTranslation(language);
};
