import React from 'react'

const Loading = () => {
    return (

        <div className='uploading-container'>

            <span style={{color:'#4F4F4F', fontSize:'18px', fontWeight:'bold'}}>Uploading...</span>

            <div className='uploading-bar-background'>
                <div className="uploading-bar-progress"></div>
            </div>

        </div>


    )
}

export default Loading
