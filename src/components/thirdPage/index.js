import React from 'react'
import data from '../thirdPage/data'
import '../thirdPage/thirdPage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const thirdPage = () => {
  AOS.init();
  const mapa = data.map(item => {
    return (
      <div
      className='card'
      key={item.id}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      >
          <div className='essa cardSpace'>
            <img src={item.image} className='ess' alt='eo'></img>
          </div>
          <div className='cardSpace'>
            <p className='cardTitle'>{item.title}</p>
          </div>
          <div className='cardSpace'>
            <p className='cardText'>{item.text}</p>
          </div>
      </div>
    )
  })
  return (
    <div className='thirdPageContainer' id="zajmujemy">
        <p
        className='thirdPageTittle'
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
          CZYM SIĘ ZAJMUJEMY?
        </p>
        <div className='cardContainer'>
          {mapa}
        </div>
    </div>
  )
}

export default thirdPage