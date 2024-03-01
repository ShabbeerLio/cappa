import React, { useState } from 'react'
import "./Banners.css"
import cover from "../../Assets/Images/1.jpg";

import ReactOwlCarousel from 'react-owl-carousel';
import BannerData from '../Data/BannerData';


const Banners = (props) => {

    return (
        <>
            {/* <ReactOwlCarousel loop={Infinity} items={1} >
                {BannerData.map((item) => ( */}
                    <div className='Banners' id={props.id}>
                        <div className="banner-image">
                            <img src={props.cover} alt="" />
                        </div>
                        <div className="Banners-detail">
                            <div className="banner-title">
                                <h4>{props.title}</h4>
                            </div>
                            <div className="banner-desc">
                                <h1>{props.heading}</h1>
                            </div>
                            <div className="banner-button">
                                <p>Room & suits</p>
                            </div>
                        </div>
                    </div>
                {/* ))}
            </ReactOwlCarousel> */}

        </>
    )
}

export default Banners
