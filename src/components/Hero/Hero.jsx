import React, { useContext } from 'react'
import './styles.css'
import { Navbar } from './navbar/Navbar'
import { MobileContext } from '../../App'

export const Hero = () => {

  const isMobile = useContext(MobileContext);

  return (
    isMobile ? <MobileView /> : <DesktopView />
  )
}


const DesktopView = () => {
  return (
    <div className='hero'>

        <div className="background">
          <div className="ornament"/>
        </div>

        <Navbar />

        <div className="content">
          <h1>
            Minimize your tabs.<br/>
            Find the trends!
          </h1>
          <p>
            Don't let your computer memories consumes all of those browser tabs.<br/>
            Findtrend lets you gather all of your favorite websites into one place.
          </p>

          <button className="getstarted-btn">Get Started 🔥</button>

        </div>

    </div>
  )
}

const MobileView = () => {
  return(
    <div className='hero'>

        <div className="background">
          <div className="ornament"/>
        </div>

        <Navbar />

        <div className="content">
          <h1>
            Minimize your tabs.<br/>
            Find the trends!
          </h1>
          <p>
            Don't let your computer memories consumes all of those browser tabs.<br/>
            Findtrend lets you gather all of your favorite websites into one place.
          </p>

          <button className="getstarted-btn">Get Started 🔥</button>

        </div>

    </div>
  )
}