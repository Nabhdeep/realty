import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImage , tableName}) => {
    const docs = useFirestore(tableName);
    function handleClick (url){
      setSelectedImage(url)
      document.body.style.overflow = 'hidden'
    }
  return (
    <div className='img-grid'>
        {docs && docs.map(doc=>(
            <motion.div className='img-wrap' key={doc.id}
            whileHover={{opacity:1}}
            onClick={() => handleClick(doc.url)}
            >
                <motion.img src={doc.url}
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{delay:1}} />
            </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid