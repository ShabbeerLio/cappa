import React from 'react';
import "./HomeCategory.css";
import resturent from "../../Assets/ImagesNew/OberoiHotel/Oberoi hotel main.jpg";
import spa from "../../Assets/ImagesNew/TajHotel/Taj Hotel main.jpg";
import fitness from "../../Assets/ImagesNew/LeelaPalace/LeelaPalacemain.jpg";
import health from "../../Assets/ImagesNew/tajLakePalace/taj lake palace main.jpg";
// import "~react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const HomeCategory = () => {
    const images = [
        {
            original: "https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/prop/lnd7.jpg",
            thumbnail: "https://d25wybtmjgh8lz.cloudfront.net/sites/default/files/prop/lnd7.jpg",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    return (
        <div className='HomeCategory'>
            <div className="HomeCategory-heading">
                <h2>Luxury Accomodation</h2>
            </div>
            <div className="homeCategory-box">
                <div className="homeCategory-box-left">
                <ImageGallery 
                    items={images} 
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
                            <h4>Hotel Taj</h4>
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
                <ImageGallery 
                    items={images} 
                    showFullscreenButton={false} 
                    showPlayButton={false} 
                    showNav={false} />
                </div>
            </div>
            <div className="homeCategory-box">
                <div className="homeCategory-box-left">
                    
                    <ImageGallery 
                    items={images} 
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
                            <h4>Taj Lake Palace Udaipur</h4>
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
                    <ImageGallery 
                    items={images} 
                    showFullscreenButton={false} 
                    showPlayButton={false} 
                    showNav={false} />
                </div>
            </div>
            <div className="homeCategory-more-button">
                <div className="butn-dark">
                    <a href="/">
                        <span>View More</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default HomeCategory
