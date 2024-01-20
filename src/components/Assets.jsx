import React from 'react'
import { Close_Shot_Car_Turntable } from '../assets/index'
import { Link } from 'react-router-dom'

const Assets = () => {
  return (
    <div className='assetsContainer'>
        <h1>ASSETS</h1>
        <div className='assetsContent'>
            <div className="assetsText">
                <p>
                WE SPECIALIZE IN CREATING GAME-READY ASSETS FOR SEAMLESS PRODUCTIO
                </p>
                <Link to='/assets'>
                <button>
                    ASSETS
                </button>
                </Link>
                <p>
                ELEVATE YOUR PROJECT WITH OUR METICULOUSLY CRAFTED RESOURCES.
                </p>
            </div>
            <div className="assetsVideo">
                <video src={Close_Shot_Car_Turntable} autoPlay muted loop/>
            </div>
        </div>
    </div>
  )
}

export default Assets