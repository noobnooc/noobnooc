import classNames from "classnames";
import React from "react";
import { useI18N } from "../../../i18n";

import classes from "./About.module.css";

export function About({ id, className }: { id: string; className?: string }) {
  const { strings } = useI18N();

  return (
    <div id={id} className={classNames(className)}>
      <div className={classes.wrapper}>
        <div className={classes.title}>{strings.about.title}</div>
        <div className={classes.content}>
          {strings.about.descriptions.map((description, index) => (
            <div key={index} className={classes.descriptionItem}>
              {description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
