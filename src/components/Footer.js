import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';


function Footer(){
    return(
        <>
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-logo">
                            <img src={Logo} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="footer-left-side">
                            <div className="footer-head">
                                <h5><span>Qwerty <span>Code</span></span> Pvt Ltd</h5>
                            </div>
                            <div className="footer-address">
                                <p>A 61, Sector 63,<br></br>
                                    Noida, Uttar Pradesh 201301</p>
                            </div>
                            <div className="footer-phone">
                                <p>+91 120 432 3577</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 footermenu1">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-12">
                                <div className="footer-middle-side">
                                    <div className="footer-middle-menu">
                                        <ul className="first-menu">
                                            <li><div className="footer-middle-head">
                                                <h6>Company</h6>
                                            </div></li>
                                            <li><Link to="/about">Why Us</Link></li>
                                            <li><Link to="/">Blog Posts</Link></li>
                                            <li><Link to="/contact">Get In Touch</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-12">
                                <div className="footer-center">
                                    <ul className="second-menu">
                                        <li><div className="footer-middle-head">
                                            <h6>Product</h6>
                                        </div></li>
                                        <li><Link to="/">Educational ERP</Link></li>
                                        <li><Link to="/">E-Commerce</Link></li>
                                        <li><Link to="/">HMS ERP</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-12">
                                <div className="footer-right-side">
                                    <ul className="right-menu">
                                        <li><div className="footer-right-head">
                                            <h6>RESOURCES</h6>
                                        </div></li>
                                        <li><Link to="/">Bulk SMS</Link></li>
                                        <li><Link to="/">E-mail Services</Link></li>
                                        <li><Link to="/career">Career</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-copy">
                    <div className="col-md-6">
                        <div className="copy-right">
                            <p>© 2022 <span>Qwerty Code</span>. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-social-icon">
                            <ul>
                                <li><a href="https://www.facebook.com/qwertycodeIndia/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/qwertycode.india/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/qwertycode_org" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://in.pinterest.com/qwertycodeIndia/" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="/"><i className="fa fa-skype"></i></a></li>
                                <li><a href="https://in.linkedin.com/company/qwerty-code" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Footer;