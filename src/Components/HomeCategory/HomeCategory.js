import React from 'react'
import "./HomeCategory.css"
import resturent from "../../Assets/Images/1 (2).jpg"
import spa from "../../Assets/Images/3 (3).jpg"
import fitness from "../../Assets/Images/2 (3).jpg"
import health from "../../Assets/Images/1 (3).jpg"

const HomeCategory = () => {
    return (
        <div className='HomeCategory'>
            <div className="homeCategory-box">
                <div className="homeCategory-box-left">
                    <a href="">
                        <img src={resturent} alt="" />
                    </a>
                </div>
                <div className="homeCategory-box-right">
                    <div className="content">
                        <div className="cont">
                            <div className="info">
                                <h6>Discover</h6>
                            </div>
                            <h4>The Restaurant</h4>
                            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                            <div className="butn-dark">
                                <a href="/">
                                    <span>Learn More</span>
                                </a>
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
                            <h4>Spa Center</h4>
                            <p>Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                            <div className="butn-dark">
                                <a href="/">
                                    <span>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeCategory-box-left">
                <a href="">
                        <img src={spa} alt="" />
                    </a>
                </div>
            </div>
            <div className="homeCategory-box">
                <div className="homeCategory-box-left">
                <a href="">
                        <img src={fitness} alt="" />
                    </a>
                </div>
                <div className="homeCategory-box-right">
                    <div className="content">
                        <div className="cont">
                            <div className="info">
                                <h6>MODERN</h6>
                            </div>
                            <h4>Fitness Center</h4>
                            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                            <div className="butn-dark">
                                <a href="/">
                                    <span>Learn More</span>
                                </a>
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
                            <h4>The Restaurant</h4>
                            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                            <div className="butn-dark">
                                <a href="/">
                                    <span>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeCategory-box-left">
                <a href="">
                        <img src={health} alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default HomeCategory
