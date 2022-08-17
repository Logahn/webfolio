import React from 'react'
import {BsTwitter, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

import './socialMedia.scss';

const SocialMedia = () => {
  return (
    <div className = "app__social">
        <div>
            <a href="https://github.com/Logahn"
            className='github app__social'> <BsGithub /></a>
        </div>
        <div>
        <a href="https://linkedin.com"
        className='linkedin app__social'> <BsLinkedin /></a>
        </div>
        <div>
        <a href="https://twitter.com"
        className='twitter app__social'> <BsTwitter /></a>
        </div>
        <div>
            <a href="https://instagram.com"
            className='instagram app__social'> <BsInstagram /></a>
        </div>
        <div>
        <a href="https://facebook.com"
        className='facebook app__social'> <FaFacebook /></a>
        </div>
    </div>
  )
}

export default SocialMedia