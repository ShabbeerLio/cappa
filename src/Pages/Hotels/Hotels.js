import React from 'react'
import "./Hotels.css"
import HotelCard from '../../Components/HotelCard/HotelCard'

const Hotels = () => {

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

    return (
        <div className='Hotels'>
            <div className="Hotels-box">
                <div className="hotel-box-item">
                    <HotelCard images={OberoiI}/>
                </div>
                <div className="hotel-box-item">
                    <HotelCard images={TajI} />
                </div>
                <div className="hotel-box-item">
                    <HotelCard images={LeelaI}/>
                </div>
                <div className="hotel-box-item">
                    <HotelCard images={TajLakeI}/>
                </div>
            </div>
        </div>
    )
}

export default Hotels
