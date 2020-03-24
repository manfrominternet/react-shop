import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div  className={`${size} menu-item`}>
        <div className='background-image' style= {{backgroundImage: `url(${imageUrl})`}}/>
    <div classsName='content' style={{position: 'absolute', backgroundColor:`white`}}>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span  className='subtitle'>SHOP NOW</span>
    </div>
</div>
)

export default MenuItem;