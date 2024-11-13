import React, { useState } from 'react'
import "./HomeContact.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';
import contact1 from "../../Assets/ImagesNew/footer1.jpg"
import contact2 from "../../Assets/ImagesNew/footer2.png"
import contact3 from "../../Assets/ImagesNew/footer3.png"
import { Link } from 'react-router-dom';


const HomeContact = () => {
    const responsiveOptions = {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };

    return (
        <div className='HomeContact'>
            <ReactOwlCarousel
                loop={Infinity}
                items={3}
                autoplay={true}
                autoplayTimeout={3000}
                responsive={responsiveOptions}
            >
                <div className="HomeContact-logos">
                    <Link to="https://provenexpert.com/">
                        <img src={contact1} alt="" />
                    </Link>
                </div>
                <div className="HomeContact-logos">
                    <Link to="https://www.trustpilot.com/">
                        <img src={contact2} alt="" />
                    </Link>
                </div>
                <div className="HomeContact-logos">
                    <Link to="https://g.co/kgs/ordB9mK">
                        <img src={contact3} alt='' />
                    </Link>
                </div>

            </ReactOwlCarousel>
        </div>
    )
}

export default HomeContact
