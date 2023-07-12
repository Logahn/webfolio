import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../../constants";
import "./navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="https://logahn.github.io/webfolio/">
          {" "}
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
          <a href="/webfolio">Home</a>
        </li>
        <li>
          <a href="/webfolio/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/webfolio/publications">Publications</a>
        </li>
        <li>
          <a href="/webfolio/certifications">Certifications</a>
        </li>
        <li>
          <a href="/webfolio/resume">Resume</a>
        </li>
        <li>
          <a href="/webfolio/blog">Blog</a>
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
                <a href="/webfolio">Home</a>
              </li>
              <li>
                <a href="/webfolio/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/webfolio/publications">Publications</a>
              </li>
              <li>
                <a href="/webfolio/certifications">Certifications</a>
              </li>
              <li>
                <a href="/webfolio/resume">Resume</a>
              </li>
              <li>
                <a href="/webfolio/blog">Blog</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
