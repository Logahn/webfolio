import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTootip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './skills.scss';

const Skills = () => {

  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
        });

        client.fetch(skillsQuery).then((data) => {
    setSkills(data);
      });
      }, []);

  

  return (
   <>
    <h2 className = "head-text">Skills & Experience</h2>

    <div className = "app__skills-container">
      <motion.div className = "app__skills-list">
        {skills.map((skills) => (
          <motion.div 
            whileInView = {{opacity: [0,1]}}
            transition = {{duration: 0.5}}
            className = "app__skills=item app_flex"
            key = {skills.name}
            >

              <div className= "app__flex style={{ backgroundColor: skill.bgColor }}">
                <img src = {urlFor(skills.icon)} alt = {skills.name}></img>
              </div>
              <p  className = "p-text">{skills.name}</p>
          </ motion.div>        
          ))}
      </motion.div>
    </div>
   </>
  )
}

export default AppWrap(Skills, 'skills');