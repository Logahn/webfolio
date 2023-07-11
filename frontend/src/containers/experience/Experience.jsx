import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./experience.scss";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xp, setExperience] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "xp"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Professional Experience</h2>
      {xp.length && (
        <>
          <div className="app__experience-item app__flex">
            <a
              href={xp[currentIndex].companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                // whileInView={{ scale: [0.9,1] }}
                whileHover={{ scale: [0.9, 1] }}
                transition={{ duration: 0.75 }}
                className="app__flex"
              >
                <img
                  src={urlFor(xp[currentIndex].imgurl)}
                  alt={xp[currentIndex].name}
                />
              </motion.div>
            </a>
            <div className="app__experience-content">
              <p className="p-text">{xp[currentIndex].description}</p>
              <div>
                <h4 className="bold-text">{xp[currentIndex].company}</h4>
                <h6 className="p-text">{xp[currentIndex].position}</h6>
                <h5 className="p3-text">{xp[currentIndex].date}</h5>
              </div>
              <div className="app__projects-tag app__flex">
                <div className="app__projects-tag0 app__flex">
                  <h7 className="p1-text">{xp[currentIndex].tags[0]}</h7>
                </div>
                <div className="app__projects-tag1 app__flex">
                  <h7 className="p1-text">{xp[currentIndex].tags[1]}</h7>
                </div>
                <div className="app__projects-tag2 app__flex">
                  <h7 className="p1-text">{xp[currentIndex].tags[2]}</h7>
                </div>
              </div>
            </div>
          </div>

          <div className="app__experience-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? xp.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === xp.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__plix"
);
