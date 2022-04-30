import React from "react";
import { Link } from "react-router-dom";
import { useI18N } from "../../../i18n";

import classes from "./Menu.module.css";

export function Menu({ id, className }: { id: string; className?: string }) {
  const { strings } = useI18N();

  return (
    <div id={id} className={className}>
      <div className={classes.menu}>
        <a
          className={classes.menuItem}
          href={strings.menu.murmursLink}
          target="_blank"
          rel="noreferrer"
        >
          {strings.menu.murmurs}
        </a>
        <Link className={classes.menuItem} to="/blog">
          {strings.menu.blog}
        </Link>
        <a
          className={classes.menuItem}
          href="https://github.com/noobnooc"
          target="_blank"
          rel="noreferrer"
        >
          {strings.menu.code}
        </a>
        <a
          className={classes.menuItem}
          href={strings.menu.photosLink}
          target="_blank"
          rel="noreferrer"
        >
          {strings.menu.photos}
        </a>
        <a
          className={classes.menuItem}
          href={strings.menu.videosLink}
          target="_blank"
          rel="noreferrer"
        >
          {strings.menu.videos}
        </a>
        <a className={classes.menuItem} href="#about">
          {strings.menu.about}
        </a>
      </div>
    </div>
  );
}
