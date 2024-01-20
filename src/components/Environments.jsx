import React from 'react'
import {enviorn } from '../assets/index'
import { Link } from 'react-router-dom'

const Environments = () => {
    return (
      <div className='envContainer'>
          <h1>EMMERSIVE ENVIRONMENTS</h1>
          <div className='envContent'>
            <div className="envVideo">
              <img src={enviorn}></img>
                  {/* <video src={Unreal} autoPlay muted loop/> */}
                  <Link to='/environments'>
                  <button>
                      ENVIRONMENTS
                  </button>
                  </Link>
              </div>
              <div className="envText">
                  <p>
                  TRANSFRPM YOUR VISION INTO REALITY WITH US. CRAFT EXQUISITE, INTERACTVE WORLDS THAT MESMARIZE PLAYERS.
                  </p>
                  <p>
                  HARNESS UNITY'S PROWESS TO SCULPY DYNAMIC LANDSCAPES, LIVELIKE ANIMATIONS AND REALISTIC LIGHTING FROM SERENE NATURAL WONDERS TO FUTURISTIC CITYSCAPES. YOUR CRETIVITY KNOWS NO BOUNDS.
              DIVE INTO A REALM OF LIMITLESS POSSIBILITIES AND BUTLD ENVIRONMENTS THAT LEAVE PLAYERS BREATHLESS.                  </p>
              </div>
          </div>
      </div>
    )
  }

export default Environments