import React from 'react';
import './Header.css';

const HeaderTitle = ({title, handle, time})=>{
    return (
        <div className='header-title'>
            <h1>{title}</h1>
            <h2>{handle}</h2>
            <h3>{time}</h3>
        </div>
    )
}

export default HeaderTitle;