import Lottie from "lottie-web";
import * as React from "react";

import styles from "./home.module.css";

const HomePage = () => {
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#animated-avatar-container"),
      autoplay: true,
      loop: false,
      path: "/lottie/animated-avatar.json",
    });
  });

  return (
    <div className={styles.wrapper}>
      <div id="animated-avatar-container" className={styles.avatar} />
      <p>constructing ...</p>
    </div>
  );
};

export default HomePage;
