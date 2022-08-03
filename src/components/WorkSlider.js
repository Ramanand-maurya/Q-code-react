import React, { Component } from "react";
import Slider from "react-slick";
import WorkSliderData from "./WorkSliderData";

export default class WorkSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            slidesToShow: 1,
            infinite: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    dots: false,
                  }
                }
              ]
        };
        return (
            <section className="recent-work-section">
                <div className="container">
                    <Slider {...settings} className="work-slider-nav">
                        {
                            WorkSliderData.map((val, Ind) => {
                                return (
                                    
                                    <div className="slider2" key={Ind}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="recent-work-slider">
                                                    <div className="recent-work-title">
                                                        <p>{val.TopContent}</p>
                                                    </div>
                                                    <div className="recent-work-heading">
                                                        <h4 dangerouslySetInnerHTML={{__html: val.Title}}></h4>
                                                    </div>
                                                    <div className="recent-work-para">
                                                        <p>{val.BottumContent}</p>
                                                    </div>
                                                    <div className="recent-work-btn">
                                                        <a href={val.BtnLink} target="_self">{val.BtnName}</a>
                                                    </div>
                                                    <span className="tri-10"></span>
                                                    <span className="tri-11"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 col-6 pr-0">
                                                <div className="recent-work-login">
                                                    <img src={val.ImgSrc1} alt="Get Started Animation" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 col-6">
                                                <div className="recent-work-profile">
                                                    <img src={val.ImgSrc2} alt="profile Baba Home" />
                                                </div>
                                                <span className="tri-12"></span>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })
                        }
                    </Slider>
                </div>
            </section>
        );
    }
}