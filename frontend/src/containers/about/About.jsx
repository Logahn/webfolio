import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./about.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setabouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setabouts(data);
    });
  }, []);

  return (
    <div className="app__about app__flex">
      <div className="app__about_card app__flex">
        <h5>Adele Chinda</h5>
        <h6>CS Student, Software Developer and AI/ML Researcher</h6>
        <h7 className="about-text">
          I am currently enrolled as a Computer Science student at Belgorod
          State University, actively pursuing a B.Sc degree. Additionally, I
          have acquired experience as a Software Developer and AI/ML Researcher,
          working with diverse programming languages and technologies. My
          passion lies in the creation of intelligent algorithms, and I am
          deeply enthusiastic about contributing to open source projects.
        </h7>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.05, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <a href={about.link} target="_blank" rel="noreferrer">
              <div whileInView={{ scale: [0, 1] }} className="app__flex">
                <img src={urlFor(about.imgUrl)} alt={about.title} />
              </div>
            </a>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__plix");
