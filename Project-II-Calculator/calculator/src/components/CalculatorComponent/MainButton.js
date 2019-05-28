import React from 'react'
import ActionButton from '../ButtonComponents/ActionButton'
import NumberButton from '../ButtonComponents/NumberButton';
const buttonStyle = {
    color: 'black',
    width: '25%',
    height: '40px'
}

const actionStyle = {
    color: 'white',
    backgroundColor: 'red',
    width: '25%',
    height: '40px',
}
const MainButton = ({content})=>{
    return (
        <div className='top-button-section'>
            <NumberButton style={buttonStyle} number={content.num1}/>
            <NumberButton style={buttonStyle} number={content.num2}/>
            <NumberButton style={buttonStyle} number={content.num3}/>
            <ActionButton style={actionStyle} action= {content.action}/>
        </div>
    )
}

export default MainButton
