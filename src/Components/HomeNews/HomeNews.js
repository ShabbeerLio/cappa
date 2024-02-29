import React from 'react'
import "./HomeNews.css"
import hotelB from "../../Assets/Images/1 (4).jpg"
import hotelS from "../../Assets/Images/2 (4).jpg"
import hotelBa from "../../Assets/Images/3 (4).jpg"
import ReactOwlCarousel from 'react-owl-carousel'

const HomeNews = () => {
    return (
        <div className='HomeNews'>
            <h4>Hotel Blog</h4>
            <h2>Our News</h2>
            <div className="HomeNews-container">
                <ReactOwlCarousel loop={Infinity} items={3} >
                    <div className="HomeNews-box">
                        <div className="HomeNews-box-item">
                            <div className="HomeNews-box-item-head">
                                <img src={hotelB} alt="" />
                                <div class="date">
                                    <a href="post.html">
                                        <span>Dec</span>
                                        <i>02</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="con">
                            <span class="category">
                                <a href="news.html">Restaurant</a>
                            </span>
                            <h5>
                                <a href="post.html">Historic restaurant renovated</a>
                            </h5>
                        </div>
                    </div>
                    <div className="HomeNews-box">
                        <div className="HomeNews-box-item">
                            <img src={hotelS} alt="" />
                            <div class="date">
                                <a href="post.html">
                                    <span>Dec</span>
                                    <i>04</i>
                                </a>
                            </div>
                        </div>
                        <div class="con">
                            <span class="category">
                                <a href="news.html">Restaurant</a>
                            </span>
                            <h5>
                                <a href="post.html">Historic restaurant renovated</a>
                            </h5>
                        </div>
                    </div>
                    <div className="HomeNews-box">
                        <div className="HomeNews-box-item">
                            <img src={hotelBa} alt="" />
                            <div class="date">
                                <a href="post.html">
                                    <span>Dec</span>
                                    <i>06</i>
                                </a>
                            </div>
                        </div>
                        <div class="con">
                            <span class="category">
                                <a href="news.html">Restaurant</a>
                            </span>
                            <h5>
                                <a href="post.html">Historic restaurant renovated</a>
                            </h5>
                        </div>
                    </div>
                </ReactOwlCarousel>

            </div>
        </div>
    )
}

export default HomeNews
