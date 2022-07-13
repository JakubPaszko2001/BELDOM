import React from 'react'
import '.././secondPage/secondPage.css'
const secondPage = () => {
  return (
    <div className='secondPageContainer'>
        <div className='box'>
            <h1 className='boxName'>20</h1>
            <p className='boxTitle'>LAT W BRANŻY</p>
        </div>
        <div className='box'>
            <h1 className='boxName'>50+</h1>
            <p className='boxTitle'>PODSTAWIONYCH BUDYNKÓW</p>
        </div>
        <div className='box'>
            <h1 className='boxName'>80+</h1>
            <p className='boxTitle'>WYKONANYCH REMONTÓW</p>
        </div>
        <div className='box'>
            <h1 className='boxName'>100+</h1>
            <p className='boxTitle'>ZADOWOLONYCH KLIENTÓW</p>
        </div>
    </div>
  )
}

export default secondPage