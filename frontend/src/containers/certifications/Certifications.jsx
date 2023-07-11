import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./certifications.scss";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
      setCertifications(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text ">Certifications</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__certfications-certificate"
      >
        {certifications.map((certifications, index) => (
          <a
            href={certifications.certificateLink}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <div className="app__certfications-item app__flex" key={index}>
              <div className="app__certfications-img app__flex">
                <img
                  src={urlFor(certifications.imgUrl)}
                  alt={certifications.title}
                />
                <div className="overlayer"></div>
              </div>

              <div className="app__certfications-content">
                <h4 className="bold-text">{certifications.title}</h4>
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certifications, "app__certfications"),
  "certifications",
  "app__plix"
);
