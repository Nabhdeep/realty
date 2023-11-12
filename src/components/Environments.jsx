import React from 'react'
import { Unreal } from '../assets'

const Environments = () => {
    return (
      <div className='envContainer'>
          <h1>EMMERSIVE ENVIRONMENTS</h1>
          <div className='envContent'>
            <div className="envVideo">
                  <video src={Unreal} autoPlay muted loop/>
                  <button>
                      ENVIRONMENTS
                  </button>
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