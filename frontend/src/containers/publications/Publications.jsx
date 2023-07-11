import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { images } from "../../constants";
import "./publications.scss";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "publications"]';

    client.fetch(query).then((data) => {
      setPublications(data);
    });
  }, []);
  useEffect(() => {
    const query = '*[_type == "conferences"]';

    client.fetch(query).then((data) => {
      setConferences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Publications and Conferences</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__publications-publications"
      >
        <div className="starters">
          <img src={images.publicationIcon} alt="logo" />
          <h3 className="head-text">Publications</h3>
        </div>
        {publications.map((publication, index) => (
          <div className="app__publications-item app__flex" key={index}>
            <div className="app__publications-content">
              <a
                href={publication.link}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="bold-text"> {publication.article}</h4>
              </a>

              <author className="authors" style={{ marginTop: 10 }}>
                {publication.authors}
              </author>
              <journal className="p1-text" style={{ marginTop: 10 }}>
                {publication.journal}
              </journal>
              <volume className="p1-text" style={{ marginTop: 10 }}>
                {publication.volume}
              </volume>
              <date className="p1-text" style={{ marginTop: 10 }}>
                Publication year:
                {publication.date}
              </date>
            </div>
          </div>
        ))}
        <div className="starters">
          <img src={images.conferenceIcon} alt="logo" />
          <h3 className="head-text">Conferences</h3>
        </div>
        {conferences.map((conference, index) => (
          <div className="app__publications-item app__flex" key={index}>
            <div className="app__conferences-content">
              <a
                href={conference.link}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="bold-text"> {conference.title}</h4>
              </a>

              <organizer className="p1-text" style={{ marginTop: 10 }}>
                Organized by: {conference.organizer}
              </organizer>
              <location className="p1-text" style={{ marginTop: 10 }}>
                Location: {conference.location}
              </location>
              <date className="p1-text" style={{ marginTop: 10 }}>
                {conference.date}
              </date>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Publications, "app__publications"),
  "publications",
  "app__plix"
);
