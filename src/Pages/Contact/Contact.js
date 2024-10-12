import React, { useEffect } from "react";
import "./Contact.css";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import ContactForm from "../../Components/ContactForm/ContactForm";
import cimg from "../../Assets/Contact/3.png";
import PageBanner from "../../Components/PageBanner/PageBanner";
import pgbanner from "../../Assets/Banner/7.png";

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
  }, [props.title, props.descriptions, location.pathname]);

  return (
    <div className="Contact">
      <PageBanner cover={pgbanner} />
      <div className="Contact-main">
        <div className="contact-title">
          <h6>Rooms & Suites</h6>
          <h1>Contact Us</h1>
        </div>
        <div className="Contact-box">
          <div className="Contactbox-left">
            <img src={cimg} alt="" />
          </div>
          <div className="Contactbox-right">
            <ContactForm />
          </div>
        </div>
        <h2 className="contact-text">Kontaktieren Sie uns für Ihre individuelle Reise nach Indien!</h2>
        <div className="contactdetail-box">
          <div className="contactdetail-box-left">
            <div className="contact-detail-card">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    strokeDasharray="64"
                    strokeDashoffset="64"
                    d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    ></animate>
                    <animateTransform
                      attributeName="transform"
                      begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s"
                      dur="0.5s"
                      type="rotate"
                      values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
                    ></animateTransform>
                  </path>
                  <path
                    strokeDasharray="4"
                    strokeDashoffset="4"
                    d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723"
                    opacity="0"
                  >
                    <set
                      id="lineMdPhoneCallLoop0"
                      attributeName="opacity"
                      begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
                      to="1"
                    ></set>
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s"
                      dur="0.2s"
                      values="4;8"
                    ></animate>
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s"
                      dur="0.3s"
                      values="0;4"
                    ></animate>
                    <set
                      attributeName="opacity"
                      begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s"
                      to="0"
                    ></set>
                  </path>
                  <path
                    strokeDasharray="10"
                    strokeDashoffset="10"
                    d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535"
                    opacity="0"
                  >
                    <set
                      attributeName="opacity"
                      begin="1s;lineMdPhoneCallLoop0.begin+3s"
                      to="1"
                    ></set>
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1s;lineMdPhoneCallLoop0.begin+3s"
                      dur="0.2s"
                      values="10;20"
                    ></animate>
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s"
                      dur="0.3s"
                      values="0;10"
                    ></animate>
                    <set
                      attributeName="opacity"
                      begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s"
                      to="0"
                    ></set>
                  </path>
                </g>
              </svg>
              <div className="contactcard-detail">
                <h6>Phone No</h6>
                <p>Mob : +91 9871984233</p>
              </div>
            </div>
            <div className="contact-detail-card">
              <IoMail />
              <div className="contactcard-detail">
                <h6>Email Address</h6>
                <p>info@lewisnclarktours.com</p>
              </div>
            </div>
            <div className="contact-detail-card">
              <FaLocationDot />
              <div className="contactcard-detail">
                <h6>Address</h6>
                <p>
                  2nd Floor, T-35/A, Flat C-2, Khandsa Colony, Mehrauli Neu
                  Delhi, Delhi 110030, Indien
                </p>
              </div>
            </div>
          </div>
          <div className="contactdetail-box-right">
            <p>Das Reisebüro Amazing Indien Reisen ist ein Indien Reisen Anbieter. Wir veranstalten kurze und längere Reise wie Indien Rundreise 5 Tage, 8 Tage, 7 Tage, 10 Tage, 12 Tage, 14 Tage, 18 Tage, 20 Tage oder 21 Tage ganz individuell, privat und maßgeschneidert. Planen Sie mit uns Ihre Privatreise Indien wie Rajasthan Rundreise mit Tiger Park, , Oberoi Indien Rundreise und Baden in Goa, Indien Luxus Reise mit Malediven, Indien Nepal Rundreise Buddha Tour, Indien Rundreise Deluxe mit Taj und 5 Sternen Hotels, oder Indien Norden Rundreise durch Delhi, Agra, Rajasthan und Varanasi individual und authentisch. Entdecken Sie Indien Leopard Jawai Safari über Luxus Sujan Camp oder fabelhaften Luxus Serai Camp in der Wüste Jaisalmer noch. Von Kerala nach Rajasthan sind unsere Deutsch Sprechende Indien Reise-experte sehr gut informiert und helfen Ihnen bei der Planung Ihrer Traumreise nach Indien. Ihre Indien Rundreise mit Fahrer und hochqualifizierten Reiseleiter von Indien bestem Reiseveranstalter perfekt geplant und organisiert! Buchen Sie Ihren Indien Urlaub mit Indien Subkontinent Ländern über das Reisebüro Indien Spezialist heute. </p>
            <p>Möchten Sie Ihre Indien Individualreise mit Indien Reisebüro Spezialist planen und ein unverbindliches Reise-Angebot erfragen? Oder Sie möchten gerne von uns zurückgerufen werden? Nach einer Nachricht beantworten wir Ihre Frage oder Ihre Anregungen baldmöglichst und beraten die verschiedenen Möglichkeiten Ihrer Rundreise durch Indien. Gerne helfen wir Ihnen weiter als Reiseanbieter Indien Rundreise. Wir garantieren die beste und einzigartige Erfahrung in unsere Indien maßgeschneiderte Reisen!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
