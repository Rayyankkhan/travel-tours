import React, {useState} from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const NavBar = () => {
  const [active, setActive] = useState('navBar');

  //function of togglebar
  const showNav = () => {
    setActive('navBar activeNavBar')
  }
  //function of closenavbar
  const removeNavBar = () => {
    setActive('navBar ')
  }




  return (
   <section className="navBarSection">
    <header className="header flex">
      <div className="logoDiv">
        <a href="/" className="logo flex">
          <h1><SiYourtraveldottv className='icon'/>Travel.</h1>
        </a>
      </div>
      <div className={active}>
        <ul className="navList flex">
          <li className="navItems">
            <a href="/" className="navLink">Home</a>
          </li>
          <li className="navItems">
            <a href="/" className="navLink">Package</a>
          </li>
          <li className="navItems">
            <a href="/" className="navLink">About</a>
          </li>
          <li className="navItems">
            <a href="/" className="navLink">Pages</a>
          </li>
          <li className="navItems">
            <a href="/" className="navLink">News</a>
          </li>
          <li className="navItems">
            <a href="/" className="navLink">Contact</a>
          </li>
          <button className="btn">
            <a href='/'>
              Book Now
              </a>
            </button>
        </ul>
        <div onClick={removeNavBar} className="closeNavbar">
          <AiOutlineCloseCircle className="icon"/>
        </div>
      </div>
      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon"/>
      </div>
    </header>
   </section>
  )
}

export default NavBar
