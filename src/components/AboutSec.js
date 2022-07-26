import React from 'react';
import {Link} from 'react-router-dom';
function AboutSec(props) {
    return (
        <>
        <section className="about-section-st aboutPage1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-about">
                            <div className="about-content">
                                {props.title}
                            </div>
                            <div className="about-heading">
                                <h1>{props.heading}</h1>
                            </div>
                            <div className="about-para">
                                <p>{props.para}</p>
                            </div>
                            <div className="about-btn">
                                <Link style={props.style1} to={props.linkBtn} target="_self">{props.linkName} <span><img src={props.linkArrow} /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span style={props.style2} className="tri-1"></span>
            <span style={props.style2} className="tri-2"></span>
            <span style={props.style2} className="tri-3"></span>
        </section>
        </>
    );
}

export default AboutSec;