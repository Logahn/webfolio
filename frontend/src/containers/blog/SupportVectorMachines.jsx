import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./content.scss";

const SupportVectorMachines = () => {
  return (
    <>
      <div className="app__hero app__flex">
        <h1 className="blog-header-text">
          Support Vector Machines(Simplified)
        </h1>

        <img src={images.svm_header} alt="svm_header" />
      </div>

      <div className="app__writeup">
        <p>
          Support Vector Machines (SVMs) are like superheroes that can look at
          things and tell you what they are. Let's say you have some balls, some
          are red and some are blue, and you want to separate them. SVMs are
          really good at making an invisible line to keep them apart. But here's
          the best part: SVMs don't just draw any line. They draw the best line
          that keeps the red and blue balls as far away from each other as
          possible. This line is called the "hyperplane." It's like a superhero
          wall that keeps the red and blue balls on different sides.
        </p>
        <img src={images.svm_fig1} alt="svm_fig1" />
        <label>
          <a href="https://miro.medium.com/v2/resize:fit:1280/1*ZbwUYfvCpfMUtgdsatZdAA.png">
            Figure 1: SVMs dividing the red and blue balls using the superhero
            wall (hyperplane).
          </a>
        </label>
        <br></br>
        <br></br>
        <p>
          Now, the balls that are closest to the line are really important.
          These special balls are called "support vectors." They help the SVM
          decide where to draw the line. The SVM wants to make sure that the
          line is as far away as possible from these support vectors. It's like
          the support vectors are the superheroes helping the SVM find the best
          place for the line.
          <br></br>
          <br></br>
          Sometimes, the balls are all mixed up together, and they're not in a
          straight line. That's when the SVM uses a special power called the
          "kernel trick." It's like using magic to transform the balls into a
          different space where they become easier to separate. This trick helps
          the SVM draw a curvy line or even a wiggly line if needed.
          <br></br>
        </p>
        <img src={images.svm_fig2} alt="svm_fig2" />
        <label>
          <a href="https://miro.medium.com/v2/resize:fit:1144/1*C1tN-IxPjg6fwAHKkJthEw.png ">
            Figure 2: SVM dividing balls with a curvy line.
          </a>
        </label>
        <br></br>
        <p>
          So, with the help of the superheroes (support vectors) and their
          special powers (kernel trick), the SVM can look at the balls, draw the
          best line or shape to keep them separated, and help us know if a new
          ball is red or blue based on where it is in relation to the line. SVMs
          are really smart and can help us solve all sorts of problems, not just
          with balls, but also with other things like pictures or words. These
          amazing machines can be used to help with image classification, speech
          recognition, and even in the stock market!
        </p>
        <img src={images.svm_fig3} alt="svm_fig3" />
        <label>
          <a href="https://miro.medium.com/v2/resize:fit:1400/1*zWzeMGyCc7KvGD9X8lwlnQ.png">
            Figure 3: SVM using super power (kernel trick) to transform the
            balls in a different space.
          </a>
        </label>

        <p>
          The cool thing is that SVMs are not just for separating two groups of
          things. They can also be used for more complicated problems. For
          example, what if you have three groups of balls: red, blue, and green?
          The SVM can still help you separate them by drawing two lines instead
          of one. And what if you have more than three groups of balls? The SVM
          can still help you by using something called "multi-class
          classification."
          <br></br>
          <br></br>
          Another great thing about SVMs is that they're really easy to
          understand. You don't need to be an expert in math or computer science
          to understand how they work. All you need is a basic understanding of
          algebra and geometry. But wait, there's more! SVMs are also really
          fast. They can quickly analyze large amounts of data and make
          predictions in real-time. This makes them a great tool for businesses
          that need to make decisions quickly.
        </p>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(SupportVectorMachines, "app__content"),
  "content",
  "app__plix"
);
