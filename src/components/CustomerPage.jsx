import React from 'react'
import { clientsList } from '../constants'

const CustomerPage = () => {
  return (
    <div className='customerPage'>
    <div>
        <h1>
            Our Clients
        </h1>
    </div>
    <div className='cardArea'>
        {clientsList.map(ele=>{
            return (<div className='card'>
                <img src={ele.img}/>
                <h2>{ele.client}</h2>
                <p>{ele.desc}</p>
            </div>)
            })
        }
    </div>
    </div>
  )
}

export default CustomerPage