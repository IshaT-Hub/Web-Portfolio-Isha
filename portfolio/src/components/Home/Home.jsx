import React from 'react';
import './Home.css';
import myPho from '../../assets/myPho.jpg'; 
import {Link} from 'react-scroll';
import { FaShoppingBag } from "react-icons/fa";

const Home = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello!!!</span>
            <span className='introText'>I'am <span className='introName'>Isha Tiwari</span>Software Developer</span>
            <p className='introPara'>I am a skilled and passionate Software Developer with experience in creating visually appealing and user-friendly websites.</p>
            <Link><button className='btn'><FaShoppingBag className='homeIcon'/>Hire Me</button></Link>
        </div>
        <img src={myPho} alt= 'myPhoto' className='photo' />
    </section>
  )
}

export default Home