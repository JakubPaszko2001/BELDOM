import React from 'react'
import '../Navbar/Navbar.css'
import photo from '../../images/facebook.png'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1 className='logo_text'>BEL<span>DOM</span></h1>
        <ul>
            <li>O NAS</li>
            <li>ZAJMUJEMY SIĘ</li>
            <li>KONTAKT</li>
        </ul>
        <img className='logo' src={photo} alt='facebook photo'></img>
    </div>
  )
}

export default Navbar