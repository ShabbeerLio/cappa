import React, { useEffect, useState } from 'react'
import "./Hotels.css"
import HotelCategory from '../../Components/Data/HotelCategory'
import HotelCard from '../../Components/HotelCard/HotelCard'
import { useLocation } from 'react-router-dom'

const Hotels = (props) => {
    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        // Load the Google Analytics script only once
        // const gaScriptId = 'ga-gtag';
        // if (!document.getElementById(gaScriptId)) {
        //     const script = document.createElement('script');
        //     script.id = gaScriptId;
        //     script.async = true;
        //     script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3BK9F87D6E';
        //     document.head.appendChild(script);

        //     script.onload = () => {
        //         gtag('js', new Date());
        //         gtag('config', 'G-3BK9F87D6E');
        //     };
        // }
    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='Hotels'>
            <div className="Hotels-box">
                <h1>{props.heading}</h1>
                <h4>CULTURE, COUNTRYSIDE AND CULINARY</h4>
                <p>Plan your luxury vacation India with Lewis and Clark Tours. Mesmerize your Luxury North India Tour with beautiful Taj Mahal, luxury heritage palaces in colourful spellbinding Rajasthan, overnighting in Oberoi Jungle Lodge and explore India Tiger wildlife Safari. Be witness to the enriched divine and culture in Varanasi. Our Luxury India tour packages are filled with colourful stories and planned with best private tour escort and professional chauffeur driven transports. Please check out our luxury North India Tour packages. The very popular Luxury tour is Golden Triangle India Tour We also offer customized luxury India private packages.   </p>
                <div className="hotel-box-item">
                    {HotelCategory.map((hotel, index) => (
                        <HotelCard hotel={hotel} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hotels
