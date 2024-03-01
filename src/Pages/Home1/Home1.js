import React from 'react'
import "./Home1.css"
import Banners from '../../Components/Banners/Banners'
import HomeDetail from '../../Components/HomeDetail/HomeDetail'
import HomeRooms from '../../Components/HomeRooms/HomeRooms'
import HomeServices from '../../Components/HomeServices/HomeServices'
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import HomeFacilities from '../../Components/HomeFacilities/HomeFacilities'
import HomeReview from '../../Components/HomeReview/HomeReview'
import HomeCategory from '../../Components/HomeCategory/HomeCategory'
import HomeNews from '../../Components/HomeNews/HomeNews'
import HomeForm from '../../Components/HomeForm/HomeForm'
import HomeContact from '../../Components/HomeForm/HomeContact'
import BannerData from '../../Components/Data/BannerData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home1 = () => {

    return (
        <div className='Home1'>
            <div className="Home-box">
                <div className="Home1-banner">
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
                </div>
                <div className="Home1-detail">
                    <HomeDetail />
                </div>
                <div className="Home1-rooms">
                    <div className="Home1-rooms-suits">
                        <HomeRooms />
                    </div>
                </div>
                <div className="Home1-services">
                    <HomeServices />
                </div>
                <div className="Home1-video-promote">
                    <div className="Home1-video-promote-box">
                        <HomeVideo />
                    </div>
                </div>
                <div className="Home1-Facilities">
                    <HomeFacilities />
                </div>
                <div className="Home1-review">
                    <div className="Home1-review-box">
                        <HomeReview />
                    </div>
                </div>
                <div className="Home1-category">
                    <HomeCategory />
                </div>
                <div className="Home1-news">
                    <HomeNews />
                </div>
                <div className="Home1-contact">
                    <div className="Home1-contact-box">
                        <HomeForm />
                    </div>
                </div>
                <div className="Home1-contact-detail">
                    <div className="Home1-contact-detail-box">
                        <HomeContact />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1
