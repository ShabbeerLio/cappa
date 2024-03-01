import React, { useState } from 'react';
import "./HomeCategory.css";
import ImageGallery from "react-image-gallery";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const HomeCategory = () => {

    const OberoiI = [
        {
            original: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel main.jpg'),
            thumbnail: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel main.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel1.jpg'),
            thumbnail: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel1.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel2.jpg'),
            thumbnail: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel2.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel3.jpg'),
            thumbnail: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel3.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel4.webp'),
            thumbnail: require('../../Assets/ImagesNew/OberoiHotel/Oberoi hotel4.webp'),
        },
    ];

    const TajI = [
        {
            original: require('../../Assets/ImagesNew/TajHotel/Taj Hotel main.jpg'),
            thumbnail: require('../../Assets/ImagesNew/TajHotel/Taj Hotel main.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 1.avif'),
            thumbnail: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 1.avif'),
        },
        {
            original: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 2.jpg'),
            thumbnail: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 2.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 3.jpeg'),
            thumbnail: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 3.jpeg'),
        },
        {
            original: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 4.webp'),
            thumbnail: require('../../Assets/ImagesNew/TajHotel/Taj Hotel 4.webp'),
        },
    ];
    const LeelaI = [
        {
            original: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalacemain.jpg'),
            thumbnail: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalacemain.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace1.webp'),
            thumbnail: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace1.webp'),
        },
        {
            original: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace2.jpg'),
            thumbnail: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace2.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace3.avif'),
            thumbnail: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace3.avif'),
        },
        {
            original: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace4.avif'),
            thumbnail: require('../../Assets/ImagesNew/LeelaPalace/LeelaPalace4.avif'),
        },

    ];

    const TajLakeI = [
        {
            original: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace main.jpg'),
            thumbnail: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace main.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace1.jpg'),
            thumbnail: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace1.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace2.jpg'),
            thumbnail: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace2.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace3.jpg'),
            thumbnail: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace3.jpg'),
        },
        {
            original: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace4.avif'),
            thumbnail: require('../../Assets/ImagesNew/tajLakePalace/taj lake palace4.avif'),
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='HomeCategory'>
            <div className="HomeCategory-heading">
                <h2>Luxury Accomodation</h2>
            </div>
            <div className="homeCategory-box">
                <div className="homeCategory-box-left">
                    <ImageGallery
                        items={OberoiI}
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
                                    <a>Menu Items</a>
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
            <div className="homeCategory-box">
                <div className="homeCategory-box-right">
                    <div className="content">
                        <div className="cont">
                            <div className="info">
                                <h6>EXPERIENCES</h6>
                            </div>
                            <h4>Hotel Taj</h4>
                            <div className='cont-desc'>
                                <p>
                                    <FaLocationDot />
                                    New Delhi , Gurgaon , Agra , Bengaluru , Kolkata , Mumbai , More...
                                </p>
                                <p>
                                    <FaRegClock />
                                    24 hrs
                                </p>
                                <p>
                                    <MdRestaurantMenu />
                                    <a>Menu Items</a>
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
                        items={TajI}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false} />
                </div>
            </div>
            <div className="homeCategory-box">
                <div className="homeCategory-box-left">

                    <ImageGallery
                        items={LeelaI}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false} />

                </div>
                <div className="homeCategory-box-right">
                    <div className="content">
                        <div className="cont">
                            <div className="info">
                                <h6>MODERN</h6>
                            </div>
                            <h4>Hotel Leela Palace</h4>
                            <div className='cont-desc'>
                                <p>
                                    <FaLocationDot />
                                    New Delhi , Gurgaon , Agra , Bengaluru , Kolkata , Mumbai , More...
                                </p>
                                <p>
                                    <FaRegClock />
                                    8 AM - 8 PM
                                </p>
                                <p>
                                    <MdRestaurantMenu />
                                    <a>Menu Items</a>
                                </p>
                            </div>
                            <div className="butn-dark">
                                <Link to="/luxury-accomodation/hotel-detail" onClick={scrollToTop} >
                                    <span>Learn More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCategory-box">
                <div className="homeCategory-box-right">
                    <div className="content">
                        <div className="cont">
                            <div className="info">
                                <h6>Discover</h6>
                            </div>
                            <h4>Taj Lake Palace Udaipur</h4>
                            <div className='cont-desc'>
                                <p>
                                    <FaLocationDot />
                                    New Delhi , Gurgaon , Agra , Bengaluru , Kolkata , Mumbai , More...
                                </p>
                                <p>
                                    <FaRegClock />
                                    7 AM - 11 PM
                                </p>
                                <p>
                                    <MdRestaurantMenu />
                                    <a>Menu Items</a>
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
                        items={TajLakeI}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false} />
                </div>
            </div>
            <div className="homeCategory-more-button">
                <div className="butn-dark">
                    <Link to="/luxury-accomodation" onClick={scrollToTop}>
                        <span>View More</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomeCategory
