import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import {CopyToClipboard} from 'react-copy-to-clipboard';

const UploadedImage = ({url}) => {
    return (
        <div className='uploader-wrapper'>
            
            <div style={{display:'flex', flexDirection:'column', gap:'11px', alignItems:'center'}}>
                <FontAwesomeIcon style={{color:'#219653', fontSize:'35px'}} icon={faCheckCircle}/>
                <span style={{color:'#4F4F4F', fontSize:'18px', fontWeight:'bold'}}>Upload Successfully!</span>
            </div>


            <div className='image-container'>
                <img src={url} alt="" />
            </div>


            <div className='link-container'>
                <span className='url'>{url}</span>
                <CopyToClipboard text={url}
                    onCopy={() => {}}>
                    <button className='copy-button'>Copy Link</button>
                </CopyToClipboard>
            </div>

        </div>
    )
}

export default UploadedImage
