import React from 'react'
import '../fourthPage/fourthPage.css'
import photo from '../../images/foto.jpg'
const fourth = () => {
  return (
    <div className='fourthPageContainer'>
        <p className='fourthPageTitle' id="realizacje">NASZE REALIZACJE</p>
        <div className='fourthContainerPhotos'>
          <img src={photo} alt='realizacja' className='realizacja-zdj'></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj'></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj'></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj'></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj'></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj'></img>
        </div>
    </div>
  )
}

export default fourth