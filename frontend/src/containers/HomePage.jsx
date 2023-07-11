import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Interests from "./interests/Interests";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <About />
      <Interests />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
