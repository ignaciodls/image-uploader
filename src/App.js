import Index from "./components/Index";
import Loading from "./components/Loading";
import UploadedImage from "./components/UploadedImage";


import useUploadImage from "./hooks/useUploadImage";

import './style/global.css'

import Normalize from 'react-normalize'

function App() {

  const {imageState, onDrop, uploadImage} = useUploadImage()

  return (
    <>

      <Normalize/>

      {
        (!imageState.uploading && imageState.url === '') ? 
        <Index
        onDrop={onDrop}
        uploadImage={uploadImage}
        /> : 
        imageState.uploading ?
        <Loading/> :
        <UploadedImage
        url={imageState.url}/>
      }

    </>
  );
}

export default App;
