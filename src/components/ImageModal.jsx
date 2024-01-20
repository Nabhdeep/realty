import React from 'react'
import {motion} from 'framer-motion'

const ImageModal = ({selectedImage , setSelectedImage}) => {
    const handleClick = (e)=>{
        if(e.target.classList.contains('backdrop')){
            setSelectedImage(null)
            document.body.style.overflow = 'unset'
        }
    }
  return (
    <motion.div className='backdrop' onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    >    
        <img src={selectedImage} alt='barn'/>
    </motion.div>
  )
}

export default ImageModal