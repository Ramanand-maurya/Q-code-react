import React from 'react';
import {Link} from 'react-router-dom';
function AboutSec() {
    return (
        <>
        <section className="about-section-st">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-about">
                            <div className="about-content">
                                our company
                            </div>
                            <div className="about-heading">
                                <h1>Top IT Company in India - <span className="qty">Qwerty <span>Code</span></span></h1>
                            </div>
                            <div className="about-para">
                                <p>Having a team of talented professionals with decades of experience. We, at Qwerty Code believe in delivering unparalleled services to the business around the globe. Qwerty Code Pvt. Ltd. has initiated to assist business enterprises to achieve efficiency and effectiveness by taking them into the e-world, being partners in e-revolution.</p>
                            </div>
                            <div className="about-btn">
                                <Link to="/about" target="_self">Discover Now <span><img src="images/icon/Arrow back.svg" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AboutSec;