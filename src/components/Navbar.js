import React, { useState } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [hamburger , setHamburger] = useState(false)
  return (
    <header>
        <nav className='navbar'>
            <div className='left-nav'>Himanshu's portfolio</div>
            <div className='right-nav'>
                <ul className={hamburger? " mobile-nav-link" : "nav-link"}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                   <li> <NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    
                </ul>
                
            </div>
            <div className='hamburger'>
                <i class="fa-solid fa-bars" onClick={()=>setHamburger(!hamburger)}></i>
                </div>
        </nav>
    </header>
  )
}

export default Navbar
