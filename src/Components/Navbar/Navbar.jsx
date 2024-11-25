import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/logo.png'


const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='nav-logo'/>
        <ul className="ul nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Portfolio</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
        <a
          href="https://www.linkedin.com/in/liam-ford-81892128a/" 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-connect"
        >
          Connect With Me
        </a>

    </div>

  )
}

export default Navbar