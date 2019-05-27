import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
    fontSize: '20px',
}
const Footer = ({num})=>{
    const incNum = ()=> {
        console.log(num)
        return num++
    }
    // let num = 1
    return (
            <footer className='footer'>
                <FontAwesomeIcon icon="envelope" style={iconStyles}> 4</FontAwesomeIcon>
                <div onClick={()=> {
                    console.log(incNum())
                    return incNum()
                }
                }>
                <FontAwesomeIcon icon="heart" style={iconStyles}/>
                  {num} 
                </div>
                <FontAwesomeIcon icon="sync-alt" style={iconStyles}
                onClick={()=>{}}/>
                <FontAwesomeIcon icon="comment-dots" style={iconStyles}/>
            </footer>
    )
}

export default Footer;