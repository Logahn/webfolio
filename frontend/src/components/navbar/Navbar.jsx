import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <a href="http://localhost:3000/#home">  <img src={images.adele_logo} alt="logo" />
      </a>
       

      </div>
      <ul className="app__navbar-links">
        {['home', 'about','experience', 'projects', 'skills', 'contact'].map((item) => ( //TODO: ADD RESUME AND RESEARCH WORK HERE
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  {/* <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a> */}
                  <Link activeClass="active" to={item} spy={true} smooth={true} offset={1000} duration={500} onSetActive={this.handleSetActive} onClick={() => setToggle(false)}>
                    {item} </Link>

                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;