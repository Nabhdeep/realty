import React, { useState } from 'react'
import ImageGrid from './ImageGrid'
import Upload from './Upload'
import ImageModal from './ImageModal'

const AssetsPage = () => {
  const [selectedImage , setSelectedImage] = useState(null);
  return (
    <div className='gallery'>
        {/* <Upload tablename={'imageAssets'}/> */}
        <ImageGrid setSelectedImage={setSelectedImage} tableName={'imagesAssets'} />

        {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  )
}

export default AssetsPage