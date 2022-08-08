import React from 'react'
import '.././secondPage/secondPage.css'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
const secondPage = () => {
    return (
    <div className='secondPageContainer'>
        <div className='boxGrid' id="onas">
            <div className='box'>
                <h1 className='boxName'>
                    <CountUp enableScrollSpy={true} start={0} end={20} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <p className='boxTitle'>LAT W BRANŻY</p>
            </div>
            <div className='box'>
                <h1 className='boxName'>
                    <CountUp enableScrollSpy="true" start={0} end={50} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                <span className='span'>+</span>
                </h1>
                <p className='boxTitle'>POSTAWIONYCH BUDYNKÓW</p>
            </div>
            <div className='box'>
                <h1 className='boxName'>
                    <CountUp enableScrollSpy={true} start={0} end={80} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span className='span'>+</span>
                    </h1>
                <p className='boxTitle'>WYKONANYCH REMONTÓW</p>
            </div>
            <div className='box'>
                <h1 className='boxName'>
                    <CountUp enableScrollSpy={true} start={0} end={100} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span className='span'>+</span>
                    </h1>
                <p className='boxTitle'>ZADOWOLONYCH KLIENTÓW</p>
            </div>
        </div>
    </div>
  )
}

export default secondPage