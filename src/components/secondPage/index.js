import React from 'react'
import '.././secondPage/secondPage.css'
import CountUp from 'react-countup';
const secondPage = () => {
  return (
    <div className='secondPageContainer'>
        <div className='boxGrid' id="onas">
            <div className='box'>
                <h1 className='boxName'><CountUp end={20} duration={2}/></h1>
                <p className='boxTitle'>LAT W BRANŻY</p>
            </div>
            <div className='box'>
                <h1 className='boxName'><CountUp end={50} duration={2} className="thic"/> <span className='span'>+</span></h1>
                <p className='boxTitle'>PODSTAWIONYCH BUDYNKÓW</p>
            </div>
            <div className='box'>
                <h1 className='boxName'><CountUp end={80} duration={2}/> <span className='span'>+</span></h1>
                <p className='boxTitle'>WYKONANYCH REMONTÓW</p>
            </div>
            <div className='box'>
                <h1 className='boxName'><CountUp end={100} duration={2}/> <span className='span'>+</span></h1>
                <p className='boxTitle'>ZADOWOLONYCH KLIENTÓW</p>
            </div>
        </div>
    </div>
  )
}

export default secondPage