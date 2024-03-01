import React from 'react'
import ImageGallery from "react-image-gallery";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const HotelCard = (props) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className="homeCategory-box">
            <div className="homeCategory-box-left">
                <ImageGallery
                    items={props.images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showNav={false} />
            </div>
            <div className="homeCategory-box-right">
                <div className="content">
                    <div className="cont">
                        <div className="info">
                            <h6>Discover</h6>
                        </div>
                        <h4>Hotel Oberoi</h4>
                        <div className='cont-desc'>
                            <p>
                                <FaLocationDot />
                                New Delhi , Gurgaon , Agra , Bengaluru , Kolkata , Mumbai , More...
                            </p>
                            <p>
                                <FaRegClock />
                                10 AM - 10 PM
                            </p>
                            <p>
                                <MdRestaurantMenu />
                                Menu Items
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
        </div>
    )
}

export default HotelCard
