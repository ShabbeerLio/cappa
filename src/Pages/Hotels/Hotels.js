import React, { useState } from 'react'
import "./Hotels.css"
import HotelCategory from '../../Components/Data/HotelCategory'
import HotelCard from '../../Components/HotelCard/HotelCard'

const Hotels = (props) => {
    return (
        <div className='Hotels'>
            <div className="Hotels-box">
                <h1>{props.heading}</h1>
                <h4>CULTURE, COUNTRYSIDE AND CULINARY</h4>
                <p>Plan your luxury vacation India with Lewis and Clark Tours. Mesmerize your Luxury North India Tour with beautiful Taj Mahal, luxury heritage palaces in colourful spellbinding Rajasthan, overnighting in Oberoi Jungle Lodge and explore India Tiger wildlife Safari. Be witness to the enriched divine and culture in Varanasi. Our Luxury India tour packages are filled with colourful stories and planned with best private tour escort and professional chauffeur driven transports. Please check out our luxury North India Tour packages. The very popular Luxury tour is Golden Triangle India Tour We also offer customized luxury India private packages.   </p>
                <div className="hotel-box-item">
                    {HotelCategory.map((hotel, index) => (
                        <HotelCard hotel={hotel} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hotels
