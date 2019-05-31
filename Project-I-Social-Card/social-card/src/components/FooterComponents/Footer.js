import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyles = {
    fontSize: '20px',
}
const Footer = ({num})=>{
    return (
            <footer className='footer'>
                <FontAwesomeIcon icon="envelope" style={iconStyles}/>
                <div onClick={()=> {
                    alert(num++)
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