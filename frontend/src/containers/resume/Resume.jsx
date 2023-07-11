import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import { images } from "../../constants";
import "./resume.scss";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Resume = () => {
  return (
    <>
      <h2 className="head-text">Resume</h2>
      <div>
        <iframe
          className="pdf-box"
          title="Resume pdf"
          style={styles}
          src={images.resume}
          width="900px"
          height="900px"
          frameborder="0"
          scrolling="yes"
        />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Resume, "app__portfolio"),
  "resume",
  "app__plix"
);
