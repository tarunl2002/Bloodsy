import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    
    <div className="header"><img src={Logo} alt="logo" />
    <ul className='header-menu'>
        <li className='header-menu-item'>Home</li>
        <li className='header-menu-item'>Why us</li>
        <li className='header-menu-item'>Become a Doner</li>
    </ul>
    </div>
    
    
  )
}

export default Header
