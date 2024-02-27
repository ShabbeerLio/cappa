import React from 'react'
import "./HomeVideo.css"

const HomeVideo = (props) => {
    return (
        <div className='HomeVideo'>
            <div className="HomeVideo-container">
                <p>The Cappa Luxury Hotel</p>
                <h2>Promotional Video</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="m14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664Z"></path>
                        <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default HomeVideo
