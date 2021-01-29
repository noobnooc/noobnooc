import Lottie from "lottie-web";
import React, { useEffect } from "react";

import { motion } from "framer-motion";

const AVATAR_ANIMATION_DELAY = 500;

const HomePage = () => {
  useEffect(() => {
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
    <div className="relative min-h-screen flex justify-center items-center">
      <motion.div
        id="animated-avatar-container"
        style={{
          width: "5rem",
          height: "5rem",
        }}
        className="w-20 h-20 bg-black rounded-full"
        animate={{
          translateY: [0, -20, 0],
          transition: {
            duration: 5,
            ease: "easeInOut",
            loop: Infinity,
            times: [0, 0.5, 1],
            delay: 2,
          },
        }}
      ></motion.div>
    </div>
  );
};

export default HomePage;
