import React from 'react'
import '../../Styles/Navbar.css'
import title from '../../assets/isaac-title.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav id='navbarWrapper' className=''>
      <div id='navbar'>
        <div className="titleImageWrapper">
          <img className="titleImage" src={title} alt="image-title" />
        </div>
        <menu id='navMenuItems' className='menuContainer'>
          <Link className='menuItem' to="/about">About</Link>
          <Link className='menuItem' to='/work'>Work</Link>
          <Link className='menuItem' to='/contact'>Contact</Link>
        </menu>
      </div>

    </nav>
  )
}

export default Navbar