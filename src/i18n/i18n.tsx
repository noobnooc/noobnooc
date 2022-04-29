import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { en } from "./en";
import { zh } from "./zh";

export const LANGUAGES = [
  {
    language: "en" as const,
    indicator: "EN",
    strings: en,
  },
  {
    language: "zh" as const,
    indicator: "中",
    strings: zh,
  },
];

const SUPPORT_LANGUAGES = LANGUAGES.map((l) => l.language);

type SupportedLanguage = typeof SUPPORT_LANGUAGES[number];

const I18NContext = createContext<{
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}>(undefined);

export function I18NProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>(
    navigator.languages
      .map((lang) => lang.split("-")[0])
      .find((lang): lang is SupportedLanguage =>
        SUPPORT_LANGUAGES.includes(lang as SupportedLanguage)
      ) ?? SUPPORT_LANGUAGES[0]
  );

  return (
    <I18NContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18NContext.Provider>
  );
}

export function useI18N() {
  const lang = useContext(I18NContext);

  const strings = useMemo(() => {
    return LANGUAGES.find((l) => l.language === lang.language)?.strings;
  }, [lang.language]);

  return {
    strings,
    lang,
  };
}
