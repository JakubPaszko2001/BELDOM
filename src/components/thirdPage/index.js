import React from 'react'
import data from '../thirdPage/data'
import '../thirdPage/thirdPage.css'
const thirdPage = () => {
  const mapa = data.map(item => {
    return (
      <div className='card' key={item.id}>
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
    <div className='thirdPageContainer'>
        <p className='thirdPageTittle' id="zajmujemy">CZYM SIĘ ZAJMUJEMY?</p>
        <div className='cardContainer'>
          {mapa}
        </div>
    </div>
  )
}

export default thirdPage