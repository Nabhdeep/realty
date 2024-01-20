import React from 'react'
import { socialMedia } from '../constants'
import { Leftlogo, gameLogo } from '../assets/index'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='blank'>
            <p>
                DOWNLOAD NOW
            </p>
        </div>
        <div className='social'>
            <a href='#'><img className='gm' src={gameLogo} alt="" /></a>
            <div className='socialInner'>
            {socialMedia.map(ele=>{
                return(
                    <a href={ele.link}><img src={ele.icon} id={ele.id} /></a>
                )
            })}
            </div>
        </div>
        <div className='studio'>
            <p>@2023 D-317, Barra-8 Kanpur , Uttar Pradech, BHARAT</p>
            <img src={Leftlogo} alt='sudio' />
        </div>
    </div>
  )
}

export default Footer