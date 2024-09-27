import React from 'react'
import './styles.css'

export const SubFeatures = () => {
  return (
    <div className='subfeatures'>
        
        <h1>All platforms connect to Findtrend</h1>

        <div className="platforms">
          <img src="./images/platforms/facebook.svg" alt="" className='platform'/>
          <img src="./images/platforms/twitter.svg" alt="" className='platform selected'/>
          <img src="./images/platforms/ball.svg" alt="" className='platform'/>
          <img src="./images/platforms/pintrest.svg" alt="" className='platform'/>
          <img src="./images/platforms/messenger.svg" alt="" className='platform'/>
          <img src="./images/platforms/reddit.svg" alt="" className='platform'/>
          <img src="./images/platforms/wk.svg" alt="" className='platform'/>
          <img src="./images/platforms/linkedin.svg" alt="" className='platform'/>
        </div>

        <div className="posts">
          <img src="./images/tweets/tweet 1.svg" alt="" />
          <img src="./images/tweets/tweet 2.svg" alt="" />
          <img src="./images/tweets/tweet 3.svg" alt="" />
        </div>

        <button>View More Trends</button>

    </div>
  )
}
