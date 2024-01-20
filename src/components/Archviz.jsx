import React from 'react'
import { arcZ } from '../assets/index'
import { Link } from 'react-router-dom'

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
                <Link to='/arc'>
              <button>
              ARCHVIZ
                  </button>
                  </Link>
              <h1>ARCHVIZ</h1>
              </div>
              <div className="archImage">
                <img src={arcZ} />
              </div>
          </div>
      </div>
    )
  }

export default Archviz