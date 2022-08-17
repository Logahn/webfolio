import React from 'react'
import {BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className = "app__social">
        <div>
            <BsGithub />
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaFacebook />
        </div>
    </div>
  )
}

export default SocialMedia