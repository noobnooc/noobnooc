import classNames from "classnames";
import React from "react";
import { FC } from "react";

import classes from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.face}>
          <div className={classes.eyesRow}>
            <div className={classNames(classes.eye, classes.eyeLeft)}></div>
            <div className={classNames(classes.eye, classes.eyeRight)}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
