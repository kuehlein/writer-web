'use strict'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'


// temporary navbar (look into semantic ui navbar)

const Navbar = () => (
  <header>
    <Link className='logo' to='/'><img src='smoll-gourd.png'/></Link>
    <div className='nav-title'>WRITER WEB</div>
    <nav className='nav-option'>
        <div>
          <NavLink to='/web'>Web</NavLink>
        </div>
        <div>
          <NavLink to='/projects'>Projects</NavLink>
        </div>
    </nav>
  </header>
)


export default Navbar
