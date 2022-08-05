import React from "react";
import Banner from "../components/Banner";
import { Link,useParams } from "react-router-dom";
import ServiceSliderData from "../components/ServiceSliderData";

function ServiceDetail(){
    const { serviceId } = useParams();
    return(
        <>
        <Banner heading={<>Our wide range of services meet all your <span>business</span> needs</>} title="DIGITAL MARKETING" bannerImg="/images/serviceBanner.png" />
        <section className="services-section-st servicesPage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-services">
                            <div className="services-content">
                                Best digital marketing services
                            </div>
                        </div>
                    </div>
                </div>
                <span className="tri-1"></span>
                <span className="tri-2"></span>
                <span className="tri-3"></span>
                
                    {
                        ServiceSliderData.filter(val => val.id == serviceId).map((val,i) =>{
                            return(
                                <div className="row" key={i}>
                                    {val.AllServices.map((serValue,Index) =>{
                                    return(
                                        <div className="col-md-6 col-lg-4 col-sm-6" key={Index}>
                                            <Link to={`/ServiceDetailPage/${val.id}/${serValue.id}`}>
                                                <div className="card-serv">
                                                    <div className="services-icon">
                                                        <img src={serValue.Imgsrc} />
                                                    </div>
                                                    <div className="services-title">
                                                        <h5 dangerouslySetInnerHTML={{__html: serValue.Title}} />
                                                    </div>
                                                    <div className="service-content-para">
                                                        <p>{serValue.Content}
                                                        </p>
                                                    </div>
                                                    <span className={`triangle triangle-${Index+1}`}></span>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                                </div>
                            )
                        })
                    }
                
            </div>
        </section>
        </>
    )
}
export default ServiceDetail;