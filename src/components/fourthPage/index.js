import React from 'react'
import '../fourthPage/fourthPage.css'
import photo from '../../images/foto.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const fourth = () => {
  AOS.init();
  return (
    <div className='fourthPageContainer'>
        <p
        className='fourthPageTitle'
        id="realizacje"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
          NASZE REALIZACJE
        </p>
        <div className='fourthContainerPhotos'>
          <img src={photo} alt='realizacja' className='realizacja-zdj' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out"></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out"></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out"></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out"></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out"></img>
          <img src={photo} alt='realizacja' className='realizacja-zdj' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out"></img>
        </div>
    </div>
  )
}


export default fourth