import React, { useState } from 'react'
import "./Home1.css"
import Banners from '../../Components/Banners/Banners'
import BannerData from '../../Components/Banners/BannerData'

const Home1 = () => {
    const Banner = useState(BannerData[0])
    console.log(Banner, "data")
    return (
        <div className='Home1'>
            <div className="banner">
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
        </div>
    )
}

export default Home1
