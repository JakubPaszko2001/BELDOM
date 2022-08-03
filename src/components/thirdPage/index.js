import React from 'react'
import data from '../thirdPage/data'
import '../thirdPage/thirdPage.css'
const thirdPage = () => {
  const mapa = data.map(item => {
    return (
      <div className='card' key={item.id}>
      <div className='essa'>
        <img src={item.image} className='ess' alt='eo'></img>
      </div>
      <div>
        <p className='space'>{item.title}</p>
      </div>
      <div>
        <p className='cardText'>{item.text}</p>
      </div>
    </div>
    )
  })
  return (
    <div className='thirdPageContainer'>
        <p className='thirdPageTittle'>CZYM SIĘ ZAJMUJEMY?</p>
        <div className='cardContainer'>
          {mapa}
        </div>
    </div>
  )
}

export default thirdPage