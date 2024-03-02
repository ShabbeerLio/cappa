import React, { useState } from 'react'
import "./Hotels.css"
import HotelCategory from '../../Components/Data/HotelCategory'
import HotelDetailCard from '../../Components/HotelCard/HotelDetailCard'
import HotelCard from '../../Components/HotelCard/HotelCard'

const Hotels = () => {
    return (
        <div className='Hotels'>
            <div className="Hotels-box">
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
