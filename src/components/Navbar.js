import React from 'react';
import { NavLink } from "react-router-dom";
import '../Styling/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink exact to='/' className='nav_logo'>
            {/* <img
            src=''
            alt='' /> */}

            <h1 className='nav_img'>LOGO</h1>
            </NavLink>

            <ul className='nav_menu'>
                <li className='nav_item'>
                    <NavLink exact to ='My-trips' className='nav_link'>MY TRIPS</NavLink>
                </li>
                <li className='nav_item'> 
                    <NavLink exact to='Explore' className='nav_link'>EXPLORE</NavLink>
                </li>
                <li className='nav_item'>
                    <NavLink eaxct to ='About-us' className='nav_link'>ABOUT US</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
