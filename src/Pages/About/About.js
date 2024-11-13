import React from 'react';
import "./About.css";
import { BsChatQuoteFill } from "react-icons/bs";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bg from "../../Assets/About/texture-4.png"
import styimg from "../../Assets/Banner/11.png"
import p4 from "../../Assets/About/3f1e7d76-a3cc-4a98-acc7-7173fd98f071.jpg"
import p2 from "../../Assets/About/PHOTO-2023-03-29-14-54-28.jpg"
import p5 from "../../Assets/About/WhatsApp-Image-2023-04-26-at-17.17.17.jpeg"
import p1 from "../../Assets/About/bikram-1.jpg"
import p3 from "../../Assets/About/prashant.jpg"
import { Link } from 'react-router-dom';
import PageBanner from '../../Components/PageBanner/PageBanner';
import pgbanner from "../../Assets/Banner/13.png"


const About = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <>
            <PageBanner cover={pgbanner} />
            {/* <div className='About'>
                <div className="About-background">
                    <img src={bg} alt="" />
                </div>
                <div className="About-main">
                    <div className="About-left-head">
                        <p><BsChatQuoteFill /></p>
                        <span>Welcome to</span>
                    </div>
                    <div className="About-main-body">
                        <div className="About-main-left">
                            <h2>Cappa</h2>
                            <h4>With a perfect blend of creativity, expertise, and dedication, we specialize in offering a seamless design-build home construction experience that encompasses every step of your project – from conceptualization to construction and beyond.</h4>                        </div>
                        <div className="About-main-right">
                            <div className="About-right">
                                <div className="About-right-box">
                                    <p>At Cappa, we're not just a construction company; we're your partners in turning visions into exceptional living spaces.</p>
                                </div>
                            </div>
                            <div className="About-left">
                                <div className="About-box">
                                    <img src={styimg} alt="" />
                                </div>
                                <div className="About-btn">
                                    <p>About Us</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
            <div className='About2'>
                <div className='About-main'>
                    <div className="about-detail">
                        <h4>An India Destination Management Company (DMC)</h4>
                        <h2>Amazing Indien Reisen</h2>
                        <div className="about-detail-desc">
                            <span>Namaste – Willkommen im wunderbaren Indien!</span>
                            <p>Indien, das Land der Kontraste und Facetten, lädt Sie ein, seine Vielfalt in Ihrem nächsten Urlaub zu erleben. Lassen Sie Ihre Indien-Rundreise von Amazing Indien Reisen – dem Experten für Indien Luxus- und Privatreisen – planen. Wir gehören zu den besten Reiseanbietern in Indien und sind Ihr verlässlicher Partner für maßgeschneiderte, individuelle Reisen.</p>
                            <p>Unter dem Motto „Indien individuell erleben“ kreieren wir seit über 12 Jahren traumhafte Luxusreisen durch Indien und den gesamten indischen Subkontinent. Dabei führen wir Sie in die unterschiedlichsten und faszinierendsten Regionen, um sowohl die versteckten Juwelen des Landes als auch die klassischen Touristenattraktionen näherzubringen. Als individueller und privater Reiseanbieter gehen wir auf Ihre persönlichen Wünsche und Interessen bis ins Detail ein. Unsere Indien-Rundreisen sind zu 100 % maßgeschneidert, geschmackvoll und ganz auf Ihre Bedürfnisse abgestimmt. Auf unseren individuellen Luxusreisen entdecken Sie Indien auf eine einzigartige Weise.</p>
                            <span>Warum Indien und der indische Subkontinent?</span>
                            <p>Indien pflegt seit Jahrtausenden enge Beziehungen zu Nepal, Bhutan, Sri Lanka und den Malediven. Diese Länder teilen nicht nur Grenzen, sondern auch eine reiche, gemeinsame Kultur, Sprache und Religion. Übernachten Sie in alten Königspalästen in Rajasthan und erleben Sie den nordindischen Glanz in Ihrem Indien-Luxusurlaub. Entdecken Sie die Spuren Buddhas auf einer Indien-Nepal-Rundreise oder genießen Sie eine Kombireise aus Indien und Malediven mit entspannender Badeverlängerung.</p>
                            <p>Ihr Indien-Urlaub bietet eine Vielzahl von Möglichkeiten für individuelle Reisen: Erleben Sie die exotische Pracht auf einer Oberoi-Indien-Rundreise, das ländliche Rajasthan in Narlai, ChhatraSagar und LakshmanSagar, oder eine spannende Tiger-Safari durch den Zentralindien-Tigerpark. Genießen Sie eine atemberaubende Hausbootfahrt in Kerala, nehmen Sie an aufregenden Kochkursen teil und kosten Sie die köstliche indische Küche auf einer Rundreise durch Südindien.</p>
                            <p>Als Spezialist für Reisen nach Indien gestalten wir Ihre individuelle Rundreise durch Indien und den Subkontinent unvergesslich. Wir sind rund um die Uhr und 7 Tage die Woche - erreichbar, um Ihren Indien-Urlaub persönlich, privat und wunderbar zu planen. Lassen Sie von sich hören – wir freuen uns auf Ihre Kontaktaufnahme!</p>
                        </div>
                    </div>
                </div>
                <div className='About-main'>
                    <div className="about-our-people">
                        <h2>Our Team</h2>
                        <div className="about-people-detail">
                            <div className="people-box">
                                <div className="people-box-image">
                                    <img src={p1} alt="" />
                                </div>
                                <div className="people-box-detail">
                                    <h3>
                                        <a href="/lurury-india-tour/">Bikram K. (Tour Operation)</a>
                                    </h3>
                                    <p>Bikram leitet das Management von Lewis und Clark in Indien. Er bringt über 14 Jahre Erfahrung aus der Tourismus- und Reisebranche mit, insbesondere im Bereich Incoming-Tourismus, wo er Programme erstellt und die gesamte Durchführung bis zum Ende überwacht. Bikram ist fest davon überzeugt, dass es einen Wert für sowohl Gäste als auch Anbieter geben sollte, was zu Win-Win-Partnerschaften für alle führt. Er ist ein leidenschaftlicher Reisender, und seine Lieblingsorte sind Varanasi und Jaisalmer im Norden Indiens, während er seine Freizeit gerne in Kerala verbringt.</p>
                                </div>
                            </div>
                            <div className="people-box">
                                <div className="people-box-image">
                                    <img src={p2} alt="" />
                                </div>
                                <div className="people-box-detail">
                                    <h3>
                                        <a href="/lurury-india-tour/">NAVEEN PATHAK (SALES & MARKETING)</a>
                                    </h3>
                                    <p>Ich bin ein asiatischer Indigener, besessen von Reisen und Freizeitaktivitäten. Ich glaube, dass Reisen einen Menschen so kalibrieren kann, dass er die Reize dieses intra-globalen Phänomens unterscheiden kann. Ich bewundere es, perfekte Momente für alle zu schaffen. Ich bemühe mich, jeden Aspekt von Tourprogrammen perfekt umzusetzen. Ich habe Dienstleistungen für eine globale Kundschaft angeboten, die von TC-I bis TC-III reicht. Man kann sich auf mich für den gesamten indischen Subkontinent in hohem Maße verlassen. Dennoch lerne ich noch immer und ich werde dies wahrscheinlich auch im kommenden Leben tun.</p>
                                </div>
                            </div>
                            <div className="people-box">
                                <div className="people-box-image">
                                    <img src={p3} alt="" />
                                </div>
                                <div className="people-box-detail">
                                    <h3>
                                        <a href="/lurury-india-tour/">PRASHANT SINGH (TOUR LEADER)</a>
                                    </h3>
                                    <p>Prashant wurde in Varanasi geboren und in Delhi aufgezogen. Er hat seinen Bachelor in Tourismus und seinen Master in Tourismus abgeschlossen und ist bisher ein Goldmedaillengewinner. Nach seiner akademischen Ausbildung hat er viele Reiseziele in Indien und den Nachbarländern wie Nepal, Bhutan und Sri Lanka besucht und diese kulturell und historisch erkundet. Prashant arbeitet seit 2006 als Reiseleiter und Begleiter und leitet Gruppenreisen wie die Oberoi India Tours. Seine Serien waren GATE 1 und Designer Holidays. Er hatte hauptsächlich Kunden aus den USA, Kanada, dem Vereinigten Königreich, Australien, Neuseeland und der Schweiz. Sein Schwerpunkt liegt auf Rajasthan sowie Agra und Delhi im Norden Indiens. Erleben Sie die Essenz Indiens kulturell und historisch mit ihm, da er die Touren mit seiner Erfahrung interessant und unvergesslich gestaltet. Sein Bestreben ist es immer, ein Lächeln auf das Gesicht der Reisenden zu zaubern und ihnen das Gefühl zu geben, zu Hause zu sein.</p>
                                </div>
                            </div>
                            <div className="people-box">
                                <div className="people-box-image">
                                    <img src={p4} alt="" />
                                </div>
                                <div className="people-box-detail">
                                    <h3>
                                        <a href="/lurury-india-tour/">DILIP SINGH (TOUR GUIDE)</a>
                                    </h3>
                                    <p>Dilip Singh ist ein erfahrener Reiseleiter und seit 12 Jahren in der Reise- und Tourismusbranche tätig. Zuvor arbeitete er in der Unternehmenswelt bei der Tata Company als Verkaufsleiter, doch seine Leidenschaft fürs Reisen und das Erforschen neuer Orte führte ihn schließlich in die Tourismusbranche. Er arbeitet mit Freude daran, der Gastgeber seiner Gäste in Indien zu sein. Bisher hat er indische Geschichte, Kultur und Archäologie an der Banaras Hindu University studiert, einer der besten Universitäten in Indien. Er verfügt über tiefes Wissen über den Hinduismus und dessen kulturelle Aspekte.</p>
                                </div>
                            </div>
                            <div className="people-box">
                                <div className="people-box-image">
                                    <img src={p5} alt="" />
                                </div>
                                <div className="people-box-detail">
                                    <h3>
                                        <a href="/lurury-india-tour/">NIKHLESH DUBEY (IT TEAM)</a>
                                    </h3>
                                    <p>Nikhlesh Dubey hat 15 Jahre Erfahrung als Digital Marketing Consultant. Sein Unternehmen GITS Project unterstützt seit 7 Jahren unsere Reiseunternehmen. Derzeit leitet er das gesamte Team für Webentwicklung und -design und überwacht die technischen Teams eng.</p>
                                </div>
                            </div>
                            <div className="people-box-button">
                                <Link to="/kontakt" onClick={scrollToTop}>
                                    <p>Book Now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;