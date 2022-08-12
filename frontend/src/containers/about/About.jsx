import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import './about.scss';
import {images}from '../../constants';
import {urlFor, client} from '../../client';

// const abouts =[
//   {title : "AI Development", description: "I am a certified web developer", imgUrl: images.about01},
//   {title : "Mobile Development", description: "I am a certified web developer", imgUrl: images.about02},
//   {title : "Backend Development", description: "I am a certified web developer", imgUrl: images.about03},
//   {title : "UI/UX", description: "I am a certified web developer", imgUrl: images.about04},
//   // {title : "Amazon Cloud Developer", description: "I am a certified web developer", imgUrl: images.amazon},
//   // {title : "Bolt Developer", description: "I am a certified web developer", imgUrl: images.bolt},
// ]; 
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
    <h2
      className = 'head-text'>
        I know that
        <span> Good Dev </span>
        <br/>
        means
        <span> Good Money</span>
    </h2>
    <div className = "app__profiles">
      {abouts.map((about, index) =>(
        <motion.div
          whileInView = {{opacity: 1}}
          whileHover = {{scale: 1.1}}
          transition = {{duration: 0.5, type: 'tween'}}
          className = "app__profile-item"
          key = {about.title + index}
          >
            <img src = {urlFor(about.imgUrl)} alt = {about.title}/>
            <h2 className = "bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className = "p-text" style={{marginTop: 10}}>{about.description}</p>

        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About

//TODO: Merge into develop branch