import React from 'react'
import './../firstPage/firstPage.css'
import bg from '../../images/bg.jpg'
import facebook from '../../images/facebook.png'
const First = () => {
  return (
    <div className='firstPageContainer'>
      <img src={bg} alt='background'></img>
      <div className='Navbar'>
        <h1 className='logoText'>BEL<span>DOM</span></h1>
        <ul>
          <li>O NAS</li>
          <li>ZAJMUJEMY SIĘ</li>
          <li>KONTAKT</li>
        </ul>
      </div>
    </div>
  )
}

export default First