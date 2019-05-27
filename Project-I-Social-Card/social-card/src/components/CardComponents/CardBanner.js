import React from 'react';
import './Card.css';

const CardBanner = ({url, alt})=>{
    return(
        <img src ={url}
        alt={alt} className='img-card'/>
    )
}

export default CardBanner;