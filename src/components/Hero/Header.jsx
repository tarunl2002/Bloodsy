import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import MenuToggle from '../MenuToggle'

const Header = () => {
  return (
    
    <div className="header"><img src={Logo} alt="logo" />
    <div id="menuToggle">
    <i class="fa-solid fa-bars" onClick={<MenuToggle/>}></i>
    <ul className='header-menu' id="menu">
    <i class="fa-solid fa-xmark"></i>
        <li className='header-menu-item'>
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className='header-menu-item'>
          <Link to="/view" className='nav-link'>View Bloods</Link>
        </li>
        <li className='header-menu-item'>
          <Link to="/create" className='nav-link'>Add Blood</Link>
        </li>
        <li className='header-menu-item'>
          <Link to="/doner" className='nav-link'>Become a Doner</Link>
        </li>
        
    </ul>
    </div>
    </div>
    
  )
}

export default Header
