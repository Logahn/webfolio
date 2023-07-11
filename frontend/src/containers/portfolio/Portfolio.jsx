import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./portfolio.scss";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const query = '*[_type == "portfolios"]';

    client.fetch(query).then((data) => {
      setPortfolios(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Portfolio</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__portfolio-portfolio"
      >
        {portfolios.map((portfolio, index) => (
          <div className="app__portfolio-item app__flex" key={index}>
            <a href={portfolio.link} target="_blank" rel="noreferrer">
              <motion.div
                // whileHover={{ scale: [0.9, 1] }}
                // transition={{ duration: 0.75 }}
                className="app__portfolio-img app__flex"
              >
                <img src={urlFor(portfolio.imgUrl)} alt={portfolio.title} />
                <div className="overlayer"></div>
              </motion.div>
            </a>

            <div className="app__portfolio-content">
              <a
                href={portfolio.link}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="bold-text">{portfolio.title}</h4>
              </a>

              <p className="p1-text" style={{ marginTop: 10 }}>
                {portfolio.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Portfolio, "app__portfolio"),
  "portfolio",
  "app__plix"
);
