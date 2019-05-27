import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent'
const HeaderContainer = ({content, image})=>{
    return (
        <div className='header-container'>
            <ImageThumbnail url = {image.url} 
                 alt={image.alt} />
            <HeaderContent content={content} />
        </div>
    )
}

export default HeaderContainer;