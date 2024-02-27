import React, { useState } from 'react'
import "./Home1.css"
import Banners from '../../Components/Banners/Banners'
import BannerData from '../../Components/Data/BannerData'
import HomeDetail from '../../Components/HomeDetail/HomeDetail'
import HomeRooms from '../../Components/HomeRooms/HomeRooms'
import HomeServices from '../../Components/HomeServices/HomeServices'
import HomeVideo from '../../Components/HomeVideo/HomeVideo'

const Home1 = () => {
    // const Banner = useState(BannerData[0])
    // console.log(Banner, "data")
    return (
        <div className='Home1'>
            <div className="Home-box">
                <div className="Home1-banner">
                    {/* {Banner.map((item) => (
                    <> */}
                    <Banners
                    // id={item.id}
                    // cover={item.cover}
                    // title={item.title}
                    // heading={item.heading}
                    />
                    {/* </>
                ))} */}
                </div>
                <div className="Home1-detail">
                    <HomeDetail />
                </div>
                <div className="Home1-rooms">
                    <div className="Home1-rooms-suits">
                        <HomeRooms/>
                    </div>
                </div>
                <div className="Home1-services">
                    <HomeServices />
                </div>
                <div className="Home1-video-promote">
                    <div className="Home1-video-promote-box">
                        <HomeVideo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1
