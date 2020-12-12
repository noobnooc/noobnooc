import * as React from "react";

import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatar}
        alt="Nooc"
        src="/images/circle-avatar.svg"
      />
      <p>constructing ...</p>
    </div>
  );
};

export default HomePage;
