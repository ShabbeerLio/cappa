import React, { useState } from 'react'
import "./Banners.css"
import cover from "../../Assets/Images/1.jpg";
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';
import BannerData from '../Data/BannerData';


const Banners = (props) => {

    const [data, setData] = useState(BannerData);

    return (
        <>
            <ReactOwlCarousel loop={Infinity} items={1} >
                {BannerData.map((item) => (
                    <div className='Banners' key={item.id}>
                        <div className="banner-image">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="Banners-detail">
                            <div className="banner-title">
                                <h4>{item.title}</h4>
                            </div>
                            <div className="banner-desc">
                                <h1>{item.heading}</h1>
                            </div>
                            <div className="banner-button">
                                <p>Room & suits</p>
                            </div>
                        </div>
                    </div>
                ))}
            </ReactOwlCarousel>

        </>
    )
}

export default Banners
