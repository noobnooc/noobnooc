import classNames from "classnames";
import React, { useState } from "react";
import { LanguageIndicator } from "../../components/LanguageIndicator";
import { useI18N } from "../../i18n";

import classes from "./Home.module.css";

export function Home() {
  const [atTop, setAtTop] = useState(true);

  const { strings } = useI18N();

  return (
    <div
      className={classes.wrapper}
      onScroll={(event) => {
        setAtTop(event.currentTarget.scrollTop <= 0);
      }}
    >
      <div className={classes.page}>
        <div className={classes.face}>
          <div className={classes.eyesRow}>
            <div className={classNames(classes.eye, classes.eyeLeft)}></div>
            <div className={classNames(classes.eye, classes.eyeRight)}></div>
          </div>
        </div>
        <a
          className={classNames(classes.pageIndicator, {
            [classes.hidden]: !atTop,
          })}
          href="#menu"
        >
          ⌃
        </a>
      </div>
      <div id="menu" className={classes.page}>
        <div className={classes.menu}>
          <a
            className={classes.menuItem}
            href="https://digests.nooc.ink"
            target="_blank"
            rel="noreferrer"
          >
            {strings.menu.digest}
          </a>
          <a className={classes.menuItem} href="#about">
            {strings.menu.about}
          </a>
        </div>
      </div>
      <div id="about" className={classes.page}>
        <div>{strings.about.title}</div>
        <div>{strings.about.description}</div>
      </div>

      <LanguageIndicator
        className={classNames(classes.languageIndicator, {
          [classes.hidden]: atTop,
        })}
      />
    </div>
  );
}
