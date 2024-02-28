import React from 'react'
import "./HomeForm.css"
import { Link } from 'react-router-dom'

const HomeForm = (props) => {
    return (
        <div className='HomeForm'>
            <div className="HomeForm-left">
                <h5>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h5>
                <div className="HomeForm-left-call">
                    <div className="call-icon">
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

                    </div>
                    <p><Link to="tel: +919871984233">
                        <p>
                            Reservation
                        </p>
                        <h5>
                            +91 9871984233
                        </h5>
                    </Link></p>
                </div>
                <p>call us its toll free</p>
            </div>
            <div className="HomeForm-right">
                <div className="booking-box">
                    <div className="head-box">
                        <h6>Rooms &amp; Suites</h6>
                        <h4>Hotel Booking Form</h4>
                    </div>
                    <div className="booking-inner clearfix">
                        <form action="rooms2.html" className="form1 clearfix">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="input1_wrapper">
                                        <label>Check in</label>
                                        <div className="input1_inner">
                                            <input type="text" className="form-control input datepicker hasDatepicker" placeholder="Check in" id="dp1709121873736" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input1_wrapper">
                                        <label>Check out</label>
                                        <div className="input1_inner">
                                            <input type="text" className="form-control input datepicker hasDatepicker" placeholder="Check out" id="dp1709121873737" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="select1_wrapper">
                                        <label>Adults</label>
                                        <div className="select1_inner">
                                            <select className="select2 select select2-hidden-accessible" data-select2-id="10" tabindex="-1" aria-hidden="true">
                                                <option value="0" data-select2-id="12">Adults</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="11">
                                                <span className="selection">
                                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-llwh-container">
                                                        <span className="select2-selection__rendered" id="select2-llwh-container" role="textbox" aria-readonly="true" title="Adults">Adults</span>
                                                        <span className="select2-selection__arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="select1_wrapper">
                                        <label>Children</label>
                                        <div className="select1_inner">
                                            <select className="select2 select select2-hidden-accessible" data-select2-id="13" tabindex="-1" aria-hidden="true">
                                                <option value="0" data-select2-id="15">Children</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="14">
                                                <span className="selection">
                                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-7esa-container">
                                                        <span className="select2-selection__rendered" id="select2-7esa-container" role="textbox" aria-readonly="true" title="Children">Children</span>
                                                        <span className="select2-selection__arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn-form1-submit mt-15">Check Availability</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeForm
