import React from 'react'
import './About.css'
import cpp from '../../assets/cpp_img.png'
import python from '../../assets/python_img.png'
import c_img from '../../assets/c_img.png'
import react from '../../assets/react_img.png'
import js_img from '../../assets/js_img.png'
import css_img from '../../assets/css_img.png'
import html_img from '../../assets/html_img.png'
import tall_img from '../../assets/portfoliopicturetall.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={tall_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am originally from Marin County CA and am currently located in Boulder CO. I have a passion for technology and am always looking to further my skills in programming and software development.</p>
                    <h3>SKILLS</h3>
                </div>
                <div className="about-skills">
                    <div className="skill-tile">
                        <img src={cpp} alt="C++" />
                        <h3>C++</h3>
                    </div>
                    <div className="skill-tile">
                        <img src={c_img} alt="C" />
                        <h3>C</h3>
                    </div>
                    <div className="skill-tile">
                        <img src={react} alt="React JS" />
                        <h3>React JS</h3>
                    </div>
                    <div className="skill-tile">
                        <img src={python} alt="Python" />
                        <h3>Python</h3>
                    </div>
                    <div className="skill-tile">
                        <img src={js_img} alt="JavaScript" />
                        <h3>JavaScript</h3>
                    </div>
                    <div className="skill-tile">
                        <img src={css_img} alt="CSS" />
                        <h3>CSS</h3>
                    </div>
                    <div className="skill-tile">
                        <img src={html_img} alt="HTML" />
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3.2+</h1>
                <p>GPA</p>
            </div>
        </div>
    </div>
  )
}

export default About