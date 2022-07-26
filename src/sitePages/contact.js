import React from "react";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <>
        <Banner heading="Contact us for a quote Help to join the team" title="Get in touch" bannerImg="/images/Rectangle29.png" />
        {/* ----------Contact Form----------- */}
        <section className="contactForm">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ContactForm />
                    </div>
                    <div className="col-lg-4">
                        <div className="addressBox">
                            <div className="locationArea">
                                <div className="adHead">
                                    <h5><span><img src="images/icon/clarity_attachment-line.svg" /></span> our location
                                    </h5>
                                </div>
                                <div className="addPlace">
                                    <p>A 61, Sector 63</p>
                                    <h6>Noida Uttar Pradesh</h6>
                                    <p>India 201307</p>
                                </div>
                            </div>
                            <div className="locationArea">
                                <div className="adHead">
                                    <h5> <span><img src="images/icon/message.svg" /></span> Write to us</h5>
                                </div>
                                <div className="addPlace">
                                    <h6>info@qwertycode.in</h6>
                                </div>
                            </div>
                            <div className="locationArea">
                                <div className="adHead">
                                    <h5> <span><img src="images/icon/phone.svg" /></span> Call us</h5>
                                </div>
                                <div className="addPlace">
                                    <h6>+91 120 432 3577</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="tri-1"></span>
            <span className="tri-2"></span>
            <span className="tri-3"></span>
        </section>
          <section className="mapSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="mapInner">
                        <iframe width="100%" height="450" style={{border:"0"}} loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3211.6583983314!2d77.37996139789144!3d28.619622923464213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5abae74c613e07a!2sQwerty%20Code%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1654606871902!5m2!1sen!2sin"></iframe>
                           </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contact;