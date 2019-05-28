import React from 'react';
import './Display.css';

const CalculatorDisplay = ({display})=>{
    return (
        <div className='calculator-display'>
            <span>{display}</span>
        </div>
    )
}

export default CalculatorDisplay;
