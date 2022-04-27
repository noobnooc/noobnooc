import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

export const Home: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        Nooc
        <Link to="/about">About Me</Link>
      </div>
    </div>
  );
};
