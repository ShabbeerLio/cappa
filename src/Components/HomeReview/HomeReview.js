import React from 'react'
import "./HomeReview.css"
import ReactOwlCarousel from 'react-owl-carousel'

const HomeReview = () => {
    return (
        <div className='HomeReview'>
            <div className="HomeReview-box">
                <div className="head-box">
                    <h6>Testimonials</h6>
                    <h4>What Client's Say?</h4>
                    <div className="line"></div>
                </div>
                <ReactOwlCarousel loop={Infinity} items={1} >
                    <div className="HomeReview-boxes">
                        <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                        <div className="HomeReview-info">
                            <div className="author-img">
                                <img src="https://duruthemes.com/demo/html/cappa/demo3-dark/img/team/5.jpg" alt="" />
                            </div>
                            <div className="HomeReview-cont">
                                <h6>Olivia Martin</h6>
                                <span>Guest review</span>
                            </div>
                        </div>
                    </div>
                </ReactOwlCarousel>
            </div>
        </div>
    )
}

export default HomeReview
