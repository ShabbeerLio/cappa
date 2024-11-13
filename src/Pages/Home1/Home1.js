import React, { useEffect } from 'react'
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
import { useLocation } from 'react-router-dom'

const Home1 = (props) => {

    /* global dataLayer */
  const location = useLocation();

  useEffect(() => {
    document.title = props.title;

    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    const description = props.descriptions;
    let metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Ensure dataLayer is initialized before the GA script loads
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    // Load the Google Analytics script only once
    const gaScriptId = 'ga-gtag';
    if (!document.getElementById(gaScriptId)) {
      const script = document.createElement('script');
      script.id = gaScriptId;
      script.async = true;
    //   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
      document.head.appendChild(script);

      script.onload = () => {
        gtag('js', new Date());
        // gtag('config', 'G-3BK9F87D6E');
      };
    }
  }, [props.title, props.descriptions, location.pathname]);

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
                {/* <div className="Home1-services">
                    <HomeServices />
                </div> */}
                {/* <div className="Home1-video-promote">
                    <div className="Home1-video-promote-box">
                        <HomeVideo />
                    </div>
                </div> */}
                {/* <div className="Home1-Facilities">
                    <HomeFacilities />
                </div> */}
                <div className="Home1-category">
                    <HomeCategory />
                </div>
                <div className="Home1-review">
                    <div className="Home1-review-box">
                        <HomeReview />
                    </div>
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
