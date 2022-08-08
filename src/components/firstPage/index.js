import React from 'react'
import './../firstPage/firstPage.css'
import bg from '../../images/12.png'
import {Link} from 'react-scroll'
const First = () => {
  return (
    <div className='firstPageContainer'>
      <img src={bg} alt='background'></img>
      <div className='shade'></div>
      <div className='Navbar'>
        <h1 className='logoText'>BEL<span className='span'>DOM</span></h1>
        <ul>
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