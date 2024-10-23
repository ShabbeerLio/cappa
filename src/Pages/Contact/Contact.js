
import React, { useEffect } from 'react'
import "./Contact.css"
import { FaSnowflake } from "react-icons/fa6";
import contactimg from "../../Assets/Contact/contact.jpg"
import { useLocation } from 'react-router-dom';

const Contact = (props) => {

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
        <>
            <div className='contact'>
                <div className='contact-main'>
                    <div className="contact-head">
                        <h1>Contact us</h1>
                        <div className="contact-icon">
                            <span>
                                <div className="seperator">
                                    <FaSnowflake />
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="contact-body">
                        <div className="contact-body-left">
                            <div className="contact-left-img">
                                <img src={contactimg} alt="lewis and clark tours" />
                            </div>
                        </div>
                        <div className="contact-body-right">
                            <div className="contact-right-detail">
                                <p>Lewis and Clark Tour ist ein indischer Reiseveranstalter. Wir planen  <strong>Ihre maßgeschneiderte Luxury India Tour</strong>, privat und mit qualifizierten Reiseleitern sowie professionellen Chauffeuren. Planen Sie Ihren luxuriösen Urlaub in Indien mit uns für authentische und faszinierende Erlebnisse, <strong>wie Goldene Dreieck Touren, Tiger und das Taj Mahal, Ganges zum Taj Mahal Tour, eine zweiwöchige Reise nach Indien</strong>  oder eine <strong>13-tägige Nordindien-Tour</strong>. Sie können aus <strong>den besten Goldenen Dreieck Tour-Paketen</strong> und der <strong>8-tägigen Delhi nach Jaipur Tour wählen</strong>, um die Paläste der Maharajas und das Taj Mahal zu entdecken, oder die Goldene Dreieck Tour mit Varanasi für eine kulturelle, spirituelle Erfahrung in Nordindien. Von Kerala bis Rajasthan für die Tier Safari oder von der lebhaften, magischen Kulturstadt Varanasi bis zum entspannten Goa – unsere Indien-Reiseexperten sind sehr gut informiert über all diese Reiseziele in Indien und unterstützen Sie dabei, Ihre Traumreise nach Indien zu planen, um Ihr bestes Erlebnis zu gewährleisten. Unsere <strong>exotischen Indien-Touren</strong> sind perfekt geplant und organisiert von uns!</p>
                                <p>Möchten Sie Ihre Indienreise mit einem lokalen <strong> indischen Reisebüro</strong> planen und wünschen ein attraktives Reiseangebot? Oder möchten Sie, dass wir Sie zurückrufen? Nach einer Nachricht beantworten wir Ihre Fragen oder Vorschläge so schnell wie möglich und beraten Sie über die verschiedenen Möglichkeiten Ihrer Indienreise. Wir garantieren Ihnen das beste und einzigartige Erlebnis in unseren individuell gestalteten <strong>Indien-Touren!</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.017270727365!2d77.37420797550072!3d28.629244475666525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521d60ee40f%3A0xb6564bc4d9c48998!2sLewis%20and%20Clark%20Tours!5e0!3m2!1sen!2sin!4v1712648271993!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
