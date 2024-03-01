import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Star.css"

const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let num = index + 0.5
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='icon' />
                ) : stars >= num ? (
                    <FaStarHalfAlt className='icon' />
                ) : (
                    <AiOutlineStar className='icon' />
                )}
            </span>
        );
    });

    return (
            <div className="icon-style">
                {ratingStar}
                <p>({reviews} customer review)</p>
            </div>
    )
}

export default Star
