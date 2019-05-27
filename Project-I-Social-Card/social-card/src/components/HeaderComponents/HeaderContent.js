import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle'

const HeaderContent = ({content})=>{
    return (
        <div className='header-content'>
            <HeaderTitle title={content.title} 
                handle={content.handle}
                time={content.time}/>
        </div>
    )
}

export default HeaderContent;