import React from 'react'
import pgbanner from "../../Assets/Banner/8.png"
import PageBanner from '../../Components/PageBanner/PageBanner'
import "./About.css"

const About = () => {
    return (
        <div className='About'>
            <PageBanner cover={pgbanner} />
            <div className='About-main'>
                <div className='About-box'>
                    About
                </div>
            </div>
        </div>
    )
}

export default About
