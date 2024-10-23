import React from 'react';
import "./banner.css"

const Banner = ({image, text}) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>

            {text && <h1 className='banner-text'>{text}</h1>}

        </div>
    );
};

export default Banner;