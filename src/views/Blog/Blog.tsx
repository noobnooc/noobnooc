import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./Blog.module.css";

export const Blog: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        🚧 Under Construction 🚧<Link to="/">Back</Link>
      </div>
    </div>
  );
};
