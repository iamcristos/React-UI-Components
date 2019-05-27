import React from 'react';
import './Header.css';

const ImageThumbnail = ({url, alt})=>{
    return (
        <div className='img-thumbnail'>
            <img src={url} alt={alt} />
        </div>
    )
}

export default ImageThumbnail;