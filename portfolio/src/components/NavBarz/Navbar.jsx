import React from 'react';
import './Navbar.css';
import i from '../../assets/i.png';
import t from '../../assets/t.png'
import {Link} from 'react-scroll';
import { FcContacts } from "react-icons/fc";

export const Navbar = () => {
  return (
    <nav className='navbar'>
    <div>
      <img src={i} alt="Logo" className='logo' />
      <img src={t} alt="Logo" className='logo' />
    </div>
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
