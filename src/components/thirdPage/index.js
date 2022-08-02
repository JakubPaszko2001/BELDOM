import React from 'react'
import '../thirdPage/thirdPage.css'
import roof from '../../images/roof.png'
import fabric from '../../images/fabric.png'
import roof2 from '../../images/roof2.png'
const thirdPage = () => {
  return (
    <div className='thirdPageContainer'>
        <p className='thirdPageTittle'>CZYM SIĘ ZAJMUJEMY?</p>
        <div className='cardContainer'>
          <div className='card'>
            <div className='essa'>
              <img src={roof} className='ess' alt='eo'></img>
            </div>
            <p className='space'>Krycie dachów</p>
            <p className='cardText'>zewnętrzna warstwa dachu, narażona na działanie warunków atmosferycznych. Pokrycia można wy konać zarówno z materiałów naturalnych oraz sztucznych różniących się od siebie wieloma charakterystykami.</p>
          </div>
          <div className='card'>
            <div className='essa'>
              <img src={fabric} className='ess' alt='eo'></img>
            </div>
            <p className='space'>Krycie dachów</p>
            <p className='cardText'>zewnętrzna warstwa dachu, narażona na działanie warunków atmosferycznych. Pokrycia można wy konać zarówno z materiałów naturalnych oraz sztucznych różniących się od siebie wieloma charakterystykami.</p>
          </div>
          <div className='card'>
            <div className='essa'>
              <img src={roof2} className='ess' alt='eo'></img>
            </div>
            <p className='space'>Krycie dachów</p>
            <p className='cardText'>zewnętrzna warstwa dachu, narażona na działanie warunków atmosferycznych. Pokrycia można wy konać zarówno z materiałów naturalnych oraz sztucznych różniących się od siebie wieloma charakterystykami.</p>
          </div>
          <div className='card'>
            <div className='essa'>
              <img src={roof} className='ess' alt='eo'></img>
            </div>
            <p className='space'>Krycie dachów</p>
            <p className='cardText'>zewnętrzna warstwa dachu, narażona na działanie warunków atmosferycznych. Pokrycia można wy konać zarówno z materiałów naturalnych oraz sztucznych różniących się od siebie wieloma charakterystykami.</p>
          </div>
          <div className='card'>
            <div className='essa'>
              <img src={roof} className='ess' alt='eo'></img>
            </div>
            <p className='space'>Krycie dachów</p>
            <p className='cardText'>zewnętrzna warstwa dachu, narażona na działanie warunków atmosferycznych. Pokrycia można wy konać zarówno z materiałów naturalnych oraz sztucznych różniących się od siebie wieloma charakterystykami.</p>
          </div>
          <div className='card'>
            <div className='essa'>
              <img src={roof} className='ess' alt='eo'></img>
            </div>
            <p className='space'>Krycie dachów</p>
            <p className='cardText'>zewnętrzna warstwa dachu, narażona na działanie warunków atmosferycznych. Pokrycia można wy konać zarówno z materiałów naturalnych oraz sztucznych różniących się od siebie wieloma charakterystykami.</p>
          </div>
        </div>
    </div>
  )
}

export default thirdPage