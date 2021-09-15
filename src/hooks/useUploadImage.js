import { useState } from "react"

import { app } from '../firebase/config'

const useUploadImage = () => {

    const [imageState, setImageState] = useState({
        uploading:false,
        url:''
    })

    const uploadImage = async(e) => {

        if(e.target.files[0].type.split('/')[0] === 'image'){

            setImageState({
                ...imageState,
                uploading:true
            })

            const image = e.target.files[0]
            const storageRef = app.storage().ref()
            const imageRef = storageRef.child(`images/${image.name}`)

            await imageRef.put(image)

            const imageURL = await imageRef.getDownloadURL()

            setImageState({
                uploading:false,
                url:imageURL
            })

        }
        else{
            alert('Choose a image')
        }

    }

    const onDrop = async(img) => {
        
        let image = img[0]

        if(image){

            setImageState({
                ...imageState,
                uploading:true
            })

            const storageRef = app.storage().ref()
            const imageRef = storageRef.child(`images/${image.name}`)

            await imageRef.put(image)

            const imageURL = await imageRef.getDownloadURL()

            setImageState({
                uploading:false,
                url:imageURL
            })

        }
        else{
            alert('Choose a image')
        }

    }

    
    return{
        uploadImage,
        onDrop,
        imageState
    }

}

export default useUploadImage
