import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left-nav'>Himanshu's portfolio</div>
            <div className='right-nav'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                   <li> <NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact me</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
