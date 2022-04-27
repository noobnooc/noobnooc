import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./About.module.css";

export const About: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        About Me<Link to="/">Home</Link>
      </div>
    </div>
  );
};
