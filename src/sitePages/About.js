import React from "react";
import AboutPage from "../components/AboutSec";
import Banner from "../components/Banner";
import TeamSlider from "../components/TeamSlider";

function CardAbout(props) {
    return (
      <>
        <div className="col-md-6 col-sm-6 col-12">
            <div className="card-serv mt-0 mb-5">
                <div className="services-icon">
                    <img src={props.imgsrc} />
                </div>
                <div className="services-title">
                    <h5>{props.heading}</h5>
                </div>
                <div className="service-content-para">
                    <p>{props.paragraph}
                    </p>
                </div>
            </div>
        </div>
      </>
    );
  }
function About(){
    const ballStyle = {
        display:'none'
      }
    return(
        <>
            <Banner heading={<>Streamline your <span>digital World</span> with US</>} title="ABOUT US" bannerImg="/images/AboutRectangle.png" />
            <AboutPage style1={ballStyle} linkArrow="images/icon/Arrow back.svg" linkName="Discover Now" heading={<>Top IT Company in India - <span className="qty">Qwerty <span>Code</span></span></>} title="COMPANY OVERVIEW" para="Qwerty Code Pvt. Ltd. is an IT & software services provider company located at Gurugram, Haryana (India). We believe in delivering unparalleled services to the business around the globe. Qwerty Code has initiated to assist business enterprises to achieve efficiency and effectiveness by taking them into the e-world, being partners in e-revolution. Our technical expertise and experience are unparalleled in the industry. Qwerty Code has a strong focus on research & development, marketing and customer support to encompass expertise covering analysing, designing, development and implementation of various kinds of software products and services comprising all the streams and colours of industries." linkBtn="" />

            <section className="services-section-st aboutPage2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-services">
                                <div className="services-content">
                                    our MISSION
                                </div>
                                <div className="services-heading">
                                    <h3>Our wide range of services meet all your <br /><span>business </span> needs</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <CardAbout imgsrc="images/serv-2.png" heading={<>Our <span> Mission</span></>} paragraph="Having a team of talented professionals with decades of experience. We, at Qwerty
                                        Code believe in delivering unparalleled services to the business around the globe." />
                        <CardAbout imgsrc="images/serv-2.png" heading={<>Our <span> Vision</span></>} paragraph="Having a team of talented professionals with decades of experience. We, at Qwerty
                                        Code believe in delivering unparalleled services to the business around the globe." />
                    </div>
                </div>
            </section>

            {/* Leadership Team  */}
            <TeamSlider />
        </>
    )
}

export default About;