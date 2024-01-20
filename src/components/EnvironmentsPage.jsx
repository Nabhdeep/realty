import React , {useState} from 'react';
import ImageGrid from './ImageGrid'
import Upload from './Upload'
import ImageModal from './ImageModal'

const EnvironmentsPage = () => {
    const [selectedImage , setSelectedImage] = useState(null);
    return (
      <div className='gallery'>
          {/* <Upload tablename={'envAssets'}/> */}
          <ImageGrid setSelectedImage={setSelectedImage} tableName={'envAssets'} />
  
          {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
      </div>
    )
}

export default EnvironmentsPage