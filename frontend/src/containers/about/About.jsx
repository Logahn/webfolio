import React, {useState, useEffect} from 'react';
import motion from 'framer-motion';

import './about.scss';

const abouts =[
  {title : "AI Development", description: "I am a certified web developer", imgUrl: ''},
  {title : "Mobile Development", description: "I am a certified web developer", imgUrl: ''},
  {title : "Backend", description: "I am a certified web developer, imgUrl: ''"},
  {title : "UI/UX", description: "I am a certified web developer", imgUrl: ''},
]; 
const About = () => {
  return (
    <>
    <h2
      className = 'head-text'>
        I know that
        <span>Good design</span>
        <br/>
        means
        <span>Good business</span>
    </h2>
    <div className = "app__profiles">
      {abouts.map((about, index) =>(
        <motion.div
          whileInView = {{opacity: 1}}
          whileHover = {{scale: 1.1}}
          transition = {{duration: 0.5, type: 'tween'}}
          >
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About