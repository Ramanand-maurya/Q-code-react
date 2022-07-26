import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import HomeSliderData from "./HomeSliderData";

export default class HeroSlider extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            infinite: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    dots: false,
                  }
                }
              ]
        };
        return (
            <section className="slider-section">
                <div className="container">
                    <Slider {...settings} className="slider-content-js">
                        {HomeSliderData.map((val, ind) => {
                            return (
                                <div className="slider1" key={ind}>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="slider-content">
                                                <div className="slider-content1">
                                                <div className="slider-para">
                                                    <p>{val.Content}</p>
                                                </div>
                                                <div className="slider-heading">
                                                    <h3>{val.Title} <span className="sliderUline">{val.TitleSpan}<img src="images/Vector1.png"></img></span><br></br>
                                                        {val.TitleAfterSpan}</h3>
                                                </div>
                                                <div className="slider-btn">
                                                    <Link to={val.SliderBtnLink} target="_self" className="btn">{val.SliderBtn}</Link>
                                                </div>
                                                </div>
                                                <span className="tri-1"></span>
                                                <span className="tri-2"></span>
                                                <span className="tri-3"></span>
                                                <span className="tri-4"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="slider-img">
                                                <div className="image-slider">
                                                    {/* <img src={val.Imgsrc} alt="slider-image1" /> */}
                                                    <iframe src={val.Imgsrc} id="animationSlider"></iframe>
                                                </div>
                                                <span className="tri-5"></span>
                                                <span className="tri-6"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        );
    }
}