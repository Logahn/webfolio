import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./blog.scss";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = '*[_type == "blog"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text ">Blog</h2>

      <div className="app__about__blog_card app__flex">
        <p className="blog-header-text">
          Hey there!
          <span role="img" aria-label="Waving Hand">
            &#x1F44B;
          </span>
          <br></br> I'm Adele and I'm so excited to have you on my blog! As a
          machine learning and artificial intelligence enthusiast, I can't wait
          to share my knowledge with you. My blog has two goals: to document my
          learning journey and to provide a platform for my thoughts and
          reflections.
          <br></br>It's like a personal journal that I've decided to make public
          because I believe in open and honest criticism. So please, share your
          opinions and let's learn from each other!
        </p>
      </div>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blogs-portfolio"
      >
        {blogs.map((blogs, index) => (
          <a
            className="app__blogs-item "
            href={blogs.link}
            style={{ textDecoration: "none" }}
            target="_self"
            rel="noreferrer"
          >
            <div className="app__flex" key={index}>
              <div className="app__blogs-img app__flex">
                <img src={urlFor(blogs.imgUrl)} alt={blogs.topic} />
                <div className="overlayer"></div>
              </div>

              <div className="app__blogs-content">
                <h4 className="bold-text">
                  {blogs.topic} || {blogs.date}
                </h4>
                <p className="p1-text" style={{ marginTop: 10 }}>
                  {blogs.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Blog, "app__blogs"), "blogs", "app__plix");
