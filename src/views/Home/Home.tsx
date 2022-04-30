import classNames from "classnames";
import React, { useState } from "react";
import { LanguageIndicator } from "../../components/LanguageIndicator";
import { About } from "./AboutCard";

import classes from "./Home.module.css";
import { Menu } from "./Menu";

export function Home() {
  const [atTop, setAtTop] = useState(true);

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
      <Menu id="menu" className={classes.page} />
      <About id="about" className={classes.page} />

      <LanguageIndicator
        className={classNames(classes.languageIndicator, {
          [classes.hidden]: atTop,
        })}
      />
    </div>
  );
}
