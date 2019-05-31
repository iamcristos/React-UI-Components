import React from 'react';
import './Button.css';

const NumberButton = ({number,style})=>{
    return (
        <button style={style}>{number}</button>
    )
}

export default NumberButton;