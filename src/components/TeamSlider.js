import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import TeamSliserData from './TeamSliderData';
import BoardMemberData from "./BoardMemberData";

export default class TeamSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: false,
            slidesToShow: 4,
            infinite: true,
            fade: false,
            autoplay: false,
            autoplaySpeed: 2500,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll:1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 520,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                }
              ]
        };
        return (
            <section className="LeadershipSection">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="LeadershipTitle">
                            <p>OUR TEAM</p>
                        </div>
                        <div className="LeadershipHeading">
                            <h5>Leadership Team</h5>
                        </div>
                        <div className="LeadershipPara">
                            <p>We’re building the future of Software Development</p>
                        </div>
                    </div>
                </div>
                    <Slider {...settings} className="row Leader-Team">
                        {
                            TeamSliserData.map((val, Ind) => {
                                return (
                                    <div className="col-md-12" key={Ind}>
                                        <div className="card-leader mt-0">
                                            <div className="leader-img">
                                                <img src={val.Imgsrc} />
                                            </div>
                                            <div className="leader-title">
                                                <h6>{val.Name}</h6>
                                            </div>
                                            <div className="leader-content-para">
                                                <p className="designation">{val.Designation}</p>
                                                <p>{val.para}</p>
                                            </div>
                                            <div className="social-icons">
                                                {
                                                val.Social.map((socialI,index) =>{
                                                    return(
                                                        <Link key={index} to={socialI.facebookLink}><span><img src={socialI.facebookIcon} /></span></Link>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="LeadershipTitle">
                            <p>TEAM</p>
                        </div>
                        <div className="LeadershipHeading">
                            <h5>Board Members</h5>
                        </div>
                        <div className="LeadershipPara">
                            <p>We’re building the future of Software Development</p>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="row Leader-Team">
                    {
                        BoardMemberData.map((val, Ind) => {
                            return (
                                <div className="col-md-12" key={Ind}>
                                    <div className="card-leader mt-0">
                                        <div className="leader-img">
                                            <img src={val.Imgsrc} />
                                        </div>
                                        <div className="leader-title">
                                            <h6>{val.Name}</h6>
                                        </div>
                                        <div className="leader-content-para">
                                            <p className="designation">{val.Designation}</p>
                                            <p>{val.para}</p>
                                        </div>
                                        <div className="social-icons">
                                            {
                                            val.Social.map((socialI,index) =>{
                                                return(
                                                    <Link key={index} to={socialI.facebookLink}><span><img src={socialI.facebookIcon} /></span></Link>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
                </div>
                <span className="tri-1"></span>
                <span className="tri-2"></span>
                <span className="tri-3"></span>
                <span className="tri-4"></span>
                <span className="tri-5"></span>
                <span className="tri-6"></span>
            </section>
        );
    }
}