import React, { useState } from 'react'
import "./Hotels.css"
import HotelCategory from '../../Components/Data/HotelCategory'
import HotelDetailCard from '../../Components/HotelCard/HotelDetailCard'
import HotelCard from '../../Components/HotelCard/HotelCard'
import PageBanner from '../../Components/PageBanner/PageBanner'
import pgbanner from "../../Assets/Banner/10.png"

const Hotels = () => {
    return (
        <div className='Hotels'>
             <PageBanner cover={pgbanner} />
             <h1>Luxury Accomodation</h1>
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
