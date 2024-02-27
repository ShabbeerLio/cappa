import React, { useState } from 'react'
import "./Banners.css"
import cover from "../../Assets/Images/1.jpg"

const Banners = (props) => {

    return (
        <>
            <div className='Banners' >
                <div className="banner-image">
                    <img src={cover} alt="" />
                </div>
                <div className="Banners-detail">
                    <div className="banner-title">
                        <h4>Luxury hotels & best resort</h4>
                    </div>
                    <div className="banner-desc">
                        <h1>Enjoy the best moments of life</h1>
                    </div>
                    <div className="banner-button">
                        <p>Room & suits</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banners
