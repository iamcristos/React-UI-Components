import React from 'react';
import './Button.css';

const ActionButton = ({action, style})=>{
    return (
        <button style={style}>{action}</button>
    )
}

export default ActionButton;