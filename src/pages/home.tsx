import Lottie from "lottie-web";
import * as React from "react";

import styles from "./home.module.css";

const AVATAR_ANIMATION_DELAY = 500;

const HomePage = () => {
  React.useEffect(() => {
    let animation = Lottie.loadAnimation({
      container: document.querySelector("#animated-avatar-container"),
      autoplay: false,
      loop: false,
      path: "/lottie/animated-avatar.json",
    });

    setTimeout(() => {
      animation.play();
    }, AVATAR_ANIMATION_DELAY);
  });

  return (
    <div className={styles.wrapper}>
      <div id="animated-avatar-container" className={styles.avatar} />
      <p>Welcome</p>
    </div>
  );
};

export default HomePage;
