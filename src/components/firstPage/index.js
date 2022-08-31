import React from 'react'
import './../firstPage/firstPage.css'
import bg from '../../images/12.png'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
const First = () => {
  AOS.init();
  return (
    <div className='firstPageContainer' style={{overflow: "hidden"}}>
      <img src={bg} alt='background'></img>
      <div className='shade'></div>
      <div className='Navbar'>
        <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className='logoText'
        >
        BEL<span className='span'>DOM</span>
        </h1>
        <ul
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
          <li><Link to="onas" smooth={true} offset={0} duration={700}>O NAS</Link></li>
          <li><Link to="zajmujemy" smooth={true} offset={0} duration={900}>ZAJMUJEMY SIĘ</Link></li>
          <li><Link to="realizacje" smooth={true} offset={0} duration={1400}>REALIZACJE</Link></li>
          <li><Link to="kontakt" smooth={true} offset={0} duration={1600}>KONTAKT</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default First