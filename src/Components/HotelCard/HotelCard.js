import React from 'react'
import "./HotelCard.css"
import ImageGallery from "react-image-gallery";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {

    var index = (hotel.id);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <>
            <div className="homeCategory-box" key={index}>
                {index % 2 != 0 ? (
                    <>
                        <div className="homeCategory-box-left">
                            <ImageGallery
                                autoPlay={true}
                                items={hotel.imageItems}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showNav={false}
                            />
                        </div>
                        <div className="homeCategory-box-right">
                            <div className="content">
                                <div className="cont">
                                    <div className="info">
                                        <h6>{hotel.category}</h6>
                                    </div>
                                    <h4>{hotel.name}</h4>
                                    <div className='cont-desc'>
                                        <p>
                                            <FaLocationDot />
                                            {hotel.locations}
                                        </p>
                                        <p>
                                            <FaRegClock />
                                            {hotel.hours}
                                        </p>
                                        <p>
                                            <MdRestaurantMenu />
                                            <a>{hotel.menuLink}</a>
                                        </p>
                                    </div>
                                    <div className="butn-dark">
                                        <Link to="/luxury-accomodation/hotel-detail" onClick={scrollToTop}>
                                            <span>Learn More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="homeCategory-box-right">
                            <div className="content">
                                <div className="cont">
                                    <div className="info">
                                        <h6>{hotel.category}</h6>
                                    </div>
                                    <h4>{hotel.name}</h4>
                                    <div className='cont-desc'>
                                        <p>
                                            <FaLocationDot />
                                            {hotel.locations}
                                        </p>
                                        <p>
                                            <FaRegClock />
                                            {hotel.hours}
                                        </p>
                                        <p>
                                            <MdRestaurantMenu />
                                            <a>{hotel.menuLink}</a>
                                        </p>
                                    </div>
                                    <div className="butn-dark">
                                        <Link to="/luxury-accomodation/hotel-detail" onClick={scrollToTop}>
                                            <span>Learn More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="homeCategory-box-left">
                            <ImageGallery
                             autoPlay={true}
                                items={hotel.imageItems}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                showNav={false}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default HotelCard
