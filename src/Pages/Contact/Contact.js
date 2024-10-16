import React, { useEffect } from "react";
import "./Contact.css";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import ContactForm from "../../Components/ContactForm/ContactForm";
import cimg from "../../Assets/Contact/contact.jpg";
import cimg2 from "../../Assets/Logo/logo.png";
import PageBanner from "../../Components/PageBanner/PageBanner";
import pgbanner from "../../Assets/Banner/8.png";

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
        <h2 className="contact-text">Kontaktieren Sie uns für Ihre individuelle Reise nach Indien!</h2>
        <div className="contactdetail-box">
          <div className="contactdetail-box-right">
            <h4>Das Reisebüro Amazing Indien Reisen ist ein Indien Reisen Anbieter. Wir veranstalten kurze und längere Reise wie Indien Rundreise 5 Tage, 8 Tage, 7 Tage, 10 Tage, 12 Tage, 14 Tage, 18 Tage, 20 Tage oder 21 Tage ganz individuell, privat und maßgeschneidert. Planen Sie mit uns Ihre Privatreise Indien wie Rajasthan Rundreise mit Tiger Park, , Oberoi Indien Rundreise und Baden in Goa, Indien Luxus Reise mit Malediven, Indien Nepal Rundreise Buddha Tour, Indien Rundreise Deluxe mit Taj und 5 Sternen Hotels, oder Indien Norden Rundreise durch Delhi, Agra, Rajasthan und Varanasi individual und authentisch. Entdecken Sie Indien Leopard Jawai Safari über Luxus Sujan Camp oder fabelhaften Luxus Serai Camp in der Wüste Jaisalmer noch. Von Kerala nach Rajasthan sind unsere Deutsch Sprechende Indien Reise-experte sehr gut informiert und helfen Ihnen bei der Planung Ihrer Traumreise nach Indien. Ihre Indien Rundreise mit Fahrer und hochqualifizierten Reiseleiter von Indien bestem Reiseveranstalter perfekt geplant und organisiert! Buchen Sie Ihren Indien Urlaub mit Indien Subkontinent Ländern über das Reisebüro Indien Spezialist heute. </h4>
            <img src={cimg} alt="" />
            <p>Möchten Sie Ihre Indien Individualreise mit Indien Reisebüro Spezialist planen und ein unverbindliches Reise-Angebot erfragen? Oder Sie möchten gerne von uns zurückgerufen werden? Nach einer Nachricht beantworten wir Ihre Frage oder Ihre Anregungen baldmöglichst und beraten die verschiedenen Möglichkeiten Ihrer Rundreise durch Indien. Gerne helfen wir Ihnen weiter als Reiseanbieter Indien Rundreise. Wir garantieren die beste und einzigartige Erfahrung in unsere Indien maßgeschneiderte Reisen!</p>
            <h4>Füllen Sie einfach das nachfolgende Kontaktformular vollständig aus, wie z.B. Namen, Anzahl der Reisenden, Email Adresse, Telefonnummer, Reisedauer, Reisezeitraum, Urlaubsziel, Hotelkategorie und noch Ihre individuellen Wünsche. An Werktagen werden Ihre Anfragen in der Regel innerhalb von 24 Stunden beantwortet. Gerne können Sie Ihre Reiseanfrage auch direkt an info@indien-individuell-erleben.de schicken oder erreichen Sie uns an +49-(0)6251-803-79-75. Schnellstmöglich melden wir uns bei Ihnen!</h4>
          </div>
        </div>
        <div className="Contact-box">
          <div className="Contactbox-left">
            <img src={cimg2} alt="" />
            <h4>Reise Info-Center (Deutschland):</h4>
            <p>Amazing Indien Reisen</p>
            <p>Telefon (Call - Rund um die Uhr / 24 x 7)</p>
            <p>+49- (0)6251-803-79-75</p>
            <p><a href=""> +49- (0)157-925-729-38</a></p>
            <h4>Email:</h4>
            <p>info at indien-individuell-erleben punkt de </p>
            <h4>Firmensitz: (Indien)</h4>
            <p>2nd Floor, T-35/A, Flat C-2, Khandsa Colony, Mehrauli Neu Delhi, Delhi 110030, Indien</p>
            <h4>Telefon (Rund um die Uhr - Call & WhatsApp)</h4>
            <p>+91-9811-20-7934 </p>
            <h4>Email:</h4>
            <p>info at indien-individuell-erleben punkt de </p>
            <span>Registriert in Neu Delhi (Unter Verwaltung der Zentralregierung Indiens)</span>
            <h4>Ministerium für Unternehmen (MSME) </h4>
            <p>MSME UAM Nummer   --     DL10D0013736</p>
            <p>GST/VAT Nummer        --     07AZWPK6163B1Z4</p>
          </div>
          <div className="Contactbox-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
