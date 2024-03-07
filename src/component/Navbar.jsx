import React from 'react'
import './main.css'
import {ReactComponent as Logo} from '../assests/Logo.svg'

const Navbar = () => {
  return (
    <>
    <div className='navbarwrapper'>
        <div className='logo'><Logo/></div>
        <div className='menus'>
        <span className='menuitem'>Crypto Taxes</span>
        <span className='menuitem'>Free Tools</span>
        <span className='menuitem'>Free Resourses</span>
        <span className='menuitembtn'>Get Started</span>
        </div>
    </div>
   
    </>
  )
}

export default Navbar