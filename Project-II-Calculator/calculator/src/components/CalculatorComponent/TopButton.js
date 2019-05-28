import React from 'react'
import './TopButton.css'
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const numberStyle = {
    color : 'black',
    width : '75%',
    height: '40px'
}

const actionStyle = {
    color: 'white',
    backgroundColor: 'red',
    width: '25%',
    height: '40px',
    margin: '0',
}
const TopButtonSection = ({content})=>{
    return (
        <div className='top-button-section'>
            <NumberButton style={numberStyle} number={content.number}/>
            <ActionButton style={actionStyle} action={content.action}/>
        </div>
    )
}

export default TopButtonSection;