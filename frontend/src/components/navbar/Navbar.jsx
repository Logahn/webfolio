import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="https://logahn.github.io/webfolio/">
          <img src={images.adele_logo} alt="logo" />
        </a>
      </div>
      {/* <ul className="app__navbar-links">
        {[
          "home",
          "experience",
          "projects",
          "contact",
          "portfolio",
          // "publications",
          // "resume",
        ].map(
          (
            item //TODO: ADD RESUME AND RESEARCH WORK HERE
          ) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul> */}

      <ul className="app__navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <div
            whileInView={{ x: [300, 0] }}
            // transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {/* <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "contact",
                "portfolio",
                "publications",
                "resume",
              ].map((item) => (
                <li key={item}>
                  {/* <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a> */}
            {/* <Link
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={1000}
                    duration={500}
                    onSetActive={this.handleSetActive}
                    onClick={() => setToggle(false)}
                  >
                    {item}{" "}
                  </Link> */}
            {/* </li>
              ))}
            </ul> */}
            <ul className="app__navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/publications">Publications</Link>
              </li>
              <li>
                <Link to="/certifications">Certifications</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
