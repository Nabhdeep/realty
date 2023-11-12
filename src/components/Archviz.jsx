import React from 'react'
import { Unreal , enviorn } from '../assets'

const Archviz = () =>  {
    return (
      <div className='archContainer'>

          <p>
            "ARCHITECHTURAL DREAMS VISIUALIZED WE SPECIALIZE IN CRAFTING IMMERSIVE ARCHITECHTUAL VISUALIZATIONS 
                  TRANSFROM YOUR CONCEPTS INTO STUNNING LIFE LIKE SPACES WITH OUT EXPERTISE"
        </p>
        <div className='backDrop'>
          <h1>
            ARCHIVZ
          </h1>
        </div>
          <div className='archContent'>
              <div className="archText">
              <button>
              ARCHVIZ
                  </button>
              <h1>ARCHVIZ</h1>
              </div>
              <div className="archImage">
                <img src={enviorn} />
              </div>
          </div>
      </div>
    )
  }

export default Archviz