import React, { useState } from 'react'
import "./HomeFacilities.css"
import ServicesData from '../Data/ServicesData'
// import

const HomeFacilities = (props) => {
    const data = useState(ServicesData)
    return (
        <div className='HomeFacilities'>
            <h4>Best Prices</h4>
            <h2>Extra Services</h2>
            <div className="HomeFacilities-box">
            {ServicesData.map((item) => (
                <div className="HomeFacilities-card" key={item.id}>
                    <img src={item.cover} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HomeFacilities
