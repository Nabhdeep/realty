import React from 'react'
import { Stunning , Centerlogo , Leftlogo } from '../assets/index'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='videoLogo'>
          <video className='videoBg' autoPlay muted loop>
            <source src={Stunning} type='video/mp4' />
          </video>
        <div className='heroLogo'>
          <img src={Leftlogo}></img>
          <img src={Centerlogo}></img>
          <button> PlayNow</button>
        </div>
      </div>
    </div>
  )
}

export default Hero


// <h1 className='gradient-text'>We Make Games and Design it</h1>
//       <div className='herocontainer'>   
//         {/* <video className='videoBg' autoPlay muted loop>
//           <source src={Stunning} type='video/mp4' />
//         </video> */}
//         <div className='logo-hero-Container'>
          // <img src={Leftlogo}></img>
          // <img src={Centerlogo}></img>
          // <button> PlayNow</button>
//         </div>
          
//       </div>