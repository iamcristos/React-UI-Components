import React from 'react';
import './Card.css';


const CardContent = ({header, text})=>{
    return (
        <div className='card-content'>
            <h2>{header}</h2>
            <p> {text}</p>
        </div>
    )
}

export default CardContent;