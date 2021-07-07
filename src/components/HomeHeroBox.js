import React from 'react';
import '../Styling/HomeHeroBox.css';

function HomeHeroBox({image, heading, subHeading}) {
    return (
        <div className='homeHeroBox_wrapper'>
            <img
            src={image}
            alt='' />
            <span className='homeHeroBox_text'>
            <h1>{heading}</h1>
            <p>{subHeading}</p>
            </span>
        </div>
    )
}

export default HomeHeroBox;