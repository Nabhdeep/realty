import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const Progress = ({file , setFile , tablename}) => {
  const {progress , url , error} = useStorage(file , tablename) 
  useEffect(()=>{
    if(url){
      setFile(null)
    }
  },[url ,setFile])
  return (
    <div className='progress-bar' style={{width:progress + "%"}}></div>
  )
}

export default Progress