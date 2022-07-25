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
        </div>
    );
}

export default Banner;