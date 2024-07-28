import React from 'react';
import './Navbar.css';
import i from '../../assets/i.png';
import {Link} from 'react-scroll';
import { FcContacts } from "react-icons/fc";

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={i} alt="Logo" className='logo' />
      <div className='desktopMenu'>
      <Link className='desktopMenuItems'>Home</Link>
      <Link className='desktopMenuItems'>Projects</Link>
      <Link className='desktopMenuItems'>Education</Link>
      <Link className='desktopMenuItems'>Resume</Link>
      </div>
      <button className='desktopMenuBtn'>
      <FcContacts className='desktopMenuIcon' />Contact Me </button>
    </nav>
  )
}

export default Navbar;
