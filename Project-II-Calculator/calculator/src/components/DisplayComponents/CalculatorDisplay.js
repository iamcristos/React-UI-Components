import React from 'react';
import './Display.css';

const CalculatorDisplay = ({display})=>{
    return (
        <div className='calculator-display'>
            <span style={{color: 'white', fontSize:'40px', marginTop:'.5rem'}}>{display}</span>
        </div>
    )
}

export default CalculatorDisplay;
