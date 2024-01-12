import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>New arrivals only</h1>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand_icon.png" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
           </div>
           <div className="hero-lst-btn">
                <div>Latest collection</div>
                <img src={arrow} alt="" />
           </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
