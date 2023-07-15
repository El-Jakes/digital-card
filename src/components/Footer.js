import React from 'react'
import twitterIcon from '../images/twitter-icon.png'
import githubIcon from '../images/github-icon.png'
import facebookIcon from '../images/facebook-icon.png'
import instagramIcon from '../images/instagram-icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <img src={twitterIcon} alt="twitter logo linking to Babjide's twitter profile" />
      <img src={facebookIcon} alt="facebook logo linking to Babjide's facebook profile" />
      <img src={instagramIcon} alt="instagram logo linking to Babjide's instagram profile" />
      <img src={githubIcon} alt="github logo linking to Babjide's github profile" />
    </div>
  )
}

export default Footer