import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import './about.scss';
import {urlFor, client} from '../../client';
import { AppWrap, MotionWrap} from '../../wrapper';

const About = () => {
  const [abouts, setabouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data)=>{
      setabouts(data);
    })
  }, []);
  
  return (
    <>
    {/* <h2
      className = 'head-text'>
        About me
    </h2> */}
    <div className="app__about_card app__flex">
      <h5>
        Adele Chinda
      </h5>
      <h6>
        CS Student, Software Developer, Mobile Developer, and AI/ML Researcher
      </h6>
    <h7
      className = 'about-text'>
        I'm a currently a CS student based in Belgorod.
        <br/>
        My interests include software development, 
        artificial intelligence, machine learning, computer vision, 
        and robotics programming.
        <br/>
        Besides developing intelligent algoithms,  
        I love playing basketball, 
        swimming and learning new natural languages.
    </h7>

    </div>

    <div className = "app__profiles">
      {abouts.map((about, index) =>(
        
        <motion.div
          whileInView = {{opacity:1}}
          whileHover = {{scale: 0.9}}
          transition = {{duration: 0.5, type: 'tween'}}
          className = "app__profile-item"
          key = {about.title + index}
          >

            <a href={about.link} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    className="app__flex"
                  >
            <img src = {urlFor(about.imgUrl)} alt = {about.title}/>
                  </motion.div>
                </a>
            <h2 className = "bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className = "p-text" style={{marginTop: 10}}>{about.description}</p>

        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
   'about',
   "app__plix"
  );  