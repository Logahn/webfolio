import React from 'react'
import {BsTwitter, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

import './socialMedia.scss';

const SocialMedia = () => {
  return (
    <div className = "app__social">
        <div>
            <a href="https://github.com/Logahn" target="_blank" rel="noreferrer"
            className='github app__social'> <BsGithub /></a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/adele-chinda-b6b284192/" target="_blank" rel="noreferrer"
        className='linkedin app__social'> <BsLinkedin /></a>
        </div>
        <div>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"
        className='twitter app__social'> <BsTwitter /></a>
        </div>
        <div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className='instagram app__social'> <BsInstagram /></a>
        </div>
        <div>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"
        className='facebook app__social'> <FaFacebook /></a>
        </div>
    </div>
  )
}

export default SocialMedia