import React from 'react'
import './Hero.css'
import portfoliopicture from '../../assets/portfoliopicture.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={portfoliopicture} alt="" className='hero-img'/>
        <h1><span>I'm Liam Ford,</span> student at the University of Colorado Boulder</h1>
        <p>Currently studying Computer Science with a minor in Business Administration</p>
        <div className='hero-action'>
          <a
            href="https://www.linkedin.com/in/liam-ford-81892128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-connect"
          >
            Connect With Me
          </a>
          <a
            href="/LiamFord-Resume.pdf"
            download="resume.pdf"
            className="hero-resume"
          >
            My Resume
          </a>
        </div>
    </div>
  )
}

export default Hero