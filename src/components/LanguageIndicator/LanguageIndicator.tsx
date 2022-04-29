import classNames from "classnames";
import React, { useCallback } from "react";
import { LANGUAGES, useI18N } from "../../i18n";

import classes from "./LanguageIndicator.module.css";

export function LanguageIndicator({ className }: { className?: string }) {
  const {
    lang: { language, setLanguage },
  } = useI18N();

  const switchLang = useCallback(() => {
    const currentLanguageIndex = LANGUAGES.findIndex(
      (l) => l.language === language
    );
    const nextLangIndex = (currentLanguageIndex + 1) % LANGUAGES.length;

    const nextLang = LANGUAGES[nextLangIndex].language;
    setLanguage(nextLang);
  }, [language]);

  return (
    <div
      className={classNames(className, classes.languageIndicator)}
      onClick={switchLang}
    >
      {LANGUAGES.map((lang) => (
        <div
          key={lang.language}
          className={classNames(classes.indicator, {
            [classes.activeIndicator]: lang.language === language,
          })}
        >
          {lang.indicator}
        </div>
      ))}
    </div>
  );
}
