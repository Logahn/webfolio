import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./content.scss";

const CNNvsRNN = () => {
  return (
    <>
      <div className="app__hero app__flex">
        <h1 className="blog-header-text">CNN vs. RNN (Explained)</h1>

        <img src={images.cnnRnn_header} alt="svm_header" />
      </div>

      <div className="app__writeup">
        <p>
          CNNs and RNNs are two different types of super-smart helpers that
          computers use to understand and analyze information. Let's learn how
          they work!
          <br></br>
          <br></br>
          Picture this: you have this huge book with a ton of words on every
          page. It can be overwhelming, right? Well, CNNs and RNNs are like
          superheroes that make it easier for us to understand what's in the
          book.
          <br></br>
          <br></br>
          First up, we've got CNNs! These guys have special eyes that can look
          at pictures and figure out what's going on in them. Kinda like when
          you can tell if a picture has a cat or a dog in it. They look at small
          parts of the picture, like tiny squares, and use their special eyes to
          find important things, like shapes and colors. Then they put
          everything together to understand the whole picture. Pretty nifty,
          huh? They're especially good at recognizing things in pictures, like
          animals or people's faces. They basically help computers do what we do
          when we look at pictures!
          <br></br>
          <br></br>
          Next, we've got RNNs! These guys are like superheroes with super
          memory. They're really good at understanding things that happen in a
          sequence, like stories or songs. Kinda like how you can remember the
          order of the days in a week. When they read a story, they start at the
          beginning and read each word one by one. But the cool thing is that
          they remember the words they've read before! So when they read a new
          word, they think about the ones that came before it too. That's how
          they understand stories better. They're like super memory machines
          that help computers understand things in order!
          <br></br>
          <br></br>
          So to sum it up, CNNs help computers understand pictures by looking at
          small parts and finding important things, while RNNs have super memory
          that help computers understand things that happen in a sequence, like
          stories or songs. Both of these guys are really smart and help
          computers understand different types of information in special ways!
        </p>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(CNNvsRNN, "app__content"),
  "content",
  "app__plix"
);
