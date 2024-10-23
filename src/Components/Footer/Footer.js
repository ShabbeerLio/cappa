import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/Logo/logo.png"

const Footer = (props) => {
    return (
        <>
            <div className='Footer'>
                <div className="footer-box">
                    <div className="footer-boxes">
                        {/* <h3>About Hotel</h3> */}
                        <div className="footer-imag">
                            <img src={logo} alt="" />
                        </div>
                        <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan ivestane aliquam usto in the sapien rutrum.</p>
                    </div>
                    <div className="footer-boxes">
                        <h3>Important Links</h3>
                        <ul>
                            <li>
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/uber-uns" >
                                    Über uns
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/indien-rundreise">
                                Indien Rundreise
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/luxus-goldenes-dreieck" >
                                Luxus Goldenes Dreieck
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/indien-luxusreise" >
                                Indien Luxusreise
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/safari-rundreise">
                                Safari Rundreise
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/indien-reiseblog">
                                Indien Reiseblog
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/was-kunden-über-uns-sagen">
                                Was Kunden über uns sagen
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/kontakt">
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-boxes">
                        <h3>Kontakt</h3>
                        <p>H 44, BSI Business Park, Sector 63, Noida, Uttar Pradesh 201301, India</p>
                        <div className="footer-call-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                    </path>
                                    <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                        <set attributeName="opacity" begin="0.7s" to="1"></set>
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;8"></animate>
                                    </path>
                                    <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                        <set attributeName="opacity" begin="1s" to="1"></set>
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;20"></animate>
                                    </path>
                                </g>
                            </svg>
                            <p>
                                <Link to="tel: +919811207934">
                                    +91-9811-20-7934​ ( 24/7 - Call & WhatsApp )
                                </Link>
                            </p>
                        </div>
                        <div className="footer-call-box">

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                                    </path>
                                    <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                                        <set attributeName="opacity" begin="0.7s" to="1"></set>
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;8"></animate>
                                    </path>
                                    <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                                        <set attributeName="opacity" begin="1s" to="1"></set>
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;20"></animate>
                                    </path>
                                </g>
                            </svg>
                            <p>
                                <Link to="tel: +919958066500">
                                    +91-9958-06-6500
                                </Link>
                            </p>
                        </div>
                        <Link className="footer-email" to="email: info@lewisnclarktours.com">
                            Email: info@lewisnclarktours.com
                        </Link>
                        <div className="footer-icons">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 7.5v0M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm7.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd" d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2a4 4 0 0 0-.2 2.5a11.7 11.7 0 0 1-8.5-4.3a4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4a4.2 4.2 0 0 1-1.9.1a4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1" clip-rule="evenodd" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 224 432">
                                    <path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 14 14">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13" />
                                        <path d="M3.8 5.8C3.8 4 5.2 2.5 7 2.5c1.8 0 3.2 1.5 3.2 3.2C10.2 7.4 8.8 9 7 9c-.8 0-1.6.5-1.9 1.4M5 11l1-5m1.8 5.25a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" />
                                    </g>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Footer-bottom'>
                    <div className="footer-bottom-box">
                        <p>© 2024 &nbsp;</p>
                        <p>Lewis and Clark Tours</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
