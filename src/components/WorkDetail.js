import React from "react";
import WorkDetailData from "./WorkDetailData";

function WorkDetail() {
    return (
        <>
            <section className="work-process">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-work-title">
                                <div className="para-content">
                                    <p>How We Work</p>
                                </div>
                                <div className="heading-content">
                                    <h3>How <span>Qwerty <span>Code</span></span> assists<br></br>
                                        your business</h3>
                                </div>
                            </div>
                            <span className="tri-7"></span>
                            <span className="tri-8"></span>
                            <span className="tri-9"></span>
                        </div>
                        
                    </div>
                    <div className="row pb-5 hr-line">
                        {
                            WorkDetailData.map((val, ind) => {
                                return(
                                    <div className="col-md-6 col-lg-3 col-12" key={ind}>
                                    <div className="card-main">
                                        <div className="card-number">
                                            <div className={ind==0 ? "active" : ""} ><span>{ind+1}</span></div>
                                        </div>
                                        <div className="content-assists">
                                        <div className="card-head">
                                            <h5>{val.Title}</h5>
                                        </div>
                                        <div className="card-para">
                                            <p>{val.Content}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default WorkDetail;