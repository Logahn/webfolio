import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./content.scss";

const KernelTrick = () => {
  return (
    <>
      <div className="app__hero app__flex">
        <h1 className="blog-header-text">Kernel Trick (Explained)</h1>

        <img src={images.kernelTrick_header} alt="svm_header" />
      </div>

      <div className="app__writeup">
        <p>
          Imagine you have a puzzle - it's got all sorts of shapes mixed up in
          it and we need to separate them into two distinct groups - circles and
          squares. But don't stress, we've got a secret weapon - the kernel
          trick. This trick is like a magic mirror that can transform the shapes
          and make them easier to separate.
          <br></br>
          It's really cool because it can take the circles and squares and
          change their colors, make them bigger or smaller, or even make them
          look like they're floating in the air! By using the kernel trick, we
          can draw a line or curve that separates the circles from the squares
          in a new way. It's like finding a secret path that only the magic
          mirror can show us.
        </p>
        <img src={images.kernelTrick_fig1} alt="svm_fig1" />
        <label>
          <a href="https://images.squarespace-cdn.com/content/v1/60bf6a0ed36614062037a08b/1632584076683-AV0U98J857F1H7ULSQV5/kernel.001.png">
            Figure 1: Kernel trick transforming the shapes for easier
            separation.
          </a>
        </label>
        <br></br>
        <p>
          Sometimes the shapes are so mixed up that we can't draw a straight
          line to separate them, but with the kernel trick, we can transform the
          shapes and make them easier to sort into their correct groups. It's a
          really helpful trick that makes solving puzzles and other problems a
          lot easier and more creative.
          <br></br>
          So, basically, the kernel trick is an amazing tool that helps us see
          the shapes in a new light and find a sneaky path to separate them.
          It's like a clever magician's trick that helps us solve problems in a
          really cool and creative way. We can use it to make the shapes look
          different and find a new way to separate them.
          <br></br>
          <br></br>
          It's just like having a magic mirror that can transform the puzzle
          pieces into a new space where they become easier to separate. With the
          kernel trick, we can find a new way to draw a line or curve that
          separates the circles from the squares. It's really amazing to see how
          it can take the shapes and make them look completely different. This
          trick is really helpful because sometimes the shapes are so mixed up
          that we can't draw a straight line to separate them. But with the
          kernel trick, we can transform the shapes and make them easier to sort
          into their correct groups. It's like a really clever cheat code that
          makes solving the puzzle a lot easier.
          <br></br>
          The kernel trick is like a magic mirror that helps us see the shapes
          in a new way and find a special path to separate them. It's a clever
          trick that helps us solve puzzles and other problems in a really cool
          and creative way. It's amazing how it can take the shapes and make
          them look completely different.
        </p>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(KernelTrick, "app__content"),
  "content",
  "app__plix"
);
