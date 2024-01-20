import React,{useState} from 'react';
import ImageGrid from './ImageGrid'
import Upload from './Upload'
import ImageModal from './ImageModal'

const ArchPage = () => {
    const [selectedImage , setSelectedImage] = useState(null);
    return (
      <div className='gallery'>
          {/* <Upload tablename={'archAssets'}/> */}
          <ImageGrid setSelectedImage={setSelectedImage} tableName={'archAssets'} />
  
          {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
      </div>
    )
}

export default ArchPage