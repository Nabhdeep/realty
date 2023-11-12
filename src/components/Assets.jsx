import React from 'react'
import { Unreal } from '../assets'

const Assets = () => {
  return (
    <div className='assetsContainer'>
        <h1>ASSETS</h1>
        <div className='assetsContent'>
            <div className="assetsText">
                <p>
                WE SPECIALIZE IN CREATING GAME-READY ASSETS FOR SEAMLESS PRODUCTIO
                </p>
                <button>
                    ASSETS
                </button>
                <p>
                ELEVATE YOUR PROJECT WITH OUR METICULOUSLY CRAFTED RESOURCES.
                </p>
            </div>
            <div className="assetsVideo">
                <video src={Unreal} autoPlay muted loop/>
            </div>
        </div>
    </div>
  )
}

export default Assets