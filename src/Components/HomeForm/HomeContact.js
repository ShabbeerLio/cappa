import React, { useState } from 'react'
import "./HomeContact.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReactOwlCarousel from 'react-owl-carousel';
import contact1 from "../../Assets/ImagesNew/footer1.jpg"
import contact2 from "../../Assets/ImagesNew/footer2.png"
import { Rating } from 'react-simple-star-rating'

const HomeContact = () => {

    const [rating, setRating] = useState(0)
    return (
        <div className='HomeContact'>
            <ReactOwlCarousel loop={Infinity} items={3} >
                <div className="HomeContact-logos">
                    <img src={contact1} alt="" />
                </div>
                <div className="HomeContact-logos">
                    <img src={contact2} alt="" />
                </div>
                <div className="HomeContact-logos">
                    {/* <a href="http://search.google.com/local/reviews?placeid=ChIJjyeYYmTlDDkRd86gd6rpqL8" target="_blank" rel="noopener" class="ti-header source-Google">  */}
                    <div class="ti-large-logo">
                        <div class="ti-v-center">
                            <img decoding="async" class="ti-logo-fb" src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" width="150" height="25" alt="Google" />
                        </div>
                    </div>
                        <Rating />
                        <div class="ti-text">
                            <span class="nowrap">
                                <strong>1607 reviews</strong>
                            </span>
                        </div>
                    {/* </a> */}
                </div>

            </ReactOwlCarousel>
        </div>
    )
}

export default HomeContact
