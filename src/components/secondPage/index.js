import React from 'react'
import '.././secondPage/secondPage.css'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import 'aos/dist/aos.css';
const secondPage = () => {
    AOS.init();
    return (
    <div className='secondPageContainer'>
        <div className='boxGrid' id="onas">
            <div className='box'>
                <h1
                className='boxName'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <CountUp enableScrollSpy={true} start={0} end={20} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </h1>
                <p
                className='boxTitle'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    LAT W BRANŻY
                </p>
            </div>
            <div className='box'>
                <h1 className='boxName'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <CountUp enableScrollSpy="true" start={0} end={50} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                <span className='span'>+</span>
                </h1>
                <p
                className='boxTitle'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    POSTAWIONYCH BUDYNKÓW
                </p>
            </div>
            <div className='box'>
                <h1
                className='boxName'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <CountUp enableScrollSpy={true} start={0} end={80} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span className='span'>+</span>
                    </h1>
                <p
                className='boxTitle'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    WYKONANYCH REMONTÓW
                </p>
            </div>
            <div className='box'>
                <h1
                className='boxName'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    <CountUp enableScrollSpy={true} start={0} end={100} duration={2}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span className='span'>+</span>
                    </h1>
                <p
                className='boxTitle'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                    ZADOWOLONYCH KLIENTÓW
                </p>
            </div>
        </div>
    </div>
  )
}

export default secondPage