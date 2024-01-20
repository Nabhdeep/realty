import React, { useState } from 'react'
import Progress from './Progress'

const Upload = ({tablename}) => {
    const [file , setFile] = useState(null)
    const [error ,setError] = useState(null)
    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        if(selected){
            setFile(selected)
            setError('');
        }else{
            setFile(null)
            setError('Only Selected Files')
        }
    }
  return (
    <div>
        <form>
            <label>
            <input type='file' onChange={changeHandler} />
            <span>+</span>
            </label>
            <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <Progress file={file} setFile={setFile} tablename={tablename} />}
            </div>
        </form>
    </div>
  )
}

export default Upload