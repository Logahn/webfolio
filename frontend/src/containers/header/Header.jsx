import React, { useEffect } from "react";

import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { SocialMedia } from "../../components";

import "./header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  useEffect(() => {
    function handleMouseMove(e) {
      const layers = document.querySelectorAll(".layer");
      layers.forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app__header app__flex">
      <div className="layer">
        <img
          src={images.floaters1}
          data-speed="-12"
          alt="logo"
          className="layer"
        />
        <img
          src={images.floaters2}
          data-speed="-10"
          alt="logo"
          className="layer"
        />
        <img
          src={images.floaters3}
          data-speed="-5"
          alt="logo"
          className="layer"
        />
      </div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              src={images.icon}
              alt="profile_picture"
              className="profile_circle"
            />
          </motion.div>

          <div className="name app__flex">
            <p className="p-text">Adele Chinda</p>
            <div className="title app_flex">
              <p className="p-text">AI Developer</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
