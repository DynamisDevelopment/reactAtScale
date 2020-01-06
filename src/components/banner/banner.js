import React from 'react'

// * Styles 
import './banner.sass'

const Banner = ({ imgSrc, imgAlt, title, subTitle }) => (
    // * Use background image if exists
    imgSrc ? <div className="banner-img" >
        <img src={imgSrc} alt={imgAlt} className='banner-bg' />
        <div className="page-info">
            <h1 className='banner-title'>{title}</h1>
            {subTitle && <h3 className='banner-subTitle'>{subTitle}</h3>}
        </div>
    </div>
        :
        // * Grey banner if without image
        <div className="banner-grey">
            <img src="./assets/logos/logo-white.png" alt="React at Scale Logo" className='banner-logo' />
        </div>
)


export default Banner