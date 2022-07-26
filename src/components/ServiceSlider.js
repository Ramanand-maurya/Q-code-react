import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import ServiceSliderData from "./ServiceSliderData";

export default class ServiceSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: true,
            slidesToShow: 3,
            infinite: true,
            fade: false,
            autoplay: false,
            autoplaySpeed: 2500,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: false,
                  }
                },
                {
                  breakpoint: 520,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                  }
                }
              ]
        };
        return (
            <section className="services-section-st">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-services">
                                <div className="services-content">
                                    our company
                                </div>
                                <div className="services-heading">
                                    <h3>Our wide range of services meet all your <br></br><span>business </span> needs</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings} className="row slider-nav1">
                        {
                            ServiceSliderData.map((val, Ind) => {
                                return (
                                    <div className="col-12" key={Ind}>
                                        <Link to="/">
                                        <div className="card-serv">
                                            <div className="services-icon">
                                                <img src={val.Imgsrc} />
                                            </div>
                                            <div className="services-title">
                                                <h5>{val.Title} <span> {val.TitleSpan}</span></h5>
                                            </div>
                                            <div className="service-content-para">
                                                <p>{val.Content}</p>
                                            </div>
                                            <span className={`triangle triangle-${Ind+1}`}></span>
                                        </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                    <div className="row">
                        <div className="col-12">
                            <div className="learnMore">
                                <Link to="/about">Learn More <span><img src="images/icon/Arrow back.svg" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}