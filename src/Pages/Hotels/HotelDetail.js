import React, { useState } from 'react'
import "./HotelDetail.css"
import ReactOwlCarousel from 'react-owl-carousel'
import BannerData from '../../Components/Data/BannerData'
import Banners from '../../Components/Banners/Banners'
import image1 from "../../Assets/ImagesNew/about1.jpg"
import image2 from "../../Assets/ImagesNew/about2.jpg"
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import HomeDetail from '../../Components/HomeDetail/HomeDetail'


const HotelDetail = () => {

  // const databanner = useState(OberoiI)
  return (
    <div className='HotelDetail'>
      <ReactOwlCarousel
        loop={Infinity}
        items={1}
        autoplay={true}
        autoplayTimeout={3000}
      >
        {BannerData.map((item) => (
          <Banners
            id={item.id}
            cover={item.cover}
            title={item.title}
            heading={item.heading}
          />
        ))}
      </ReactOwlCarousel>
      <div className="HotelDetail-box">
        <div className='HomeDetail'>
          <div className="HomeDetail-left">
            <h4>
              <FaLocationDot />
              New Delhi , Gurgaon , Agra , Bengaluru , Kolkata , Mumbai.
            </h4>
            <h2>Hotel Oberoi</h2>
            <h4>
              <FaRegClock />
              8 Night / 9 Days
            </h4>
            <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
          </div>
          <div className="HomeDetail-right">
            <div className="HomeDetail-right-image1">
              <img src={image1} alt="" />
            </div>
            <div className="HomeDetail-right-image2">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
        <div className="hotel-detail-tour">
          <h2>TOUR ITINERARY</h2>
        <div className="hotel-detail-tour">
          
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default HotelDetail
