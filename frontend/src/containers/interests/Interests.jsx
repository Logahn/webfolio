import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./interests.scss";

const Interests = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    const query = '*[_type == "interests"]';

    client.fetch(query).then((data) => {
      setInterests(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text ">Areas of Interests</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__interests-portfolio"
      >
        {interests.map((interests, index) => (
          <div className="app__interests-item app__flex" key={index}>
            <div className="app__interests-img app__flex">
              <img src={urlFor(interests.imgUrl)} alt={interests.name} />
              <div className="overlayer"></div>
            </div>

            <div className="app__interests-content app__flex">
              <h4 className="bold-text">{interests.area}</h4>
              <p className="p1-text" style={{ marginTop: 10 }}>
                {interests.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Interests, "app__interests"),
  "interests",
  "app__plix"
);
