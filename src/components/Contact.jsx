import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/base'
import { postContact } from '../api/service'
import toast,{Toaster} from 'react-hot-toast'
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const handleChange = (e)=>{
    const {name , value} = e.target
    setFormData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(Object.values(formData).filter(ele=>!ele).length>0){
      toast.error('All fields are required' , {
        duration:6000,
        style:{
          fontSize:'20px'
        }
      })
      return null
    }
    const data = JSON.stringify(formData)
    setFormData({
      firstName:'',
      lastName:'',
      email:'',
      message:''
    })
    const res = await postContact(data)
    toast(res , {
      duration:4000,
      position:'top-right',
      icon:'📡',
      style:{
       font:'message-box',
       fontSize:'20px'
      }
    })
    console.log(res);
  }
  return (
    <div className='contactPage'>
      <div className='contactContainer'>
        <h1>
          Contact Us
        </h1>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find us at <a className="emailLink" href="mailto:realtystudio0@gmail.com"> realtystudio0@gmail.com</a>.</p>
      </div>
      <div className='contactItems'>
        <form onSubmit={handleSubmit}>
        <input 
        type= 'text'
        placeholder='First name'
        name='firstName' 
        value={formData.firstName}
        onChange={handleChange}
        />
        <input 
        placeholder='Last name'
        type='text'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
        />
        <input placeholder='Email'
        type='text'
        name='email'
        value={formData.email}
        onChange={handleChange}
        />
        <textarea placeholder='What can we help you with?'
        type='text'
        name='message'
        value={formData.message}
        onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
        <Toaster />
        </form>
      </div>
    </div>
  )
}

export default Contact