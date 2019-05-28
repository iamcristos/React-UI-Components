import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = ({cardContent})=>{
    return (
        <div className='card-container' onClick={()=>{
            window.location.href= `https://www.reactjs.org`}
            }>
            <div>
                <CardBanner url={cardContent.url} alt={cardContent.alt} />
                <CardContent header={cardContent.header} 
                    text = {cardContent.text}/> 
            </div>   
        </div>
    )
};

export default CardContainer;
