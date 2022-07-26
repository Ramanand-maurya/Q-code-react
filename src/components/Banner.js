import React from "react";
function Banner(props){
    return(
        <div className="banner-wrap" style={{backgroundImage:`url(${props.bannerImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner">
                            <p>{props.title}</p>
                            <h4>{props.heading}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <span className="tri-1"></span>
            <span className="tri-2"></span>
            <span className="tri-3"></span>
        </div>
    );
}

export default Banner;